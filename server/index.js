import express from "express";
import crypto from "crypto";
import fetch from "node-fetch";

const app = express();

const {
  SHOPIFY_API_KEY,
  SHOPIFY_API_SECRET,
  SCOPES,
  APP_URL
} = process.env;

/**
 * 1️⃣ Landing page (NO AUTH HERE)
 * Shopify will open this after install
 */
app.get("/", (req, res) => {
  res.send(`
    <h1>RushFee</h1>
    <p>Turn urgency into revenue</p>

    <form action="/start" method="GET">
      <input
        type="hidden"
        name="shop"
        value="${req.query.shop || ""}"
      />
      <button type="submit">Start for free</button>
    </form>
  `);
});

/**
 * 2️⃣ User clicks "Start for free"
 * This is where OAuth starts
 */
app.get("/start", (req, res) => {
  const shop = req.query.shop;

  if (!shop) {
    return res.status(400).send("Missing shop parameter");
  }

  res.redirect(`/auth?shop=${shop}`);
});

/**
 * 3️⃣ Shopify OAuth
 */
app.get("/auth", (req, res) => {
  const shop = req.query.shop;
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

/**
 * 4️⃣ OAuth callback
 */
app.get("/auth/callback", async (req, res) => {
  const { shop, code } = req.query;
  if (!shop || !code) return res.status(400).send("Missing parameters");

  const accessTokenResponse = await fetch(
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

  const data = await accessTokenResponse.json();

  console.log("Installed shop:", shop);
  console.log("Access token received");

  // 🔜 Save shop + token later (Supabase / DB)

  res.redirect("/config");
});

/**
 * 5️⃣ Config page (after auth)
 */
app.get("/config", (req, res) => {
  res.send(`
    <h1>RushFee Configuration</h1>
    <p>Set your priority order price here</
