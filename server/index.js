import express from "express";
import crypto from "crypto";
import path from "path";
import fetch from "node-fetch";
import { fileURLToPath } from "url";
import { supabase } from "./supabase.js";

const app = express();

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const {
  SHOPIFY_API_KEY,
  SHOPIFY_API_SECRET,
  SCOPES,
  APP_URL
} = process.env;

/* ---------------- FRONTEND ---------------- */

// Serve Vite build
app.use(express.static(path.join(__dirname, "../dist")));

// Serve frontend (NO LOGIC HERE)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

/* ---------------- SHOPIFY AUTH ---------------- */

app.get("/auth", (req, res) => {
  const { shop } = req.query;

  if (!shop) {
    return res.status(400).send("Missing shop parameter");
  }

  const state = crypto.randomBytes(16).toString("hex");
  const redirectUri = `${APP_URL}/auth/callback`;

  const installUrl =
    `https://${shop}/admin/oauth/authorize` +
    `?client_id=${SHOPIFY_API_KEY}` +
    `&scope=${SCOPES}` +
    `&redirect_uri=${redirectUri}` +
    `&state=${state}`;

  res.redirect(installUrl);
});

app.get("/auth/callback", async (req, res) => {
  const { shop, code } = req.query;

  if (!shop || !code) {
    return res.status(400).send("Missing shop or code");
  }

  const tokenRes = await fetch(
    `https://${shop}/admin/oauth/access_token`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        client_id: SHOPIFY_API_KEY,
        client_secret: SHOPIFY_API_SECRET,
        code
      })
    }
  );

  const data = await tokenRes.json();

  if (!data.access_token) {
    console.error(data);
    return res.status(500).send("OAuth failed");
  }

  // Save shop
  await supabase.from("shops").upsert({
    shop_domain: shop,
    access_token: data.access_token
  });

  console.log("✅ Installed:", shop);

  // Go to config page
  res.redirect(`/config?shop=${shop}`);
});

/* ---------------- SPA FALLBACK ---------------- */

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`RushFee running on port ${PORT}`);
});
