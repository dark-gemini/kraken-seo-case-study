import { Button } from "@/components/ui/button";

export default function Contact() {
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
              style={{ color: "rgb(252, 141, 85)" }}
            >
              Contact Us
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-5 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1
              className="text-5xl font-bold mb-4"
              style={{
                color: "rgb(30, 31, 37)",
                fontFamily: "Montserrat, Helvetica, Arial, sans-serif",
              }}
            >
              Get in Touch
            </h1>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "rgb(30, 31, 37)" }}
            >
              Ready to discuss your SEO optimization needs? Let's connect and
              explore how we can drive significant growth for your business.
            </p>
          </div>

          {/* Contact Card */}
          <div
            className="bg-white rounded-lg p-8 shadow-sm mb-8"
            style={{ fontFamily: "Montserrat, Helvetica, Arial, sans-serif" }}
          >
            <h2
              className="text-3xl font-semibold mb-6"
              style={{ color: "rgb(30, 31, 37)" }}
            >
              Contact Information
            </h2>

            <div className="space-y-6">
              <div className="flex items-center">
                <span
                  className="mr-4 text-2xl"
                  style={{ color: "rgb(124, 198, 141)" }}
                >
                  📧
                </span>
                <div>
                  <h3
                    className="text-lg font-semibold"
                    style={{ color: "rgb(30, 31, 37)" }}
                  >
                    Email
                  </h3>
                  <p style={{ color: "rgb(30, 31, 37)" }}>
                    contact@precisiongrowth.io
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <span
                  className="mr-4 text-2xl"
                  style={{ color: "rgb(124, 198, 141)" }}
                >
                  💼
                </span>
                <div>
                  <h3
                    className="text-lg font-semibold"
                    style={{ color: "rgb(30, 31, 37)" }}
                  >
                    LinkedIn
                  </h3>
                  <a
                    href="#"
                    className="hover:underline"
                    style={{ color: "rgb(252, 141, 85)" }}
                  >
                    /in/joe-firth-seo
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <span
                  className="mr-4 text-2xl"
                  style={{ color: "rgb(124, 198, 141)" }}
                >
                  🐦
                </span>
                <div>
                  <h3
                    className="text-lg font-semibold"
                    style={{ color: "rgb(30, 31, 37)" }}
                  >
                    Twitter
                  </h3>
                  <a
                    href="#"
                    className="hover:underline"
                    style={{ color: "rgb(252, 141, 85)" }}
                  >
                    @seojoefirth
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <span
                  className="mr-4 text-2xl"
                  style={{ color: "rgb(124, 198, 141)" }}
                >
                  📍
                </span>
                <div>
                  <h3
                    className="text-lg font-semibold"
                    style={{ color: "rgb(30, 31, 37)" }}
                  >
                    Address
                  </h3>
                  <p style={{ color: "rgb(30, 31, 37)" }}>
                    Rise, 41 Luke St
                    <br />
                    London EC2A 4DP
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div
            className="rounded-lg p-12 text-center border shadow-sm mb-8"
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
              Ready to Get Started?
            </h2>
            <p
              className="text-lg mb-6 leading-relaxed"
              style={{ color: "rgb(30, 31, 37)" }}
            >
              Let's schedule a chemistry call to discuss your SEO goals and how
              we can help achieve them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="font-semibold px-8 py-3 rounded border-0 hover:opacity-90 transition-opacity"
                style={{
                  backgroundColor: "rgb(252, 141, 85)",
                  color: "rgb(30, 31, 37)",
                }}
              >
                Book a Chemistry Call
              </Button>
              <Button
                className="font-semibold px-8 py-3 rounded border hover:bg-gray-50 transition-colors"
                style={{
                  backgroundColor: "transparent",
                  color: "rgb(30, 31, 37)",
                  borderColor: "rgb(30, 31, 37)",
                }}
                onClick={() => (window.location.href = "/")}
              >
                ← Back to Case Study
              </Button>
            </div>
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
