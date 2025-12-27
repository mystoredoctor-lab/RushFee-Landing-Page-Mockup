import express from "express";
import crypto from "crypto";
import path from "path";
import fetch from "node-fetch";
import { fileURLToPath } from "url";
import { supabase } from "./supabase.js";

const app = express();

/* ---------------- ES MODULE FIX ---------------- */

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* ---------------- ENV ---------------- */

const {
  SHOPIFY_API_KEY,
  SHOPIFY_API_SECRET,
  SCOPES,
  APP_URL
} = process.env;

/* ---------------- FRONTEND ---------------- */

// Serve Vite build
app.use(express.static(path.join(__dirname, "../dist")));

// Root – landing OR app entry
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
  if (!shop || !code) {
    return res.status(400).send("Missing OAuth params");
  }

  // Exchange code for token
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
    console.error("OAuth failed:", data);
    return res.status(500).send("OAuth failed");
  }

  // Save shop
  const { error } = await supabase
    .from("shops")
    .upsert({
      shop_domain: shop,
      access_token: data.access_token
    });

  if (error) {
    console.error("Supabase error:", error);
    return res.status(500).send("Database error");
  }

  console.log("✅ Shop installed:", shop);

  // Redirect back into app with shop context
  res.redirect(`/?shop=${shop}`);
});

/* ---------------- API (REAL DATA) ---------------- */

app.get("/api/me", async (req, res) => {
  const { shop } = req.query;
  if (!shop) {
    return res.status(400).json({ error: "Missing shop" });
  }

  const { data, error } = await supabase
    .from("shops")
    .select("shop_domain")
    .eq("shop_domain", shop)
    .single();

  if (error || !data) {
    return res.status(401).json({ error: "Shop not found" });
  }

  res.json({ shop: data.shop_domain });
});

/* ---------------- FALLBACK ---------------- */

// React Router support
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

/* ---------------- START ---------------- */

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 RushFee running on port ${PORT}`);
});
