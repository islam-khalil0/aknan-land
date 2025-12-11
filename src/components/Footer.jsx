import React from "react";
import aknanLogo from "../assets/aknan-logo.png";

const Footer = () => {
  return (
    <footer className="m-0 pt-12 pb-4 px-[7rem] max-md:px-[1.5rem] flex flex-col gap-8 max-md:gap-4 bg-[#0a0710]">
      <div className="flex items-center gap-6 justify-between max-md:flex-col">
        {/* Logo + Text */}
        <div className="flex flex-col gap-4">
          <img src={aknanLogo} className="w-42 max-md:w-24" />
          <p className="text-gray-300 text-sm mt-1">
            منصة رقمية موثوقة لإنجاز معاملاتك العقارية بدون تعقيد.
          </p>
        </div>

        {/* Nav Links */}
        <nav className="flex gap-8 text-white text-sm max-md:flex-col max-md:w-full max-md:gap-4">
          <a href="#about" className="hover:text-gray-300">
            عن أكنان
          </a>
          <a href="#services" className="hover:text-gray-300">
            خدماتنا
          </a>
          <a href="#form" className="hover:text-gray-300">
            سجل بياناتك
          </a>
          <a href="#faq" className="hover:text-gray-300">
            أهم الاسئلة
          </a>
        </nav>
      </div>
      <div className="flex items-center justify-between max-md:flex-col gap-[0] pb-2">
        <p className="text-gray-400 text-xs mt-3">
          جميع الحقوق محفوظة © 2025 منصة أكنان
        </p>
        <p className="text-gray-400 text-xs mt-3 hover:underline">
          <a href="mailto:hello@jadagency.online">
          صُمم بعناية من قبل وكالة جاد
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
