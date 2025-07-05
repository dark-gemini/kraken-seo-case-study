import { Button } from "@/components/ui/button";

export default function Index() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0c0c0c" }}>
      <section className="py-15 px-5">
        <div className="max-w-4xl mx-auto text-white">
          {/* Main Heading */}
          <h1 className="text-4xl lg:text-5xl font-bold mb-5 leading-tight">
            🚀 Kraken SEO Case Study
          </h1>

          {/* Description */}
          <p className="text-lg leading-relaxed mb-8 text-gray-100">
            Led a multi-domain SEO optimization effort at Kraken, improving
            technical health, automation, and international targeting to drive
            significant growth in organic traffic.
          </p>

          {/* Converter Pages Strategy Section */}
          <div className="bg-slate-900/50 rounded-lg p-6 mb-8 border border-slate-800">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              🧠 Scalable SEO for Converter Pages
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">
                  Challenge:
                </h3>
                <p className="text-gray-100 leading-relaxed">
                  Kraken needed to scale its organic visibility across thousands
                  of long-tail keyword searches like "BTC to USD" and "ETH to
                  EUR," while ensuring pages remained technically sound and
                  useful to users.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">
                  Action:
                </h3>
                <ul className="text-gray-100 space-y-2 ml-4">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Consulted on the SEO framework behind converter pages with
                    real-time rates, charts, and educational modules
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Ensured pages followed SEO best practices (structured data,
                    hreflang, canonicalization)
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Created templates optimized for performance and crawl
                    efficiency
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    Developed automation pipelines to scale dynamic content
                    without duplicate content issues
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-green-400 mb-2">
                  Result:
                </h3>
                <div className="text-gray-100 space-y-2">
                  <p className="flex items-start">
                    <span className="text-green-400 mr-2">🌍</span>
                    Captured{" "}
                    <strong>significant long-tail search traffic</strong> across
                    hundreds of international markets
                  </p>
                  <p className="flex items-start">
                    <span className="text-green-400 mr-2">⚙️</span>
                    Delivered a{" "}
                    <strong>scalable technical SEO framework</strong> powering
                    thousands of conversion pages with minimal manual upkeep
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {/* Key Achievements Column */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold mb-4">Key Achievements</h2>
              <ul className="space-y-3 text-gray-100">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  +85% organic traffic growth
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Improved page performance by 40%
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Boosted SEO ops efficiency by 60%
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Implemented hreflang for global content
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Reduced technical debt & crawl issues
                </li>
              </ul>
            </div>

            {/* Technologies Used Column */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold mb-4">Technologies Used</h2>
              <ul className="space-y-3 text-gray-100">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Google Search Console
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Google Analytics
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  JavaScript Rendering
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Hreflang Tools
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Looker Studio
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  SEO Automation Scripts
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            onClick={() => (window.location.href = "/contact")}
          >
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
}
