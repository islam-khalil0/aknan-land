import { useState } from "react";
import AnimatedContent from "./AnimatedContent";

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const items = [
    {
      q: "ما هي الخدمات التي تقدمها منصة أكنان؟",
      a: "توفر المنصة خدمات الوساطة العقارية، وإدارة العقود، وإنهاء جميع الإجراءات الرسمية بين المالك والمستأجر.",
    },
    {
      q: "هل تتطلب خدماتكم أي رسوم إضافية؟",
      a: "لا توجد أي رسوم مخفية، ويتم توضيح جميع التكاليف بشكل شفاف قبل البدء في الخدمة.",
    },
    {
      q: "كم يستغرق إنهاء الإجراءات والعقود؟",
      a: "عادة ما تستغرق إجراءات التوثيق وإنهاء الأوراق ما بين 24 إلى 48 ساعة، وذلك حسب نوع المعاملة.",
    },
    {
      q: "هل توفرون دعمًا فنيًا أو قانونيًا للعملاء؟",
      a: "نعم، يتوفر فريق مختص للرد على جميع الاستفسارات وتقديم الدعم الفني والقانوني عند الحاجة.",
    },
    {
      q: "هل يمكن تعديل البيانات بعد إرسال الطلب؟",
      a: "يمكن تعديل البيانات قبل مرحلة التوثيق، أما بعد بدء الإجراءات الرسمية فلا يمكن التعديل.",
    },
  ];

  return (
    <div className="space-y-4 min-w-full">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
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
            delay={0.1}
          >
            <div key={i} className=" rounded-xl overflow-hidden bg-[#0a0710]">
              {/* qus */}
              <button
                onClick={() => toggle(i)}
                className="cursor-pointer w-full text-right px-4 py-4 bg-[#0a0710] text-white flex justify-between items-center"
              >
                <span className="text-lg font-medium max-md:text-[14px]">
                  {item.q}
                </span>
                <span className="text-gray-400 text-xl">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {/* ans */}
              <div
                className={`px-4 overflow-hidden transition-all duration-300
                ${isOpen ? "max-h-40 py-3" : "max-h-0 py-0"}
              `}
              >
                <p className="text-gray-400 text-base leading-relaxed max-md:text-sm">
                  {item.a}
                </p>
              </div>
            </div>
          </AnimatedContent>
        );
      })}
    </div>
  );
}
