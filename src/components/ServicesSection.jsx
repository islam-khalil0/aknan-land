import React from "react";
import SpotlightCard from "./SpotlightCard";
import BlurText from "./BlurText";
import {
  FaHandshake,
  FaFileContract,
  FaClipboardCheck,
  FaLightbulb,
  FaProjectDiagram,
  FaGavel,
} from "react-icons/fa";
import AnimatedContent from "./AnimatedContent";


const ServicesSection = () => {
  const Services = [
    {
      id: 1,
      icon: <FaHandshake className="text-4xl text-[#0a0710] max-md:text-3xl" />,
      title: "وساطة عقارية سلسة",
      description:
        "ربط مباشر بين الملاك والمستأجرين بطريقة سلسة واحترافية لتسهيل إتمام العقود بسرعة.",
    },
    {
      id: 2,
      icon: (
        <FaFileContract className="text-4xl text-[#0a0710] max-md:text-3xl" />
      ),
      title: "إتمام العقود القانونية",
      description:
        "نساعدك في إتمام جميع الأوراق والعقود القانونية الخاصة بالإيجار أو البيع بدون عناء.",
    },
    {
      id: 3,
      icon: (
        <FaClipboardCheck className="text-4xl text-[#0a0710] max-md:text-3xl" />
      ),
      title: "متابعة المعاملات",
      description:
        "متابعة جميع إجراءات المعاملات العقارية لضمان حقوق جميع الأطراف وتسهيل العملية.",
    },
    {
      id: 4,
      icon: <FaLightbulb className="text-4xl text-[#0a0710] max-md:text-3xl" />,
      title: "استشارات عقارية مخصصة",
      description:
        "تقديم استشارات متخصصة لمساعدتك في اتخاذ قرارات صحيحة عند تأجير أو بيع العقار.",
    },
    // {
    //   id: 5,
    //   icon: (
    //     <FaProjectDiagram className="text-4xl text-[#6C6387] max-md:text-3xl" />
    //   ),
    //   title: "حلول وساطة مخصصة",
    //   description:
    //     "نوفر حلول وساطة مخصصة حسب احتياجات الملاك والمستأجرين لضمان تجربة سلسة وموثوقة.",
    // },
    // {
    //   id: 6,
    //   icon: <FaGavel className="text-4xl text-[#6C6387] max-md:text-3xl" />,
    //   title: "دعم قانوني وإداري كامل",
    //   description:
    //     "نقدم دعم كامل لإتمام جميع الإجراءات القانونية والإدارية المتعلقة بالعقارات بسهولة.",
    // },
  ];

  return (
    <div id="services" className="flex flex-col gap-6 justify-center items-center mb-[4rem] max-md:mb-[2rem] px-[7rem] max-md:px-[1.5rem]">
      <div>
        <BlurText
          text="خدماتنا"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-4xl font-bold max-md:text-2xl"
        />
      </div>
      {/* Grid Sys */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* card */}

        {Services.map((service) => (
          <AnimatedContent
            distance={0}
            direction="horizontal"
            reverse={false}
            duration={1.2}
            ease="power2.out"
            initialOpacity={0}
            animateOpacity
            scale={1}
            threshold={0.2}
            delay={0.3}
          >
            <SpotlightCard
              key={service.id}
              className="custom-spotlight-card gap-4 min-h-[220px] max-md:min-h-[auto] flex flex-col items-start justify-between max-md:gap-3 max-md:p-6 max-md:rounded-xl"
              spotlightColor="rgba(0, 229, 255, 0.2)"
            >
              {service.icon}

              <h3 className="text-2xl text-black font-bold max-md:text-lg">
                {service.title}
              </h3>

              <p className="text-justify text-gray-600 text-lg max-md:text-sm">
                {service.description}
              </p>
            </SpotlightCard>
          </AnimatedContent>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
