import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0c0c0c" }}>
      <section className="py-15 px-5">
        <div className="max-w-4xl mx-auto text-white">
          <h1 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
            Get in Touch
          </h1>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-100">
              Ready to discuss your SEO optimization needs? Let's connect and
              explore how we can drive significant growth for your business.
            </p>

            <div className="bg-slate-900 rounded-lg p-6 space-y-4">
              <h2 className="text-xl font-semibold">Contact Information</h2>
              <div className="space-y-2 text-gray-100">
                <p>📧 Email: contact@example.com</p>
                <p>💼 LinkedIn: /in/seo-specialist</p>
                <p>🐦 Twitter: @seoexpert</p>
              </div>
            </div>

            <Button
              className="bg-slate-900 hover:bg-slate-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              onClick={() => (window.location.href = "/")}
            >
              ← Back to Case Study
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
