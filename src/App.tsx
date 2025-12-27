import { useEffect, useState } from "react";

type Page = "landing" | "config" | "dashboard";

export default function App() {
  const [page, setPage] = useState<Page>("landing");
  const [shop, setShop] = useState<string | null>(null);

  // Read ?shop from URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const shopParam = params.get("shop");

    if (shopParam) {
      setShop(shopParam);
      setPage("config");
    }
  }, []);

  // Start Shopify OAuth
  const startInstall = () => {
    if (!shop) {
      alert("Open this app from Shopify Admin.");
      return;
    }
    window.location.href = `/auth?shop=${shop}`;
  };

  // ---------------- LANDING ----------------
  if (page === "landing") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6">
        <h1 className="text-4xl font-bold mb-4">RushFee</h1>
        <p className="text-gray-600 mb-8 text-center max-w-md">
          Turn urgency into revenue with priority processing.
        </p>

        <div className="flex gap-4">
          <button
            onClick={startInstall}
            className="bg-black text-white px-6 py-3 rounded-xl"
          >
            Get Started Now
          </button>

          <button
            onClick={startInstall}
            className="border px-6 py-3 rounded-xl"
          >
            Start for Free
          </button>
        </div>
      </div>
    );
  }

  // ---------------- CONFIG ----------------
  if (page === "config") {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <h2 className="text-2xl font-bold mb-2">Setup</h2>
        <p className="mb-6 text-gray-600">Store: {shop}</p>

        <div className="bg-white p-6 rounded-xl shadow">
          <p className="mb-4">Configuration step.</p>
          <button
            onClick={() => setPage("dashboard")}
            className="bg-black text-white px-4 py-2 rounded-lg"
          >
            Continue
          </button>
        </div>
      </div>
    );
  }

  // ---------------- DASHBOARD ----------------
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold mb-2">Dashboard</h2>
      <p className="text-gray-600 mb-6">Store: {shop}</p>

      <div className="bg-white p-6 rounded-xl shadow">
        <p>Connected. Real data next.</p>
      </div>
    </div>
  );
}                      <FaCheck />
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
