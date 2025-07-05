import { Button } from "@/components/ui/button";

export default function Index() {
  return (
    <div
      className="min-h-screen bg-gray-100"
      style={{ backgroundColor: "rgb(241, 245, 248)" }}
    >
      {/* Header Section */}
      <header className="py-6 px-5">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div
            className="text-2xl font-bold"
            style={{ color: "rgb(30, 31, 37)" }}
          >
            Precision Growth
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#"
              className="text-lg font-medium hover:text-orange-500"
              style={{ color: "rgb(30, 31, 37)" }}
            >
              Resources
            </a>
            <a
              href="#"
              className="text-lg font-medium hover:text-orange-500"
              style={{ color: "rgb(30, 31, 37)" }}
            >
              About
            </a>
            <a
              href="/contact"
              className="text-lg font-medium hover:text-orange-500"
              style={{ color: "rgb(30, 31, 37)" }}
            >
              Contact Us
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-5 text-center">
        <div className="max-w-4xl mx-auto">
          <h1
            className="text-5xl font-bold mb-4"
            style={{
              color: "rgb(30, 31, 37)",
              fontFamily: "Montserrat, Helvetica, Arial, sans-serif",
            }}
          >
            🚀 Kraken SEO Case Study
          </h1>
          <div className="text-lg mb-2">
            <span style={{ color: "rgb(30, 31, 37)" }}>Written By </span>
            <a
              href="#"
              className="font-semibold hover:underline"
              style={{ color: "rgb(252, 141, 85)" }}
            >
              Joe Firth
            </a>
          </div>
          <div className="text-base" style={{ color: "rgb(30, 31, 37)" }}>
            Last Updated On{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="px-5 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Article Content with White Background */}
          <article
            className="bg-white rounded-lg p-8 shadow-sm mb-8"
            style={{ fontFamily: "Montserrat, Helvetica, Arial, sans-serif" }}
          >
            {/* Introduction */}
            <div className="mb-8">
              <p
                className="text-lg leading-relaxed"
                style={{ color: "rgb(30, 31, 37)", lineHeight: "28.8px" }}
              >
                Led a multi-domain SEO optimization effort at Kraken, improving
                technical health, automation, and international targeting to
                drive significant growth in organic traffic.
              </p>
            </div>

            {/* Converter Pages Strategy Section */}
            <section className="mb-8">
              <h2
                className="text-3xl font-semibold mb-6"
                style={{ color: "rgb(30, 31, 37)" }}
              >
                🧠 Scalable SEO for Converter Pages
              </h2>

              <div className="space-y-6">
                <div>
                  <h3
                    className="text-xl font-semibold mb-3"
                    style={{ color: "rgb(252, 141, 85)" }}
                  >
                    Challenge:
                  </h3>
                  <p
                    className="leading-relaxed"
                    style={{ color: "rgb(30, 31, 37)", lineHeight: "28.8px" }}
                  >
                    Kraken needed to scale its organic visibility across
                    thousands of long-tail keyword searches like "BTC to USD"
                    and "ETH to EUR," while ensuring pages remained technically
                    sound and useful to users.
                  </p>
                </div>

                <div>
                  <h3
                    className="text-xl font-semibold mb-3"
                    style={{ color: "rgb(252, 141, 85)" }}
                  >
                    Action:
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
                      Consulted on the SEO framework behind converter pages with
                      real-time rates, charts, and educational modules
                    </li>
                    <li className="flex items-start">
                      <span
                        className="mr-3 mt-1 w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "rgb(252, 141, 85)" }}
                      ></span>
                      Ensured pages followed SEO best practices (structured
                      data, hreflang, canonicalization)
                    </li>
                    <li className="flex items-start">
                      <span
                        className="mr-3 mt-1 w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "rgb(252, 141, 85)" }}
                      ></span>
                      Created templates optimized for performance and crawl
                      efficiency
                    </li>
                    <li className="flex items-start">
                      <span
                        className="mr-3 mt-1 w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "rgb(252, 141, 85)" }}
                      ></span>
                      Developed automation pipelines to scale dynamic content
                      without duplicate content issues
                    </li>
                  </ul>
                </div>

                <div>
                  <h3
                    className="text-xl font-semibold mb-3"
                    style={{ color: "rgb(124, 198, 141)" }}
                  >
                    Result:
                  </h3>
                  <div
                    className="space-y-3"
                    style={{ color: "rgb(30, 31, 37)" }}
                  >
                    <p className="flex items-start">
                      <span className="mr-3">🌍</span>
                      Captured{" "}
                      <strong>significant long-tail search traffic</strong>{" "}
                      across hundreds of international markets
                    </p>
                    <p className="flex items-start">
                      <span className="mr-3">⚙️</span>
                      Delivered a{" "}
                      <strong>scalable technical SEO framework</strong> powering
                      thousands of conversion pages with minimal manual upkeep
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Key Metrics Section */}
            <section className="mb-8">
              <h2
                className="text-3xl font-semibold mb-6"
                style={{ color: "rgb(30, 31, 37)" }}
              >
                Key Performance Metrics
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Key Achievements Column */}
                <div>
                  <h3
                    className="text-xl font-semibold mb-4"
                    style={{ color: "rgb(30, 31, 37)" }}
                  >
                    Key Achievements
                  </h3>
                  <ul
                    className="space-y-3"
                    style={{ color: "rgb(30, 31, 37)" }}
                  >
                    <li className="flex items-start">
                      <span
                        className="mr-3 mt-1 w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "rgb(124, 198, 141)" }}
                      ></span>
                      +85% organic traffic growth
                    </li>
                    <li className="flex items-start">
                      <span
                        className="mr-3 mt-1 w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "rgb(124, 198, 141)" }}
                      ></span>
                      Improved page performance by 40%
                    </li>
                    <li className="flex items-start">
                      <span
                        className="mr-3 mt-1 w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "rgb(124, 198, 141)" }}
                      ></span>
                      Boosted SEO ops efficiency by 60%
                    </li>
                    <li className="flex items-start">
                      <span
                        className="mr-3 mt-1 w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "rgb(124, 198, 141)" }}
                      ></span>
                      Implemented hreflang for global content
                    </li>
                    <li className="flex items-start">
                      <span
                        className="mr-3 mt-1 w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "rgb(124, 198, 141)" }}
                      ></span>
                      Reduced technical debt & crawl issues
                    </li>
                  </ul>
                </div>

                {/* Technologies Used Column */}
                <div>
                  <h3
                    className="text-xl font-semibold mb-4"
                    style={{ color: "rgb(30, 31, 37)" }}
                  >
                    Technologies Used
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
                      Google Search Console
                    </li>
                    <li className="flex items-start">
                      <span
                        className="mr-3 mt-1 w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "rgb(252, 141, 85)" }}
                      ></span>
                      Google Analytics
                    </li>
                    <li className="flex items-start">
                      <span
                        className="mr-3 mt-1 w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "rgb(252, 141, 85)" }}
                      ></span>
                      JavaScript Rendering
                    </li>
                    <li className="flex items-start">
                      <span
                        className="mr-3 mt-1 w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "rgb(252, 141, 85)" }}
                      ></span>
                      Hreflang Tools
                    </li>
                    <li className="flex items-start">
                      <span
                        className="mr-3 mt-1 w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "rgb(252, 141, 85)" }}
                      ></span>
                      Looker Studio
                    </li>
                    <li className="flex items-start">
                      <span
                        className="mr-3 mt-1 w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "rgb(252, 141, 85)" }}
                      ></span>
                      SEO Automation Scripts
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
              Let's Talk SEO
            </h2>
            <p
              className="text-lg mb-6 leading-relaxed"
              style={{ color: "rgb(30, 31, 37)" }}
            >
              Unlock your website's full potential! Get in touch and start your
              SEO journey today.
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
        className="py-12 px-5"
        style={{ backgroundColor: "rgb(241, 245, 248)" }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3
              className="text-lg font-semibold mb-4"
              style={{
                color: "rgb(30, 31, 37)",
                borderBottom: "2px solid rgb(252, 141, 85)",
                paddingBottom: "4px",
                display: "inline-block",
              }}
            >
              Address
            </h3>
            <div style={{ color: "rgb(30, 31, 37)" }}>
              <p>Rise, 41 Luke St</p>
              <p>London EC2A 4DP</p>
            </div>
          </div>

          <div>
            <h3
              className="text-lg font-semibold mb-4"
              style={{
                color: "rgb(30, 31, 37)",
                borderBottom: "2px solid rgb(252, 141, 85)",
                paddingBottom: "4px",
                display: "inline-block",
              }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2" style={{ color: "rgb(30, 31, 37)" }}>
              <li>
                <a href="#" className="hover:text-orange-500">
                  See Our Results
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Guides
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  SEO Video Audit
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3
              className="text-lg font-semibold mb-4"
              style={{
                color: "rgb(30, 31, 37)",
                borderBottom: "2px solid rgb(252, 141, 85)",
                paddingBottom: "4px",
                display: "inline-block",
              }}
            >
              Let's Connect
            </h3>
            <ul className="space-y-2" style={{ color: "rgb(30, 31, 37)" }}>
              <li className="flex items-center">
                <span className="mr-2" style={{ color: "rgb(124, 198, 141)" }}>
                  📧
                </span>
                <a href="/contact" className="hover:text-orange-500">
                  Contact Us
                </a>
              </li>
              <li className="flex items-center">
                <span className="mr-2" style={{ color: "rgb(124, 198, 141)" }}>
                  📅
                </span>
                <a href="#" className="hover:text-orange-500">
                  Book a Chemistry Call
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="text-center mt-8 pt-4"
          style={{ color: "rgb(193, 193, 193)" }}
        >
          <em>"Don't be evil"</em>
        </div>
      </footer>
    </div>
  );
}
