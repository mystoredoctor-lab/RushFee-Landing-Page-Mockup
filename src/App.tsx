import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { ConfigurationPage } from "./pages/ConfigurationPage";
import { DashboardPage } from "./pages/DashboardPage";
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
} from "react-icons/fa";

function LandingPage() {
  // ✅ READ SHOP FROM URL
  const params = new URLSearchParams(window.location.search);
  const shop = params.get("shop");

  // ✅ THIS IS THE ONLY CORRECT INSTALL HANDLER
  const startInstall = () => {
    if (!shop) {
      alert("Missing shop parameter. Please install from Shopify.");
      return;
    }

    // FULL REDIRECT → SHOPIFY OAUTH
    window.location.href = `/auth?shop=${shop}`;
  };

  return (
    <div className="overflow-x-hidden" style={{ minHeight: "100%" }}>
      {/* --- HERO SECTION --- */}
      <section className="pt-20 pb-12 px-4 text-center max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Turn urgency into{" "}
          <span className="bg-clip-text text-transparent bg-btn-gradient">
            instant revenue
          </span>
        </h1>

        <p className="text-gray-400 mb-8">
          Let customers pay for faster order handling and priority packaging.
        </p>

        {/* ✅ FIXED CTA BUTTON */}
        <button
          onClick={startInstall}
          className="group inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-btn-gradient rounded-full hover:scale-105"
        >
          Get Started Now
          <FaArrowRight className="ml-2" />
        </button>
      </section>

      {/* --- PRICING CTA --- */}
      <section className="py-24 text-center">
        <button
          onClick={startInstall}
          className="px-8 py-4 rounded-full bg-btn-gradient text-white font-bold hover:scale-105"
        >
          Start for Free
        </button>
      </section>

      <footer className="py-8 text-center text-gray-500 text-sm">
        © 2024 RushFee. All rights reserved.
      </footer>
    </div>
  );
}

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
        {/* 3. BOOST AOV SECTION */}
        <section className="py-24 px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Visual Representation */}
              <div className="relative order-2 md:order-1">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 blur-2xl rounded-full opacity-50"></div>
                <div className="glass-card p-6 rounded-2xl relative border border-white/10 neon-shadow">
                  <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                    <span className="text-sm text-gray-400">Your Checkout</span>
                    <div className="h-2 w-12 bg-green-500/50 rounded-full"></div>
                  </div>
                  {/* Mock Checkout Item */}
                  <div className="space-y-4">
                    <div className="flex gap-4 items-center opacity-50">
                      <div className="w-16 h-16 bg-gray-700 rounded-lg"></div>
                      <div className="flex-1">
                        <div className="h-3 w-3/4 bg-gray-700 rounded mb-2"></div>
                        <div className="h-3 w-1/2 bg-gray-700 rounded"></div>
                      </div>
                      <div className="h-3 w-12 bg-gray-700 rounded"></div>
                    </div>

                    {/* The RushFee Widget */}
                    <div className="bg-gradient-to-r from-cyan-900/20 to-pink-900/20 border border-pink-500/30 p-4 rounded-xl mt-6 animate-pulse">
                      <div className="flex items-start gap-3">
                        <div className="mt-1">
                          <input type="checkbox" checked readOnly className="w-5 h-5 rounded border-gray-600 text-pink-500 focus:ring-pink-500 bg-gray-800" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-bold text-white text-sm">
                              Priority Processing
                            </h4>
                            <span className="bg-pink-500 text-[10px] font-bold px-1.5 py-0.5 rounded text-white">
                              HOT
                            </span>
                          </div>
                          <p className="text-xs text-gray-400 mt-1">
                            Skip the line! Your order will be packed and shipped
                            first.
                          </p>
                        </div>
                        <div className="text-white font-bold text-sm ml-auto">
                          +$4.99
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-white/10 mt-4">
                      <span className="text-gray-400">Total</span>
                      <span className="text-xl font-bold text-white">
                        $54.98
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Boost AOV <br />
                  <span className="text-gray-500">Effortlessly</span>
                </h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  Stop leaving money on the table. RushFee adds a simple,
                  high-converting upsell to your cart or checkout page.
                  Customers love the option to skip the queue, and you love the
                  extra revenue.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-gray-300">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-xs">
                      <FaCheck />
                    </div>
                    100% Pure Profit Margin
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-xs">
                      <FaCheck />
                    </div>
                    Fully Customizable Widget
                  </li>
                  <li className="flex items-center gap-3 text-gray-300">
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-xs">
                      <FaCheck />
                    </div>
                    Works with all Shopify Themes
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 4. TRUSTED BY MERCHANTS */}
        <section className="py-12 border-y border-white/5 bg-black/40">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-sm text-gray-500 uppercase tracking-widest mb-8">
              Trusted by over 23,000+ merchants
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="text-2xl font-bold flex items-center gap-2">
                <FaShopify className="text-3xl" /> Shopify
              </div>
              <div className="text-2xl font-bold flex items-center gap-2">
                <FaAws className="text-3xl" /> Amazon
              </div>
              <div className="text-2xl font-bold flex items-center gap-2">
                <FaStripe className="text-3xl" /> Stripe
              </div>
              <div className="text-2xl font-bold flex items-center gap-2">
                <span className="text-3xl">📦</span> DHL
              </div>
              <div className="text-2xl font-bold flex items-center gap-2">
                <span className="text-3xl">📮</span> FedEx
              </div>
            </div>
          </div>
        </section>

        {/* 5. PRICING SECTION */}
        <section className="py-24 px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Simple, Transparent <span className="text-white">Pricing</span>
            </h2>
            <p className="text-gray-400 mb-16">
              No monthly fees. We only make money when you do.
            </p>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/20 to-pink-500/20 blur-3xl rounded-3xl -z-10"></div>

              <div className="glass-card rounded-3xl p-8 md:p-12 border border-white/10 max-w-lg mx-auto relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-btn-gradient"></div>

                <div className="mb-8">
                  <span className="bg-white/10 text-white px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider">
                    Pay As You Go
                  </span>
                </div>

                <div className="flex items-end justify-center gap-2 mb-6">
                  <span className="text-6xl font-bold text-white">$0.20</span>
                  <span className="text-gray-400 text-xl mb-2">
                    / priority order
                  </span>
                </div>

                <p className="text-gray-400 mb-8 max-w-xs mx-auto">
                  Flat fee per priority order generated. No hidden costs or
                  monthly subscriptions.
                </p>

                <div className="space-y-4 text-left max-w-xs mx-auto mb-10">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs">
                      <FaCheck />
                    </div>
                    <span className="text-gray-300">Unlimited Revenue</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs">
                      <FaCheck />
                    </div>
                    <span className="text-gray-300">Instant Setup</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs">
                      <FaCheck />
                    </div>
                    <span className="text-gray-300">24/7 Support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-xs">
                      <FaCheck />
                    </div>
                    <span className="text-gray-300">
                      Customizable Widget Design
                    </span>
                  </div>
                </div>

                <Link to="/config">
                  <button className="group relative w-full py-4 rounded-full text-white font-bold transition-all duration-200 bg-btn-gradient hover:scale-105 hover:shadow-[0_0_30px_rgba(255,0,80,0.4)] overflow-hidden">
                    <div className="animate-shimmer absolute inset-0 z-10"></div>
                    <span className="relative z-20">Start for Free</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 6. TESTIMONIALS SECTION - Animated Horizontal Scroll */}
        <section className="py-24 px-4 bg-black/20 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
              What Merchants Say
            </h2>

            <div className="testimonial-wrapper">
              <div className="testimonial-track">
                {/* First Set of Testimonials */}
                <div className="flex gap-10 pr-10">
                  {/* Testimonial 1 */}
                  <div className="glass-card p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors min-w-[350px] flex-shrink-0">
                    <div className="flex text-yellow-400 mb-4 text-sm gap-1">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      "We added RushFee and saw an immediate 18% bump in our
                      AOV. Customers actually appreciate the option to get their
                      stuff faster."
                    </p>
                    <div className="flex items-center gap-3">
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="User" className="w-10 h-10 rounded-full object-cover border border-white/10" />
                      <div>
                        <div className="text-white font-medium text-sm">
                          David Chen
                        </div>
                        <div className="text-gray-500 text-xs">
                          Founder, TechGear
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial 2 */}
                  <div className="glass-card p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors min-w-[350px] flex-shrink-0 relative">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-pink-500/10 blur-xl rounded-full"></div>
                    <div className="flex text-yellow-400 mb-4 text-sm gap-1">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      "The simplest way to add extra profit to your bottom line.
                      Setup took literally 2 minutes and it just works in the
                      background."
                    </p>
                    <div className="flex items-center gap-3">
                      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="User" className="w-10 h-10 rounded-full object-cover border border-white/10" />
                      <div>
                        <div className="text-white font-medium text-sm">
                          Sarah Miller
                        </div>
                        <div className="text-gray-500 text-xs">
                          CEO, StyleHub
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial 3 */}
                  <div className="glass-card p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors min-w-[350px] flex-shrink-0">
                    <div className="flex text-yellow-400 mb-4 text-sm gap-1">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      "I was skeptical at first, but the numbers don't lie.
                      We've generated an extra $4k this month just from priority
                      processing fees."
                    </p>
                    <div className="flex items-center gap-3">
                      <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="User" className="w-10 h-10 rounded-full object-cover border border-white/10" />
                      <div>
                        <div className="text-white font-medium text-sm">
                          Marcus Johnson
                        </div>
                        <div className="text-gray-500 text-xs">
                          Owner, FitGear
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial 4 - New */}
                  <div className="glass-card p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors min-w-[350px] flex-shrink-0">
                    <div className="flex text-yellow-400 mb-4 text-sm gap-1">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar className="text-gray-600" />
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      "Great app, does exactly what it says. Only giving 4 stars
                      because I wish there were more customization options for
                      the widget design."
                    </p>
                    <div className="flex items-center gap-3">
                      <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="User" className="w-10 h-10 rounded-full object-cover border border-white/10" />
                      <div>
                        <div className="text-white font-medium text-sm">
                          Alex Rivera
                        </div>
                        <div className="text-gray-500 text-xs">
                          Manager, UrbanThreads
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial 5 - New */}
                  <div className="glass-card p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors min-w-[350px] flex-shrink-0">
                    <div className="flex text-yellow-400 mb-4 text-sm gap-1">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      "The ROI on this is insane. We paid for the app in the
                      first hour of installing it. Highly recommended for any
                      high-volume store."
                    </p>
                    <div className="flex items-center gap-3">
                      <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="User" className="w-10 h-10 rounded-full object-cover border border-white/10" />
                      <div>
                        <div className="text-white font-medium text-sm">
                          Jessica Wu
                        </div>
                        <div className="text-gray-500 text-xs">
                          Director, BeautyBox
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial 6 */}
                  <div className="glass-card p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors min-w-[350px] flex-shrink-0">
                    <div className="flex text-yellow-400 mb-4 text-sm gap-1">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar className="text-gray-600" />
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      "Solid performance. We use it for our flash sales to
                      manage expectations. Customers love skipping the queue."
                    </p>
                    <div className="flex items-center gap-3">
                      <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="User" className="w-10 h-10 rounded-full object-cover border border-white/10" />
                      <div>
                        <div className="text-white font-medium text-sm">
                          Ryan Cooper
                        </div>
                        <div className="text-gray-500 text-xs">
                          Ops Lead, GearUp
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Duplicate Set for Seamless Loop - Updated to include new ones */}
                <div className="flex gap-10 pr-10">
                  {/* Testimonial 1 Duplicate */}
                  <div className="glass-card p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors min-w-[350px] flex-shrink-0">
                    <div className="flex text-yellow-400 mb-4 text-sm gap-1">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      "We added RushFee and saw an immediate 18% bump in our
                      AOV. Customers actually appreciate the option to get their
                      stuff faster."
                    </p>
                    <div className="flex items-center gap-3">
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="User" className="w-10 h-10 rounded-full object-cover border border-white/10" />
                      <div>
                        <div className="text-white font-medium text-sm">
                          David Chen
                        </div>
                        <div className="text-gray-500 text-xs">
                          Founder, TechGear
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial 2 Duplicate */}
                  <div className="glass-card p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors min-w-[350px] flex-shrink-0 relative">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-pink-500/10 blur-xl rounded-full"></div>
                    <div className="flex text-yellow-400 mb-4 text-sm gap-1">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      "The simplest way to add extra profit to your bottom line.
                      Setup took literally 2 minutes and it just works in the
                      background."
                    </p>
                    <div className="flex items-center gap-3">
                      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="User" className="w-10 h-10 rounded-full object-cover border border-white/10" />
                      <div>
                        <div className="text-white font-medium text-sm">
                          Sarah Miller
                        </div>
                        <div className="text-gray-500 text-xs">
                          CEO, StyleHub
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial 3 Duplicate */}
                  <div className="glass-card p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors min-w-[350px] flex-shrink-0">
                    <div className="flex text-yellow-400 mb-4 text-sm gap-1">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      "I was skeptical at first, but the numbers don't lie.
                      We've generated an extra $4k this month just from priority
                      processing fees."
                    </p>
                    <div className="flex items-center gap-3">
                      <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="User" className="w-10 h-10 rounded-full object-cover border border-white/10" />
                      <div>
                        <div className="text-white font-medium text-sm">
                          Marcus Johnson
                        </div>
                        <div className="text-gray-500 text-xs">
                          Owner, FitGear
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial 4 Duplicate */}
                  <div className="glass-card p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors min-w-[350px] flex-shrink-0">
                    <div className="flex text-yellow-400 mb-4 text-sm gap-1">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar className="text-gray-600" />
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      "Great app, does exactly what it says. Only giving 4 stars
                      because I wish there were more customization options for
                      the widget design."
                    </p>
                    <div className="flex items-center gap-3">
                      <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="User" className="w-10 h-10 rounded-full object-cover border border-white/10" />
                      <div>
                        <div className="text-white font-medium text-sm">
                          Alex Rivera
                        </div>
                        <div className="text-gray-500 text-xs">
                          Manager, UrbanThreads
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial 5 Duplicate */}
                  <div className="glass-card p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors min-w-[350px] flex-shrink-0">
                    <div className="flex text-yellow-400 mb-4 text-sm gap-1">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      "The ROI on this is insane. We paid for the app in the
                      first hour of installing it. Highly recommended for any
                      high-volume store."
                    </p>
                    <div className="flex items-center gap-3">
                      <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="User" className="w-10 h-10 rounded-full object-cover border border-white/10" />
                      <div>
                        <div className="text-white font-medium text-sm">
                          Jessica Wu
                        </div>
                        <div className="text-gray-500 text-xs">
                          Director, BeautyBox
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial 6 Duplicate */}
                  <div className="glass-card p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors min-w-[350px] flex-shrink-0">
                    <div className="flex text-yellow-400 mb-4 text-sm gap-1">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar className="text-gray-600" />
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      "Solid performance. We use it for our flash sales to
                      manage expectations. Customers love skipping the queue."
                    </p>
                    <div className="flex items-center gap-3">
                      <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="User" className="w-10 h-10 rounded-full object-cover border border-white/10" />
                      <div>
                        <div className="text-white font-medium text-sm">
                          Ryan Cooper
                        </div>
                        <div className="text-gray-500 text-xs">
                          Ops Lead, GearUp
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-white/5 text-center text-gray-500 text-sm">
          © 2024 RushFee. All rights reserved.
        </footer>
      </div>
    </div>;
}
export function App() {
  return <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/config" element={<ConfigurationPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>;
}
