import React from "react";
import Accordion from "./Accordion";
import BlurText from "./BlurText";

const FaqSection = () => {
  return (
    <div id="faq" className="flex flex-col gap-6 justify-center items-center my-[4rem] max-md:my-[2rem] px-[7rem] max-md:px-[1.5rem]">
      <div>
        <BlurText
          text="أهم الاسئلة"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-4xl font-bold max-md:text-2xl"
        />
      </div>
      <div className="w-full">
        <Accordion />
      </div>
    </div>
  );
};

export default FaqSection;
