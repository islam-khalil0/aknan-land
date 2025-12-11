import BlurText from "./BlurText";
import AnimatedContent from "./AnimatedContent";
import { Button } from "../components/ui/button";
import AboutImg from "../assets/about-img.png";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        id="about"
        className="mt-[4rem] mb-[2rem] max-md:flex-wrap  max-md:mt-[2rem] px-[7rem] max-md:px-[1.5rem] flex gap-4"
      >
        <div className="min-w-[19%] max-md:min-w-[100%]">
          <BlurText
            text="عن أكنان"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-5xl text-[#0a0710] font-bold max-md:text-2xl"
          />
        </div>
        <div className="min-w-[79%] max-md:min-w-[100%] ">
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
            <div className="flex flex-col gap-6">
              <p className="text-justify text-lg max-md:text-sm">
                شركة أكنان هي شركة رائدة في مجال الوساطة العقارية، تتميز بخبرة
                واسعة في ربط الملاك بالمستأجرين بكفاءة واحترافية عالية. نسعى
                لتقديم تجربة عقارية متكاملة تشمل كل مراحل التعامل، بدءًا من
                تقديم الاستشارات المتخصصة لاختيار العقار أو المستأجر المناسب،
                مرورًا بمتابعة كافة الإجراءات القانونية والإدارية بدقة، وصولًا
                إلى إتمام كافة العقود وضمان حقوق جميع الأطراف.
              </p>
              <div className="flex flex-row sm:flex-row gap-4 max-md:gap-3">
                <Button
                  onClick={() => {
                    navigate("/register");
                  }}
                  className="cursor-pointer bg-black text-white rounded-full px-16 py-6 max-md:py-4 border border-black/20 transition sm:w-auto max-md:text-[14px]"
                >
                  ابدأ الآن
                </Button>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </div>
      <div className="flex justify-center items-center mb-[4rem] max-md:mb-[2rem] px-[7rem] max-md:px-[1.5rem]">
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
          className="w-[100%]"
        >
          <img
            src={AboutImg}
            className="h-[600px] w-[100%] object-cover object-top rounded-2xl max-md:h-auto"
          />
        </AnimatedContent>
      </div>
    </div>
  );
};

export default AboutSection;
