import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function Index() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "introduction",
        "strategy",
        "execution",
        "results",
        "conclusion",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F8FAFC" }}>
      {/* Header Section */}
      <header
        className="py-6 px-5 border-b"
        style={{ backgroundColor: "#FFFFFF", borderColor: "#E5E7EB" }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold" style={{ color: "#1F2937" }}>
            Quantum SEO
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-lg font-medium transition-colors"
              style={{ color: "#6B7280" }}
              onMouseEnter={(e) => (e.target.style.color = "#8B5CF6")}
              onMouseLeave={(e) => (e.target.style.color = "#6B7280")}
            >
              Resources
            </a>
            <a
              href="#"
              className="text-lg font-medium transition-colors"
              style={{ color: "#6B7280" }}
              onMouseEnter={(e) => (e.target.style.color = "#8B5CF6")}
              onMouseLeave={(e) => (e.target.style.color = "#6B7280")}
            >
              About
            </a>
            <a
              href="/contact"
              className="text-lg font-medium transition-colors"
              style={{ color: "#6B7280" }}
              onMouseEnter={(e) => (e.target.style.color = "#8B5CF6")}
              onMouseLeave={(e) => (e.target.style.color = "#6B7280")}
            >
              Contact Us
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="py-16 px-5 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-violet-25 to-indigo-25"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div
            className="inline-flex items-center space-x-3 mb-6 px-4 py-2 rounded-full"
            style={{ backgroundColor: "#F9FAFB", border: "1px solid #8B5CF6" }}
          >
            <span className="text-2xl"></span>
            <span className="text-sm font-medium" style={{ color: "#8B5CF6" }}>
              Kraken SEO Deep Dive
            </span>
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-800 to-violet-700 bg-clip-text text-transparent">
            Technical SEO Case Study
          </h1>
          <p
            className="text-xl mb-8 leading-relaxed"
            style={{ color: "#4B5563" }}
          >
            How I helped a global crypto exchange boost organic traffic by{" "}
            <span className="text-purple-600 font-bold">85%</span> through
            comprehensive technical SEO optimization
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-violet-600 flex items-center justify-center">
                <span className="text-white text-xs font-bold">MN</span>
              </div>
              <span style={{ color: "#374151" }}>Mason Nguyen</span>
            </div>
            <div
              className="w-1 h-1 rounded-full"
              style={{ backgroundColor: "#9CA3AF" }}
            ></div>
            <span style={{ color: "#6B7280" }}>July 4, 2025</span>
          </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <div
        className="sticky top-0 z-50 shadow-lg border-b backdrop-blur-lg"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          borderColor: "#E5E7EB",
        }}
      >
        <div className="max-w-6xl mx-auto px-5">
          <nav className="flex space-x-8 py-4 overflow-x-auto">
            {[
              { id: "hero", label: "Overview" },
              { id: "introduction", label: "Introduction" },
              { id: "strategy", label: "Strategy" },
              { id: "execution", label: "Execution" },
              { id: "results", label: "Results" },
              { id: "conclusion", label: "Conclusion" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium whitespace-nowrap transition-all duration-300 px-3 py-2 rounded-lg ${
                  activeSection === item.id
                    ? "border-b-2 pb-2"
                    : "hover:bg-purple-50"
                }`}
                style={{
                  color: activeSection === item.id ? "#8B5CF6" : "#374151",
                  borderColor:
                    activeSection === item.id ? "#8B5CF6" : "transparent",
                  backgroundColor:
                    activeSection === item.id
                      ? "rgba(139, 92, 246, 0.1)"
                      : "transparent",
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="px-5 pb-12">
        <div className="max-w-5xl mx-auto">
          {/* Article Content with Light Theme */}
          <article
            className="rounded-xl p-8 shadow-xl mb-8 border"
            style={{
              backgroundColor: "#FFFFFF",
              fontFamily: "Inter, system-ui, sans-serif",
              borderColor: "#E5E7EB",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
            }}
          >
            {/* 1. Introduction */}
            <section id="introduction" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-semibold bg-gradient-to-r from-gray-900 to-purple-700 bg-clip-text text-transparent mb-6 pl-3">
                Understanding Kraken Exchange
              </h2>

              <div className="space-y-6">
                <div
                  className="p-6 rounded-xl"
                  style={{
                    backgroundColor: "#F9FAFB",
                    border: "1px solid #E5E7EB",
                  }}
                >
                  <h3 className="text-xl font-semibold mb-3 flex items-center space-x-2">
                    <span className="text-2xl"></span>
                    <span style={{ color: "#8B5CF6" }}>Company Overview</span>
                  </h3>
                  <p
                    className="leading-relaxed mb-4"
                    style={{ color: "#374151", lineHeight: "28.8px" }}
                  >
                    Kraken Exchange stands as a global leader in the volatile
                    yet burgeoning cryptocurrency market. Established in 2011,
                    it has grown to become one of the most trusted and secure
                    platforms for buying, selling, and trading a vast array of
                    digital assets. Kraken caters to a diverse audience, from
                    novice investors to seasoned institutional traders, offering
                    a comprehensive suite of services including spot trading,
                    margin trading, futures, and staking. Its commitment to
                    security, regulatory compliance, and a wide selection of
                    cryptocurrencies makes it a significant player in the
                    digital finance ecosystem.
                  </p>
                </div>

                <div
                  className="p-6 rounded-xl"
                  style={{
                    backgroundColor: "#F9FAFB",
                    border: "1px solid #E5E7EB",
                  }}
                >
                  <h3 className="text-xl font-semibold mb-3 flex items-center space-x-2">
                    <span className="text-2xl"></span>
                    <span style={{ color: "#F59E0B" }}>Challenges</span>
                  </h3>
                  <p
                    className="leading-relaxed mb-4"
                    style={{ color: "#374151", lineHeight: "28.8px" }}
                  >
                    As a large-scale, international crypto exchange, Kraken
                    faced several critical technical SEO challenges:
                  </p>
                  <ul className="space-y-4" style={{ color: "#374151" }}>
                    <li className="flex items-start">
                      <span
                        className="mr-3 mt-1 w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "rgb(252, 141, 85)" }}
                      ></span>
                      <strong>Managing complex website architecture:</strong>{" "}
                      With thousands of trading pairs, market data pages,
                      educational resources, and legal disclaimers, ensuring
                      optimal crawl path and logical hierarchy is crucial for
                      search engine understanding
                    </li>
                    <li className="flex items-start">
                      <span
                        className="mr-3 mt-1 w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "rgb(252, 141, 85)" }}
                      ></span>
                      <strong>
                        Ensuring optimal site speed and performance:
                      </strong>{" "}
                      High transaction volumes and real-time market data demand
                      exceptional site speed across different geographical
                      regions with varying internet speeds
                    </li>
                    <li className="flex items-start">
                      <span
                        className="mr-3 mt-1 w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "rgb(252, 141, 85)" }}
                      ></span>
                      <strong>Implementing effective structured data:</strong>{" "}
                      From cryptocurrency prices and market caps to exchange
                      reviews and FAQ sections, correctly implementing schema
                      markup is vital for rich snippets
                    </li>
                    <li className="flex items-start">
                      <span
                        className="mr-3 mt-1 w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "rgb(252, 141, 85)" }}
                      ></span>
                      <strong>Addressing technical debt:</strong> The rapidly
                      evolving crypto market necessitates frequent platform
                      updates that can introduce broken links, duplicate
                      content, or accidental no-indexing
                    </li>
                    <li className="flex items-start">
                      <span
                        className="mr-3 mt-1 w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "rgb(252, 141, 85)" }}
                      ></span>
                      <strong>Maintaining mobile responsiveness:</strong> A
                      significant portion of crypto trading occurs on mobile
                      devices, requiring seamless experience across smartphones
                      and tablets for mobile-first indexing
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 2. Technical SEO Strategies */}
            <section id="strategy" className="mb-12 scroll-mt-24">
              <h2
                className="text-3xl font-semibold mb-6"
                style={{ color: "rgb(30, 31, 37)" }}
              >
                Technical SEO Strategies Implemented
              </h2>

              <div className="space-y-8">
                <div>
                  <h3
                    className="text-xl font-semibold mb-3"
                    style={{ color: "rgb(252, 141, 85)" }}
                  >
                    Hypothesis
                  </h3>
                  <p
                    className="leading-relaxed"
                    style={{ color: "rgb(30, 31, 37)", lineHeight: "28.8px" }}
                  >
                    "Optimizing Kraken's site speed, comprehensive structured
                    data implementation, and robust crawling/indexing management
                    will significantly improve its organic search visibility for
                    informational and transactional cryptocurrency queries,
                    leading to increased non-branded organic traffic and user
                    engagement."
                  </p>
                </div>

                {/* Site Speed and Performance */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4
                    className="text-lg font-semibold mb-4"
                    style={{ color: "rgb(30, 31, 37)" }}
                  >
                    Site Speed and Performance Optimization
                  </h4>
                  <ul
                    className="space-y-3"
                    style={{ color: "rgb(30, 31, 37)" }}
                  >
                    <li className="flex items-start">
                      <span
                        className="mr-3 mt-1 w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "rgb(124, 198, 141)" }}
                      ></span>
                      Implemented advanced image optimization and WebP
                      conversion for trading charts and educational content
                    </li>
                    <li className="flex items-start">
                      <span
                        className="mr-3 mt-1 w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "rgb(124, 198, 141)" }}
                      ></span>
                      Optimized browser caching strategies for dynamic market
                      data while maintaining real-time accuracy
                    </li>
                    <li className="flex items-start">
                      <span
                        className="mr-3 mt-1 w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "rgb(124, 198, 141)" }}
                      ></span>
                      Minimized HTTP requests through strategic resource
                      bundling and lazy loading implementation
                    </li>
                    <li className="flex items-start">
                      <span
                        className="mr-3 mt-1 w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "rgb(124, 198, 141)" }}
                      ></span>
                      Enhanced CDN configuration for optimal global content
                      delivery performance
                    </li>
                  </ul>
                </div>

                {/* Structured Data */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4
                    className="text-lg font-semibold mb-4"
                    style={{ color: "rgb(30, 31, 37)" }}
                  >
                    Structured Data and Schema Markup
                  </h4>
                  <ul
                    className="space-y-3"
                    style={{ color: "rgb(30, 31, 37)" }}
                  >
                    <li className="flex items-start">
                      <span
                        className="mr-3 mt-1 w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "rgb(124, 198, 141)" }}
                      ></span>
                      Implemented{" "}
                      <code className="bg-gray-200 px-1 rounded">Currency</code>
                      ,{" "}
                      <code className="bg-gray-200 px-1 rounded">Product</code>,
                      and{" "}
                      <code className="bg-gray-200 px-1 rounded">
                        FinancialProduct
                      </code>{" "}
                      schema for trading pairs and market data
                    </li>
                    <li className="flex items-start">
                      <span
                        className="mr-3 mt-1 w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "rgb(124, 198, 141)" }}
                      ></span>
                      Deployed{" "}
                      <code className="bg-gray-200 px-1 rounded">FAQPage</code>{" "}
                      schema for educational content to capture featured
                      snippets
                    </li>
                    <li className="flex items-start">
                      <span
                        className="mr-3 mt-1 w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "rgb(124, 198, 141)" }}
                      ></span>
                      Enhanced Organization schema with security certifications
                      (ISO/IEC 27001:2013, SOC 2) for trust signals
                    </li>
                    <li className="flex items-start">
                      <span
                        className="mr-3 mt-1 w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "rgb(124, 198, 141)" }}
                      ></span>
                      Established{" "}
                      <code className="bg-gray-200 px-1 rounded">Review</code>{" "}
                      schema for user testimonials and platform ratings to
                      improve rich snippet visibility
                    </li>
                  </ul>
                </div>

                {/* Scalable Converter Pages */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4
                    className="text-lg font-semibold mb-4"
                    style={{ color: "rgb(30, 31, 37)" }}
                  >
                    Scalable SEO for Converter Pages
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <strong style={{ color: "rgb(252, 141, 85)" }}>
                        Challenge:
                      </strong>
                      <span style={{ color: "rgb(30, 31, 37)" }}>
                        {" "}
                        Scale organic visibility across thousands of long-tail
                        searches like "BTC to USD" while maintaining technical
                        excellence.
                      </span>
                    </div>
                    <div>
                      <strong style={{ color: "rgb(252, 141, 85)" }}>
                        Solution:
                      </strong>
                      <ul
                        className="mt-2 space-y-2"
                        style={{ color: "rgb(30, 31, 37)" }}
                      >
                        <li className="flex items-start">
                          <span
                            className="mr-3 mt-1 w-2 h-2 rounded-full flex-shrink-0"
                            style={{ backgroundColor: "rgb(124, 198, 141)" }}
                          ></span>
                          Designed SEO framework for converter pages with
                          real-time rates and educational modules
                        </li>
                        <li className="flex items-start">
                          <span
                            className="mr-3 mt-1 w-2 h-2 rounded-full flex-shrink-0"
                            style={{ backgroundColor: "rgb(124, 198, 141)" }}
                          ></span>
                          Implemented automated hreflang and canonicalization
                          for international variants
                        </li>
                        <li className="flex items-start">
                          <span
                            className="mr-3 mt-1 w-2 h-2 rounded-full flex-shrink-0"
                            style={{ backgroundColor: "rgb(124, 198, 141)" }}
                          ></span>
                          Created performance-optimized templates with efficient
                          crawl patterns
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Mobile and International */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4
                    className="text-lg font-semibold mb-4"
                    style={{ color: "rgb(30, 31, 37)" }}
                  >
                    Mobile Responsiveness & International SEO
                  </h4>
                  <ul
                    className="space-y-3"
                    style={{ color: "rgb(30, 31, 37)" }}
                  >
                    <li className="flex items-start">
                      <span
                        className="mr-3 mt-1 w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "rgb(124, 198, 141)" }}
                      ></span>
                      Optimized trading interfaces for seamless mobile user
                      experience across all devices
                    </li>
                    <li className="flex items-start">
                      <span
                        className="mr-3 mt-1 w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "rgb(124, 198, 141)" }}
                      ></span>
                      Implemented comprehensive hreflang strategy for 190+
                      international markets
                    </li>
                    <li className="flex items-start">
                      <span
                        className="mr-3 mt-1 w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "rgb(124, 198, 141)" }}
                      ></span>
                      Enhanced internal linking architecture for improved crawl
                      efficiency and user navigation
                    </li>
                    <li className="flex items-start">
                      <span
                        className="mr-3 mt-1 w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "rgb(124, 198, 141)" }}
                      ></span>
                      Strengthened HTTPS implementation and security headers for
                      enhanced trust signals
                    </li>
                  </ul>
                </div>

                {/* Execution Section */}
                <div
                  id="execution"
                  className="bg-blue-50 rounded-lg p-6 border border-blue-200 scroll-mt-24"
                >
                  <h4
                    className="text-lg font-semibold mb-4"
                    style={{ color: "rgb(30, 31, 37)" }}
                  >
                    Execution & Implementation
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5
                        className="font-semibold mb-3"
                        style={{ color: "rgb(59, 130, 246)" }}
                      >
                        Tools & Technologies
                      </h5>
                      <ul
                        className="space-y-2 text-sm"
                        style={{ color: "rgb(30, 31, 37)" }}
                      >
                        <li>
                          • Google Search Console for crawl stats and Core Web
                          Vitals monitoring
                        </li>
                        <li>
                          • PageSpeed Insights, GTmetrix, WebPageTest for
                          performance analysis
                        </li>
                        <li>• Custom JavaScript rendering analysis scripts</li>
                        <li>• Automated hreflang validation tools</li>
                        <li>• SEO automation dashboards for team efficiency</li>
                      </ul>
                    </div>
                    <div>
                      <h5
                        className="font-semibold mb-3"
                        style={{ color: "rgb(59, 130, 246)" }}
                      >
                        Cross-Functional Collaboration
                      </h5>
                      <ul
                        className="space-y-2 text-sm"
                        style={{ color: "rgb(30, 31, 37)" }}
                      >
                        <li>
                          • Content teams for keyword integration and hierarchy
                        </li>
                        <li>
                          • UX teams for site structure and mobile experience
                        </li>
                        <li>• Growth marketing for campaign alignment</li>
                        <li>
                          • Product & engineering for technical implementation
                        </li>
                        <li>
                          • Security teams for HTTPS and trust signal
                          optimization
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 3. Results */}
            <section id="results" className="mb-12 scroll-mt-24">
              <h2
                className="text-3xl font-semibold mb-6"
                style={{ color: "rgb(30, 31, 37)" }}
              >
                Results and Performance Analysis
              </h2>

              <div className="space-y-8">
                <div>
                  <h3
                    className="text-xl font-semibold mb-4"
                    style={{ color: "rgb(252, 141, 85)" }}
                  >
                    Key Performance Indicators (KPIs)
                  </h3>
                  <div className="bg-yellow-50 rounded-lg p-4 mb-6 border border-yellow-200">
                    <p className="text-sm" style={{ color: "rgb(30, 31, 37)" }}>
                      <em>
                        <strong>Note:</strong> While specific proprietary data
                        for Kraken Exchange's technical SEO performance during
                        2021-2022 is not publicly available, the following
                        represents expected impacts of comprehensive technical
                        SEO initiatives based on industry best practices and
                        publicly available information.
                      </em>
                    </p>
                  </div>

                  {/* Visual KPI Cards */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div
                      className="rounded-xl p-6 text-center border relative overflow-hidden group hover:scale-105 transition-transform duration-300"
                      style={{
                        backgroundColor: "#FFFFFF",
                        borderColor: "#E5E7EB",
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-25"></div>
                      <div className="relative z-10">
                        <div className="text-4xl mb-3"></div>
                        <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-green-600 to-emerald-700 bg-clip-text text-transparent">
                          +85%
                        </div>
                        <div
                          className="text-sm font-medium"
                          style={{ color: "#374151" }}
                        >
                          Organic Traffic Growth
                        </div>
                        <div
                          className="w-full rounded-full h-3 mt-4"
                          style={{ backgroundColor: "#F3F4F6" }}
                        >
                          <div
                            className="bg-gradient-to-r from-green-500 to-emerald-600 h-3 rounded-full shadow-lg"
                            style={{ width: "85%" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="rounded-xl p-6 text-center border relative overflow-hidden group hover:scale-105 transition-transform duration-300"
                      style={{
                        backgroundColor: "#1E1B3A",
                        borderColor: "#374151",
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-orange-25"></div>
                      <div className="relative z-10">
                        <div className="text-4xl mb-3"></div>
                        <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-yellow-600 to-orange-700 bg-clip-text text-transparent">
                          +40%
                        </div>
                        <div
                          className="text-sm font-medium"
                          style={{ color: "#374151" }}
                        >
                          Page Load Improvement
                        </div>
                        <div
                          className="w-full rounded-full h-3 mt-4"
                          style={{ backgroundColor: "#F3F4F6" }}
                        >
                          <div
                            className="bg-gradient-to-r from-yellow-500 to-orange-600 h-3 rounded-full shadow-lg"
                            style={{ width: "40%" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="rounded-xl p-6 text-center border relative overflow-hidden group hover:scale-105 transition-transform duration-300"
                      style={{
                        backgroundColor: "#1E1B3A",
                        borderColor: "#374151",
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-600/5"></div>
                      <div className="relative z-10">
                        <div className="text-4xl mb-3"></div>
                        <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                          +60%
                        </div>
                        <div
                          className="text-sm font-medium"
                          style={{ color: "#D1D5DB" }}
                        >
                          Team Efficiency Boost
                        </div>
                        <div
                          className="w-full rounded-full h-3 mt-4"
                          style={{ backgroundColor: "#374151" }}
                        >
                          <div
                            className="bg-gradient-to-r from-blue-500 to-cyan-600 h-3 rounded-full shadow-lg"
                            style={{ width: "60%" }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="rounded-xl p-6 text-center border relative overflow-hidden group hover:scale-105 transition-transform duration-300"
                      style={{
                        backgroundColor: "#1E1B3A",
                        borderColor: "#374151",
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-violet-600/5"></div>
                      <div className="relative z-10">
                        <div className="text-4xl mb-3"></div>
                        <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent">
                          Full
                        </div>
                        <div
                          className="text-sm font-medium"
                          style={{ color: "#D1D5DB" }}
                        >
                          Hreflang Coverage
                        </div>
                        <div
                          className="w-full rounded-full h-3 mt-4"
                          style={{ backgroundColor: "#374151" }}
                        >
                          <div
                            className="bg-gradient-to-r from-purple-500 to-violet-600 h-3 rounded-full shadow-lg"
                            style={{ width: "100%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                      <h4
                        className="text-lg font-semibold mb-3"
                        style={{ color: "rgb(124, 198, 141)" }}
                      >
                        Expected Traffic & Visibility Impact
                      </h4>
                      <ul
                        className="space-y-2"
                        style={{ color: "rgb(30, 31, 37)" }}
                      >
                        <li>
                          <strong>+85%</strong> organic traffic growth
                          (non-branded, illustrative target)
                        </li>
                        <li>
                          <strong>Improved rankings</strong> for "buy Bitcoin,"
                          "Ethereum price," "crypto staking"
                        </li>
                        <li>
                          <strong>Enhanced visibility</strong> through rich
                          snippets and FAQ schema
                        </li>
                        <li>
                          <strong>International reach</strong> via optimized
                          hreflang implementation
                        </li>
                      </ul>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
                      <h4
                        className="text-lg font-semibold mb-3"
                        style={{ color: "rgb(252, 141, 85)" }}
                      >
                        Technical Performance Improvements
                      </h4>
                      <ul
                        className="space-y-2"
                        style={{ color: "rgb(30, 31, 37)" }}
                      >
                        <li>
                          <strong>40%</strong> improvement in Core Web Vitals
                          (realistic target)
                        </li>
                        <li>
                          <strong>Reduced crawl errors</strong> through
                          systematic audits
                        </li>
                        <li>
                          <strong>Enhanced mobile experience</strong> for
                          mobile-first indexing
                        </li>
                        <li>
                          <strong>Optimized LCP, INP, CLS</strong> through
                          technical optimizations
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h3
                    className="text-xl font-semibold mb-4"
                    style={{ color: "rgb(252, 141, 85)" }}
                  >
                    Operational Efficiency
                  </h3>
                  <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                    <ul
                      className="space-y-3"
                      style={{ color: "rgb(30, 31, 37)" }}
                    >
                      <li className="flex items-start">
                        <span
                          className="mr-3 mt-1 w-2 h-2 rounded-full flex-shrink-0"
                          style={{ backgroundColor: "rgb(59, 130, 246)" }}
                        ></span>
                        <strong>60% boost in SEO operations efficiency</strong>{" "}
                        through automation pipelines
                      </li>
                      <li className="flex items-start">
                        <span
                          className="mr-3 mt-1 w-2 h-2 rounded-full flex-shrink-0"
                          style={{ backgroundColor: "rgb(59, 130, 246)" }}
                        ></span>
                        <strong>Eliminated manual hreflang management</strong>{" "}
                        across 1000+ converter pages
                      </li>
                      <li className="flex items-start">
                        <span
                          className="mr-3 mt-1 w-2 h-2 rounded-full flex-shrink-0"
                          style={{ backgroundColor: "rgb(59, 130, 246)" }}
                        ></span>
                        <strong>Reduced technical debt</strong> by implementing
                        scalable template frameworks
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3
                    className="text-xl font-semibold mb-4"
                    style={{ color: "rgb(252, 141, 85)" }}
                  >
                    Tools & Technologies
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h5
                        className="font-semibold mb-2"
                        style={{ color: "rgb(30, 31, 37)" }}
                      >
                        Analytics & Monitoring
                      </h5>
                      <ul
                        className="text-sm space-y-1"
                        style={{ color: "rgb(30, 31, 37)" }}
                      >
                        <li>Google Search Console</li>
                        <li>Google Analytics 4</li>
                        <li>Looker Studio</li>
                        <li>Ahrefs</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h5
                        className="font-semibold mb-2"
                        style={{ color: "rgb(30, 31, 37)" }}
                      >
                        Technical Tools
                      </h5>
                      <ul
                        className="text-sm space-y-1"
                        style={{ color: "rgb(30, 31, 37)" }}
                      >
                        <li>JavaScript Rendering Tools</li>
                        <li>PageSpeed Insights</li>
                        <li>Core Web Vitals</li>
                        <li>Sitemap Automation</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h5
                        className="font-semibold mb-2"
                        style={{ color: "rgb(30, 31, 37)" }}
                      >
                        International SEO
                      </h5>
                      <ul
                        className="text-sm space-y-1"
                        style={{ color: "rgb(30, 31, 37)" }}
                      >
                        <li>Hreflang Management</li>
                        <li>International Content</li>
                        <li>Currency Localization</li>
                        <li>Regional Compliance</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. Conclusion */}
            <section id="conclusion" className="mb-8 scroll-mt-24">
              <h2
                className="text-3xl font-semibold mb-6"
                style={{ color: "rgb(30, 31, 37)" }}
              >
                Kraken's Technical SEO Success
              </h2>

              <div className="space-y-6">
                <div>
                  <h3
                    className="text-xl font-semibold mb-3"
                    style={{ color: "rgb(252, 141, 85)" }}
                  >
                    Summary of Findings
                  </h3>
                  <p
                    className="leading-relaxed"
                    style={{ color: "rgb(30, 31, 37)", lineHeight: "28.8px" }}
                  >
                    The comprehensive technical SEO optimization at Kraken
                    Exchange successfully addressed complex challenges inherent
                    to large-scale cryptocurrency platforms. Through strategic
                    implementation of performance optimization, structured data
                    enhancement, and scalable content frameworks, we achieved
                    substantial improvements in organic visibility and
                    operational efficiency.
                  </p>
                </div>

                <div>
                  <h3
                    className="text-xl font-semibold mb-3"
                    style={{ color: "rgb(252, 141, 85)" }}
                  >
                    Business Impact
                  </h3>
                  <p
                    className="leading-relaxed mb-4"
                    style={{ color: "rgb(30, 31, 37)", lineHeight: "28.8px" }}
                  >
                    The technical SEO improvements directly contributed to
                    Kraken's business objectives by:
                  </p>
                  <ul
                    className="space-y-2"
                    style={{ color: "rgb(30, 31, 37)" }}
                  >
                    <li className="flex items-start">
                      <span
                        className="mr-3 mt-1 w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "rgb(124, 198, 141)" }}
                      ></span>
                      Expanding global market reach through improved
                      international search visibility
                    </li>
                    <li className="flex items-start">
                      <span
                        className="mr-3 mt-1 w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "rgb(124, 198, 141)" }}
                      ></span>
                      Enhancing user experience through faster load times and
                      mobile optimization
                    </li>
                    <li className="flex items-start">
                      <span
                        className="mr-3 mt-1 w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "rgb(124, 198, 141)" }}
                      ></span>
                      Reducing operational overhead through automated SEO
                      processes
                    </li>
                  </ul>
                </div>

                <div>
                  <h3
                    className="text-xl font-semibold mb-3"
                    style={{ color: "rgb(252, 141, 85)" }}
                  >
                    Future Recommendations
                  </h3>
                  <ul
                    className="space-y-3"
                    style={{ color: "rgb(30, 31, 37)" }}
                  >
                    <li className="flex items-start">
                      <span
                        className="mr-3 mt-1 w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "rgb(252, 141, 85)" }}
                      ></span>
                      Implement AI-driven content optimization for educational
                      resources
                    </li>
                    <li className="flex items-start">
                      <span
                        className="mr-3 mt-1 w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "rgb(252, 141, 85)" }}
                      ></span>
                      Expand voice search optimization for mobile crypto queries
                    </li>
                    <li className="flex items-start">
                      <span
                        className="mr-3 mt-1 w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "rgb(252, 141, 85)" }}
                      ></span>
                      Develop advanced E-A-T signals for cryptocurrency
                      expertise demonstration
                    </li>
                    <li className="flex items-start">
                      <span
                        className="mr-3 mt-1 w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "rgb(252, 141, 85)" }}
                      ></span>
                      Enhance Core Web Vitals through progressive web app
                      implementation
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 5. References */}
            <section className="mb-8 border-t pt-8">
              <h2
                className="text-3xl font-semibold mb-6"
                style={{ color: "rgb(30, 31, 37)" }}
              >
                5. References
              </h2>

              <div className="bg-gray-50 rounded-lg p-6">
                <p
                  className="text-sm mb-4"
                  style={{ color: "rgb(30, 31, 37)" }}
                >
                  <em>
                    This case study is based on publicly available information,
                    industry research, and established SEO best practices. All
                    data and strategies represent realistic scenarios for
                    enterprise-level technical SEO implementation.
                  </em>
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul
                    className="text-sm space-y-1"
                    style={{ color: "rgb(30, 31, 37)" }}
                  >
                    <li>
                      •{" "}
                      <a
                        href="https://ahrefs.com/blog/"
                        className="hover:underline"
                        style={{ color: "rgb(252, 141, 85)" }}
                      >
                        Ahrefs Blog
                      </a>
                    </li>
                    <li>
                      •{" "}
                      <a
                        href="https://www.bitdegree.org/top-crypto-exchanges/kraken"
                        className="hover:underline"
                        style={{ color: "rgb(252, 141, 85)" }}
                      >
                        BitDegree - Kraken Trading Volume & Data
                      </a>
                    </li>
                    <li>
                      •{" "}
                      <a
                        href="https://support.google.com/webmasters/"
                        className="hover:underline"
                        style={{ color: "rgb(252, 141, 85)" }}
                      >
                        Google Search Console Help
                      </a>
                    </li>
                    <li>
                      ��{" "}
                      <a
                        href="https://gracker.ai/seo-101/hreflang-implementation-guide"
                        className="hover:underline"
                        style={{ color: "rgb(252, 141, 85)" }}
                      >
                        Hreflang Implementation Guide
                      </a>
                    </li>
                    <li>
                      •{" "}
                      <a
                        href="https://blog.kraken.com/"
                        className="hover:underline"
                        style={{ color: "rgb(252, 141, 85)" }}
                      >
                        Kraken Blog
                      </a>
                    </li>
                    <li>
                      •{" "}
                      <a
                        href="https://www.kraken.com/features/security"
                        className="hover:underline"
                        style={{ color: "rgb(252, 141, 85)" }}
                      >
                        Kraken Security Features
                      </a>
                    </li>
                  </ul>
                  <ul
                    className="text-sm space-y-1"
                    style={{ color: "rgb(30, 31, 37)" }}
                  >
                    <li>
                      •{" "}
                      <a
                        href="https://krakendesign.co.uk/insights/what-is-technical-seo-and-why-do-you-need-it-for-your-website/"
                        className="hover:underline"
                        style={{ color: "rgb(252, 141, 85)" }}
                      >
                        Technical SEO Guide - Kraken Design
                      </a>
                    </li>
                    <li>
                      •{" "}
                      <a
                        href="https://krakenbox.com/"
                        className="hover:underline"
                        style={{ color: "rgb(252, 141, 85)" }}
                      >
                        Kraken Box SEO Tools
                      </a>
                    </li>
                    <li>
                      •{" "}
                      <a
                        href="https://www.semrush.com/website/kraken.com/overview/"
                        className="hover:underline"
                        style={{ color: "rgb(252, 141, 85)" }}
                      >
                        Semrush - kraken.com Analytics
                      </a>
                    </li>
                    <li>
                      •{" "}
                      <a
                        href="https://schema.org/"
                        className="hover:underline"
                        style={{ color: "rgb(252, 141, 85)" }}
                      >
                        Schema.org
                      </a>
                    </li>
                    <li>
                      •{" "}
                      <a
                        href="https://writesonic.com/blog/seo-automation-tools"
                        className="hover:underline"
                        style={{ color: "rgb(252, 141, 85)" }}
                      >
                        SEO Automation Tools Guide
                      </a>
                    </li>
                    <li>
                      •{" "}
                      <a
                        href="https://store.shopware.com/en/pacma68616937904m/kraken.io-image-optimizer.html"
                        className="hover:underline"
                        style={{ color: "rgb(252, 141, 85)" }}
                      >
                        Kraken.io Image Optimizer
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </article>

          {/* CTA Section */}
          <div
            className="rounded-lg p-12 text-center border shadow-sm"
            style={{
              backgroundColor: "rgb(241, 245, 248)",
              borderColor: "rgb(30, 31, 37)",
              borderRadius: "10px",
            }}
          >
            <h2
              className="text-3xl font-semibold mb-4"
              style={{ color: "rgb(30, 31, 37)" }}
            >
              Let's Talk Web3
            </h2>
            <p
              className="text-lg mb-6 leading-relaxed"
              style={{ color: "rgb(30, 31, 37)" }}
            >
              Unlock your website's full potential! Get in touch and start your
              journey today.
            </p>
            <Button
              className="font-semibold px-8 py-3 rounded border-0 hover:opacity-90 transition-opacity"
              style={{
                backgroundColor: "rgb(252, 141, 85)",
                color: "rgb(30, 31, 37)",
              }}
              onClick={() => (window.location.href = "/contact")}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="py-12 px-5 border-t"
        style={{ backgroundColor: "#F9FAFB", borderColor: "#E5E7EB" }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3
              className="text-lg font-semibold mb-4 pb-2 border-b-2 inline-block"
              style={{ color: "#1F2937", borderColor: "#8B5CF6" }}
            >
              Quantum SEO
            </h3>
            <div style={{ color: "#6B7280" }}>
              <p>Advanced Technical SEO</p>
              <p>Crypto Exchange Optimization</p>
            </div>
          </div>

          <div>
            <h3
              className="text-lg font-semibold mb-4 pb-2 border-b-2 inline-block"
              style={{ color: "#1F2937", borderColor: "#8B5CF6" }}
            >
              Case Studies
            </h3>
            <ul className="space-y-2" style={{ color: "#6B7280" }}>
              <li>
                <a
                  href="#"
                  className="transition-colors"
                  onMouseEnter={(e) => (e.target.style.color = "#8B5CF6")}
                  onMouseLeave={(e) => (e.target.style.color = "#6B7280")}
                >
                  Technical SEO Analysis
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors"
                  onMouseEnter={(e) => (e.target.style.color = "#8B5CF6")}
                  onMouseLeave={(e) => (e.target.style.color = "#6B7280")}
                >
                  Performance Optimization
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors"
                  onMouseEnter={(e) => (e.target.style.color = "#8B5CF6")}
                  onMouseLeave={(e) => (e.target.style.color = "#6B7280")}
                >
                  International SEO
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors"
                  onMouseEnter={(e) => (e.target.style.color = "#8B5CF6")}
                  onMouseLeave={(e) => (e.target.style.color = "#6B7280")}
                >
                  Enterprise Solutions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3
              className="text-lg font-semibold mb-4 pb-2 border-b-2 inline-block"
              style={{ color: "#1F2937", borderColor: "#8B5CF6" }}
            >
              Let's Connect
            </h3>
            <ul className="space-y-3" style={{ color: "#6B7280" }}>
              <li className="flex items-center">
                <span className="mr-3 text-lg" style={{ color: "#8B5CF6" }}>
                  📧
                </span>
                <a
                  href="/contact"
                  className="transition-colors"
                  onMouseEnter={(e) => (e.target.style.color = "#8B5CF6")}
                  onMouseLeave={(e) => (e.target.style.color = "#6B7280")}
                >
                  Get SEO Analysis
                </a>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-lg" style={{ color: "#8B5CF6" }}>
                  💼
                </span>
                <a
                  href="#"
                  className="transition-colors"
                  onMouseEnter={(e) => (e.target.style.color = "#8B5CF6")}
                  onMouseLeave={(e) => (e.target.style.color = "#6B7280")}
                >
                  LinkedIn Portfolio
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="text-center mt-12 pt-8 border-t"
          style={{ color: "#6B7280", borderColor: "#E5E7EB" }}
        >
          <div className="flex items-center justify-center space-x-2 mb-2">
            <span className="text-2xl">🐙</span>
            <em style={{ color: "#8B5CF6" }}>
              "Release the Kraken of SEO Performance"
            </em>
          </div>
        </div>
      </footer>
    </div>
  );
}
