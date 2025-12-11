import bgImg from "../assets/bg-pattern.png";
import { Button } from "../components/ui/button";
import AnimatedContent from "./AnimatedContent";
import { useNavigate } from "react-router-dom";

export default function ExploreSection() {
  const navigate = useNavigate();

  return (
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
      <div className="flex flex-col gap-6 justify-center items-center my-[4rem] max-md:my-[2rem] px-[7rem] max-md:px-[1.5rem]">
        <div
          className="flex flex-col items-center justify-center gap-8 max-md:gap-4 w-full rounded-[20px] py-22 max-md:py-14 px-6 text-center shadow-[0_0_80px_-10px_rgba(82,39,255,0.4)]"
          style={{
            backgroundImage: `url(${bgImg})`,
            backgroundSize: "cover",
            backgroundBlendMode: "overlay",
          }}
        >
          <h2 className="font-bold text-white text-4xl max-md:text-2xl">
            اكتشف أفضل الحلول
            <br /> العقارية الآن
          </h2>

          <p className="text-gray-300 text-[16px] max-md:text-[12px]">
            تعرّف على خدماتنا الذكية التي تساعدك في إنهاء الإجراءات العقارية،
            وإدارة العقود،
            <br /> وتسهيل جميع خطوات البيع والشراء والإيجار — بخطوة واحدة وبأقصى
            سهولة.{" "}
          </p>

          <Button
            onClick={() => {
              navigate("/register");
            }}
            className="cursor-pointer hover:bg-white bg-white text-black rounded-full px-22 max-md:px-16 py-6 max-md:py-4 border border-black/20 transition sm:w-auto max-md:text-[14px]"
          >
            ابدأ الآن
          </Button>
        </div>
      </div>
    </AnimatedContent>
  );
}
