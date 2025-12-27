import express from "express";
import crypto from "crypto";
import path from "path";
import fetch from "node-fetch";
import { fileURLToPath } from "url";
import { supabase } from "./supabase.js";

const app = express();

// ES module fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const {
  SHOPIFY_API_KEY,
  SHOPIFY_API_SECRET,
  SCOPES,
  APP_URL
} = process.env;

/* ---------------- FRONTEND ---------------- */

app.use(express.static(path.join(__dirname, "../dist")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

/* ---------------- SHOPIFY OAUTH ---------------- */

app.get("/auth", (req, res) => {
  const { shop } = req.query;
  if (!shop) return res.status(400).send("Missing shop parameter");

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
  if (!shop || !code) return res.status(400).send("Missing params");

  const tokenResponse = await fetch(
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

  const data = await tokenResponse.json();

  if (!data.access_token) {
    console.error(data);
    return res.status(500).send("Token exchange failed");
  }

  const { error } = await supabase
    .from("shops")
    .upsert({
      shop_domain: shop,
      access_token: data.access_token
    });

  if (error) {
    console.error("Supabase error:", error);
    return res.status(500).send("DB error");
  }

  console.log("✅ Shop saved:", shop);

  res.redirect(`/?shop=${shop}`);
});

/* ---------------- FALLBACK ---------------- */

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`RushFee running on port ${PORT}`);
});
