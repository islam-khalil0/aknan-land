import React from "react";
import aknanLogo from "../assets/aknan-logo.png";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleScrollOrRoute = (href) => {
    if (href.startsWith("/")) {
      navigate(href);
    } else if (href.startsWith("#")) {
      const id = href.replace("#", "");
      if (window.location.pathname !== "/") {
        navigate("/", { state: { scrollTo: id } });
      } else {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="border-t border-gray-100 m-0 pt-12 pb-4 px-[7rem] max-md:px-[1.5rem] flex flex-col gap-8 max-md:gap-4 bg-[#0a0710]">
      <div className="flex items-center gap-6 justify-between max-md:flex-col">
        {/* Logo + Text */}
        <div
          className="flex flex-col gap-4 cursor-pointer"
          onClick={() => handleScrollOrRoute("/")}
        >
          <img src={aknanLogo} className="w-42 max-md:w-24" alt="Aknan Logo" />
          <p className="text-gray-300 text-sm mt-1">
            منصة رقمية موثوقة لإنجاز معاملاتك العقارية بدون تعقيد.
          </p>
        </div>

        {/* Nav Links */}
        <nav className="flex items-start gap-8 text-white text-sm max-md:flex-col max-md:w-full max-md:gap-4">
          <button
            className="hover:text-gray-300"
            onClick={() => handleScrollOrRoute("#about")}
          >
            عن أكنان
          </button>
          <button
            className="hover:text-gray-300"
            onClick={() => handleScrollOrRoute("#services")}
          >
            خدماتنا
          </button>
          <Link to="/register" className="hover:text-gray-300">
            سجل بياناتك
          </Link>
          <button
            className="hover:text-gray-300"
            onClick={() => handleScrollOrRoute("#faq")}
          >
            أهم الاسئلة
          </button>
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
