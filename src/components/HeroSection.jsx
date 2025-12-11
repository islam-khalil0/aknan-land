import React from "react";
import Beams from "./Beams";
import BlurText from "./BlurText";
import { Button } from "../components/ui/button";
import { FiAward } from "react-icons/fi";
import AnimatedContent from "./AnimatedContent";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
    const navigate = useNavigate();

  return (
    <div>
      <div className="relative w-full min-h-[700px] max-md:min-h-[550px] flex items-center justify-center overflow-hidden">
        {/* Background Beams */}
        <div className="absolute inset-0">
          <Beams
            beamWidth={2}
            beamHeight={15}
            beamNumber={12}
            lightColor="#ffffff"
            speed={2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={0}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center flex flex-col items-center justify-center gap-12 max-md:gap-8 px-4 sm:px-0">
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
            <div className="bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-full px-6 py-2 transition flex items-center gap-2">
              <FiAward />
              <p className="text-[11px] max-md:text-[10px]">المنصة الاولي</p>
            </div>
          </AnimatedContent>

          <div className="flex flex-col items-center justify-center">
            <BlurText
              text="أكنان – وسيطك العقاري"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-[20px] sm:text-3xl mb-6 max-md:mb-2 font-bold text-white"
            />
            <BlurText
              text="إنهاء عقودك العقارية بسهولة"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-[20px] sm:text-3xl font-bold text-white"
            />
          </div>

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
            delay={0.6}
          >
            <div className="flex flex-row sm:flex-row gap-4 max-md:gap-3">
              <Button
             onClick={() => {
        navigate("/register");
      }}
                className="cursor-pointer bg-white text-black rounded-full px-12 max-md:px-10 py-6 max-md:py-4 hover:bg-white/80 hover:text-black border border-black/20 transition sm:w-auto max-md:text-[14px]"
              >
                ابدأ الآن
              </Button>
              <Button className="cursor-pointer bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-full px-12 max-md:px-10 py-6 max-md:py-4 hover:bg-white/20 transition sm:w-auto max-md:text-[14px]">
                استشارة مجانية
              </Button>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
