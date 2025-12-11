import React from "react";
import CardNav from "./CardNav";
import logo from "../assets/aknan-logo.png";

const Header = () => {
  const items = [
    {
      label: "عن أكنان",
      bgColor: "#000",
      textColor: "#fff",
      links: [
        {
          label: "رؤيتنا ورسالتنا",
          ariaLabel: "رؤيتنا ورسالتنا",
          href: "#about",
        },
        {
          label: "نبذة عن الشركة",
          ariaLabel: "نبذة عن الشركة",
          href: "#about",
        },
      ],
    },
    {
      label: "خدماتنا",
      bgColor: "#000",
      textColor: "#fff",
      links: [
        { label: "وساطة عقارية", href: "#services" },
        { label: "استشارات عقارية", href: "#services" },
        { label: "إنهاء الأوراق والعقود", href: "#services" },
      ],
    },
    {
      label: "تواصل معنا",
      bgColor: "#000",
      textColor: "#fff",
      links: [
        { label: "تويتر", ariaLabel: "تابعنا على تويتر", href: "#contact" },
        { label: "لينكدإن", ariaLabel: "تابعنا على لينكدإن", href: "#contact" },
        {
          label: "البريد الإلكتروني",
          ariaLabel: "راسلنا عبر البريد الإلكتروني",
          href: "#contact",
        },
      ],
    },
  ];

  return (
    <CardNav
      logo={logo}
      logoAlt="Company Logo"
      items={items}
      baseColor="rgba(255, 255, 255, 0.1)"
      menuColor="#fff"
      buttonBgColor="#fff"
      buttonTextColor="#000"
      ease="power3.out"
      className="min-w-[80vw]"
    />
  );
};

export default Header;
