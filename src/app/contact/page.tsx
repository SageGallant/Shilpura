import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact Us | Shilpura",
  description:
    "Get in touch with Shilpura's artisan support team for inquiries about our handcrafted products, custom orders, or wholesale opportunities.",
};

// Mock FAQs
const faqs = [
  {
    question: "How long does shipping take?",
    answer:
      "Standard shipping within India takes 5-7 business days. International shipping typically takes 10-15 business days depending on the destination country. Express shipping options are available at checkout.",
  },
  {
    question: "Do you offer custom orders?",
    answer:
      "Yes, we collaborate with our artisan partners to create custom pieces. For custom orders, please use our contact form with detailed requirements, and our team will get back to you within 48 hours.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We accept returns within 14 days of delivery for most items in their original condition. Please note that personalized items and certain fragile handcrafted products cannot be returned unless damaged during shipping.",
  },
  {
    question: "How do you support artisans?",
    answer:
      "We work directly with artisan communities across India, ensuring fair compensation and sustainable business practices. A significant portion of each sale goes directly to the artisans, and we invest in skill development programs in their communities.",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-islandSpice/10">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-bordeaux to-terracotta py-12">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-playfair text-white mb-4">
            Contact Us
          </h1>
          <p className="text-white/90 max-w-2xl mx-auto">
            We're here to assist you with any questions about our handcrafted
            treasures
          </p>
        </div>
      </section>

      {/* Contact Information and Form Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-8 sticky top-24">
                <h2 className="text-2xl font-playfair text-bordeaux mb-6">
                  Get In Touch
                </h2>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-terracotta/10 flex items-center justify-center text-terracotta">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-bordeaux">
                        Our Address
                      </h3>
                      <address className="mt-1 text-sm text-osloGray not-italic">
                        Shilpura Experience Center
                        <br />
                        42 Crafts Avenue, Jaipur
                        <br />
                        Rajasthan, India - 302001
                      </address>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-terracotta/10 flex items-center justify-center text-terracotta">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-bordeaux">
                        Email Us
                      </h3>
                      <p className="mt-1 text-sm text-osloGray">
                        <a
                          href="mailto:connect@shilpura.com"
                          className="hover:text-terracotta"
                        >
                          connect@shilpura.com
                        </a>
                      </p>
                      <p className="mt-1 text-sm text-osloGray">
                        <a
                          href="mailto:artisans@shilpura.com"
                          className="hover:text-terracotta"
                        >
                          artisans@shilpura.com
                        </a>{" "}
                        (for artisan partnerships)
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-terracotta/10 flex items-center justify-center text-terracotta">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-bordeaux">
                        Call Us
                      </h3>
                      <p className="mt-1 text-sm text-osloGray">
                        <a
                          href="tel:+919876543210"
                          className="hover:text-terracotta"
                        >
                          +91 98765 43210
                        </a>{" "}
                        (Customer Support)
                      </p>
                      <p className="text-xs text-osloGray mt-1">
                        Mon-Sat: 10:00 AM - 7:00 PM IST
                      </p>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="pt-6 border-t border-gray-100">
                    <h3 className="text-sm font-medium text-bordeaux mb-3">
                      Connect With Us
                    </h3>
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="text-osloGray hover:text-terracotta transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="text-osloGray hover:text-terracotta transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="text-osloGray hover:text-terracotta transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="text-osloGray hover:text-terracotta transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-playfair text-bordeaux mb-6">
                  Send Us a Message
                </h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-osloGray mb-2"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-bordeaux focus:border-bordeaux"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-osloGray mb-2"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-bordeaux focus:border-bordeaux"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-osloGray mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-bordeaux focus:border-bordeaux"
                      placeholder="What is your message about?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-osloGray mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-bordeaux focus:border-bordeaux"
                      placeholder="Type your message here..."
                    ></textarea>
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="privacy"
                      name="privacy"
                      className="mt-1 mr-2"
                    />
                    <label htmlFor="privacy" className="text-sm text-osloGray">
                      I agree to the{" "}
                      <Link
                        href="/privacy-policy"
                        className="text-bordeaux hover:underline"
                      >
                        Privacy Policy
                      </Link>{" "}
                      and consent to Shilpura storing my information for
                      processing this inquiry.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="bg-terracotta text-white py-3 px-6 rounded-md hover:bg-terracotta/90 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-10 bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-playfair text-bordeaux mb-4">
              Visit Our Experience Center
            </h2>
            <p className="text-osloGray max-w-2xl mx-auto">
              Explore our curated collection in person at our experience center
              in Jaipur, where you can meet our artisans and witness traditional
              craftsmanship firsthand.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <div className="aspect-video w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.1209525419!2d75.77557761504445!3d26.900853066207154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5171ad974f5%3A0xf911c5f616ae2e0a!2sJaipur%2C%20Rajasthan%2C%20India!5e0!3m2!1sen!2sus!4v1622956421889!5m2!1sen!2sus"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Shilpura Experience Center Map"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="bg-islandSpice p-6 rounded-b-lg shadow-sm">
            <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-6">
              <div>
                <h3 className="font-playfair text-xl text-bordeaux mb-2">
                  Shilpura Experience Center
                </h3>
                <p className="text-osloGray">
                  42 Crafts Avenue, Jaipur, Rajasthan, India - 302001
                </p>
              </div>
              <div className="flex gap-4">
                <div className="text-center">
                  <p className="font-medium text-bordeaux">Opening Hours</p>
                  <p className="text-sm text-osloGray">
                    Mon-Sat: 10:00 AM - 7:00 PM
                  </p>
                  <p className="text-sm text-osloGray">
                    Sunday: 12:00 PM - 5:00 PM
                  </p>
                </div>
                <a
                  href="https://goo.gl/maps/p11QYqZM4Nm9KLy89"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-bordeaux text-white py-3 px-6 rounded-md hover:bg-bordeaux/90 transition-colors flex items-center gap-2 whitespace-nowrap"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-islandSpice/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-playfair text-bordeaux text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white shadow-sm rounded-lg overflow-hidden"
                >
                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer p-6">
                      <h3 className="text-lg font-medium text-bordeaux">
                        {faq.question}
                      </h3>
                      <span className="relative flex-shrink-0 ml-1.5 w-5 h-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-osloGray">
                      <p>{faq.answer}</p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
