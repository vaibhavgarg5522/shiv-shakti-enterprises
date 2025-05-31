import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const ShivShaktiEnterprises = () => {
  const images = ["item1.jpg", "item2.jpg", "item3.jpg", "item4.jpg"];

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-6 sm:p-10">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="/images/logo.jpg"
            alt="DTDC Logo"
            className="w-40 sm:w-56 h-auto object-contain"
          />
        </div>

        {/* Title & Tagline */}
        <div className="text-center mb-8">
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 font-semibold">
            EXPRESS PARCELS • INTERNATIONAL • E-COMMERCE
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold mt-2">
            <span className="text-black italic dark:text-white">DTDC</span> -{" "}
            <span className="text-red-600">SHIV SHAKTI ENTERPRISES</span>
          </h1>
        </div>

        {/* Contact Section */}
        <div className="grid md:grid-cols-2 gap-6 text-gray-800 dark:text-gray-100 text-base sm:text-lg font-medium mb-8">
          {/* Manoj */}
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl shadow-sm">
            <p className="text-red-600 font-semibold mb-1">
              Manoj Singh Chauhan (MuzaffarNagar)
            </p>
            <a
              href="tel:9720841914"
              className="flex items-center gap-2 hover:text-blue-600"
            >
              <FaPhoneAlt className="text-blue-500" />
              9720841914
            </a>
          </div>

          {/* Tushar */}
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl shadow-sm">
            <p className="text-red-600 font-semibold mb-1">
              Tushar Singhal (Deoband)
            </p>
            <a
              href="tel:7417141914"
              className="flex items-center gap-2 hover:text-blue-600"
            >
              <FaPhoneAlt className="text-blue-500" />
              7417141914
            </a>
            <a
              href="tel:9528977373"
              className="flex items-center gap-2 hover:text-blue-600"
            >
              <FaPhoneAlt className="text-blue-500" />
              9528977373
            </a>
            <a
              href="https://wa.me/919528977373"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-green-600 mt-1"
            >
              <FaWhatsapp className="text-green-500" />
              WhatsApp: 9528977373
            </a>
          </div>
        </div>

        {/* Email & Address */}
        <div className="text-center sm:text-left text-sm sm:text-base text-gray-700 dark:text-gray-200 leading-relaxed mb-8">
          <p>
            <span className="font-semibold">Email:</span>{" "}
            <a
              href="mailto:deoband_new.wup@fr.dtdc.com"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              deoband_new.wup@fr.dtdc.com
            </a>
          </p>
          <p className="mt-2">
            <span className="font-semibold">Address:</span> Aabkari Road, Near
            Madaan Garments, Deoband
          </p>
        </div>

        {/* Gallery Section */}
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 text-center mb-4">
          हमारा काम (Our Work)
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-lg shadow hover:shadow-xl transition-shadow"
            >
              <img
                src={`/images/${img}`}
                alt={`Work ${idx + 1}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          © 2025 DTDC - Shiv Shakti Enterprises. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default ShivShaktiEnterprises;
