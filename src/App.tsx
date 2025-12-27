import { useEffect } from "react";

/**
 * 🔐 Start Shopify OAuth
 * MUST be full browser redirect
 */
function startInstall() {
  const params = new URLSearchParams(window.location.search);
  const shop = params.get("shop");

  if (!shop) {
    alert(
      "Missing shop parameter.\n\nPlease open the app from Shopify Admin."
    );
    return;
  }

  // 🚀 TRIGGER SHOPIFY AUTH
  window.location.href = `/auth?shop=${shop}`;
}

export default function App() {
  /**
   * OPTIONAL:
   * If shop exists AND you already authenticated,
   * you can later auto-fetch /api/me here
   */
  useEffect(() => {
    // future logic
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* ================= LANDING PAGE ================= */}

      <header className="px-8 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">RushFee</h1>
      </header>

      <main className="px-8 py-20 text-center">
        <h2 className="text-5xl font-extrabold mb-6">
          Turn Urgency into Revenue
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto mb-10">
          Let customers pay for priority processing. Simple. Profitable.
        </p>

        <div className="flex justify-center gap-6">
          {/* ✅ GET STARTED */}
          <button
            onClick={startInstall}
            className="px-8 py-4 rounded-full font-bold bg-gradient-to-r from-purple-600 to-indigo-600 hover:scale-105 transition"
          >
            Get Started Now
          </button>

          {/* ✅ START FOR FREE */}
          <button
            onClick={startInstall}
            className="px-8 py-4 rounded-full font-bold border border-gray-700 hover:bg-gray-900"
          >
            Start for Free
          </button>
        </div>
      </main>
    </div>
  );
          }
