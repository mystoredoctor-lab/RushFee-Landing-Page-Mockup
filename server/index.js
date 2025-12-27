import express from "express";
import crypto from "crypto";

const app = express();

const {
  SHOPIFY_API_KEY,
  SHOPIFY_API_SECRET,
  SCOPES,
  APP_URL
} = process.env;

/**
 * Landing page
 * No auth here
 */
app.get("/", (req, res) => {
  const shop = req.query.shop || "";

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>RushFee</title>
      </head>
      <body style="font-family: sans-serif">
        <h1>RushFee</h1>
        <p>Generate extra revenue with priority processing.</p>

        <form action="/start" method="GET">
          <input type="hidden" name="shop" value="${shop}" />
          <button type="submit">Get Started</button>
        </form>
      </body>
    </html>
  `);
});

/**
 * Start OAuth after button click
 */
app.get("/start", (req, res) => {
  const shop = req.query.shop;
  if (!shop) return res.status(400).send("Missing shop");

  res.redirect(`/auth?shop=${shop}`);
});

/**
 * Shopify OAuth
 */
app.get("/auth", (req, res) => {
  const shop = req.query.shop;
  if (!shop) return res.status(400).send("Missing shop");

  const redirectUri = `${APP_URL}/auth/callback`;

  const installUrl =
    `https://${shop}/admin/oauth/authorize` +
    `?client_id=${SHOPIFY_API_KEY}` +
    `&scope=${SCOPES}` +
    `&redirect_uri=${redirectUri}`;

  res.redirect(installUrl);
});

/**
 * OAuth callback
 */
app.get("/auth/callback", async (req, res) => {
  const { shop, code } = req.query;
  if (!shop || !code) return res.status(400).send("Missing params");

  const response = await fetch(
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

  await response.json();

  console.log("Installed shop:", shop);

  res.redirect("/config");
});

/**
 * Config page
 */
app.get("/config", (req, res) => {
  res.send("<h1>RushFee Config Page</h1>");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("RushFee running on port " + PORT);
});
