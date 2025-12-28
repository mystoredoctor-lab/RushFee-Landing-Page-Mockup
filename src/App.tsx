import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useSearchParams
} from 'react-router-dom';

import { ConfigurationPage } from './pages/ConfigurationPage';
import { DashboardPage } from './pages/DashboardPage';

import {
  FaChartLine,
  FaBolt,
  FaDollarSign,
  FaShieldAlt,
  FaArrowRight,
  FaCheck,
  FaShopify,
  FaAws,
  FaStripe,
  FaStar
} from 'react-icons/fa';

/* ---------------- SHOPIFY INSTALL HANDLER ---------------- */

function useShopInstall() {
  const [shop, setShop] = useState('');
  const [searchParams] = useSearchParams();

  const shopFromUrl = searchParams.get('shop');

  const startInstall = () => {
    const finalShop = shopFromUrl || shop;
    if (!finalShop) {
      alert('Enter your Shopify store domain');
      return;
    }

    const domain = finalShop.includes('.myshopify.com')
      ? finalShop
      : `${finalShop}.myshopify.com`;

    window.location.href = `/auth?shop=${domain}`;
  };

  return { shop, setShop, startInstall, shopFromUrl };
}

/* ---------------- LANDING PAGE ---------------- */

function LandingPage() {
  const { shop, setShop, startInstall, shopFromUrl } = useShopInstall();

  return (
    <div className="overflow-x-hidden min-h-screen">
      {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.07]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-hero-glow opacity-60" />
      </div>

      <div className="relative z-10">
        {/* HERO */}
        <section className="pt-20 pb-12 px-4 text-center max-w-5xl mx-auto">
          <h1 className="text-6xl font-bold mb-6">
            Turn urgency into <br />
            <span className="bg-clip-text text-transparent bg-btn-gradient">
              instant revenue
            </span>
          </h1>

          <p className="text-gray-400 text-xl mb-8">
            Let customers pay for faster order handling directly at checkout.
          </p>

          {/* SHOP INPUT (only if not coming from Shopify) */}
          {!shopFromUrl && (
            <div className="max-w-md mx-auto mb-6">
              <input
                value={shop}
                onChange={(e) => setShop(e.target.value)}
                placeholder="your-store-name"
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white"
              />
              <p className="text-xs text-gray-500 mt-2">
                Example: <code>my-store</code> → my-store.myshopify.com
              </p>
            </div>
          )}

          {/* CTA */}
          <button
            onClick={startInstall}
            className="inline-flex items-center gap-3 px-10 py-4 text-lg font-bold text-white bg-btn-gradient rounded-full hover:scale-105 transition"
          >
            Get Started Now
            <FaArrowRight />
          </button>

          <div className="mt-4 text-sm text-gray-400 flex justify-center items-center gap-2">
            <FaShieldAlt className="text-green-400" />
            No subscription. Pay per priority order.
          </div>
        </section>

        {/* TRUST */}
        <section className="py-16 text-center opacity-50">
          <div className="flex justify-center gap-12 text-2xl">
            <FaShopify />
            <FaAws />
            <FaStripe />
            📦
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-8 text-center text-gray-500 text-sm">
          © 2024 RushFee. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

/* ---------------- APP ROUTER ---------------- */

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/config" element={<ConfigurationPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}
