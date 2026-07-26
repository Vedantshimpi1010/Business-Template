import { Phone, Mail, MapPin } from "lucide-react";
import SectionTitle from "./SectionTitle";

function Contact({ business, darkMode }) {
  return (
    <section
      id="contact"
      className={`py-20 transition-colors duration-300 ${
        darkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          title="Contact Us"
          subtitle="We're here to help. Visit us or get in touch."
          darkMode={darkMode}
        />

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div
            className={`rounded-2xl p-8 shadow-lg transition-colors duration-300 ${
              darkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Phone
                  className={`${
                    darkMode ? "text-blue-400" : "text-blue-600"
                  }`}
                />
                <span
                  className={`${
                    darkMode ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  {business.phone}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <Mail
                  className={`${
                    darkMode ? "text-blue-400" : "text-blue-600"
                  }`}
                />
                <span
                  className={`${
                    darkMode ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  {business.email}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin
                  className={`${
                    darkMode ? "text-blue-400" : "text-blue-600"
                  }`}
                />
                <span
                  className={`${
                    darkMode ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  {business.address}
                </span>
              </div>

              <a
                href={`https://wa.me/${business.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Google Map */}
          <div
            className={`rounded-2xl overflow-hidden shadow-lg border ${
              darkMode ? "border-gray-700" : "border-gray-200"
            }`}
          >
            <iframe
              src={business.mapEmbed}
              className="w-full h-80 border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Business Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;