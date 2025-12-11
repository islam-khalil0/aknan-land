import React from "react";
import ScrollVelocity from "./ScrollVelocity";

const WhyAknan = () => {
  const velocity = 80;
  return (
    <div className="min-h-[auto] min-w-full overflow-hidden flex flex-col justify-center items-center my-[3rem] max-md:my-[2rem]">
      <ScrollVelocity
        texts={[
          "أكنان – وسيطك العقاري – وساطة متكاملة – استشارات عقارية – إنهاء العقود – تجربة سلسة - ",
        ]}
        velocity={velocity}
        className="py-6 text-2xl max-md:text-lg max-md:py-3 bg-[#0a0710] text-white max-md:text-3xl font-arabic"
      />
    </div>
  );
};

export default WhyAknan;
