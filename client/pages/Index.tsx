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
