import React, { useState } from "react";
import Stepper, { Step } from "./Stepper";
import { AiOutlineCheckCircle } from "react-icons/ai";
import BlurText from "./BlurText";
import { Input } from "@/components/ui/input"; // ShadCN Input
import { Button } from "@/components/ui/button"; // ShadCN Button
import { Label } from "@/components/ui/label"; // ShadCN Label

const Form = () => {
  const [stepData, setStepData] = useState({
    userType: "",
    phone: "",
    otp: ["", "", "", ""],
    owner: { name: "", phone: "", email: "", id: "" },
    tenant: { name: "", phone: "", email: "", id: "" },
    property: { city: "", location: "", area: "", floor: "", rooms: "" },
  });

  const [isCompleted, setIsCompleted] = useState(false);

  // OTP input handler
  const handleOtpChange = (index, value) => {
    if (!/^\d?$/.test(value)) return; // Only one digit allowed
    const newOtp = [...stepData.otp];
    newOtp[index] = value;
    setStepData({ ...stepData, otp: newOtp });

    const nextInput = document.getElementById(`otp-${index + 1}`);
    if (nextInput) nextInput.focus();
  };

  const validateStep = (step) => {
    switch (step) {
      case 1: // User type
        return stepData.userType !== "";
      case 2: // Phone
        return stepData.phone.trim() !== "";
      case 3: // OTP
        return stepData.otp.join("") === "0000";
      case 4: // Owner info
        return (
          stepData.owner.name.trim() &&
          stepData.owner.phone.trim() &&
          stepData.owner.email.trim() &&
          stepData.owner.id.trim()
        );
      case 5: // Tenant info
        return (
          stepData.tenant.name.trim() &&
          stepData.tenant.phone.trim() &&
          stepData.tenant.email.trim() &&
          stepData.tenant.id.trim()
        );
      case 6: // Property info
        return (
          stepData.property.city.trim() &&
          stepData.property.location.trim() &&
          stepData.property.area.trim() &&
          stepData.property.floor.trim() &&
          stepData.property.rooms.trim()
        );
      case 7: // Review step
        return true;
      default:
        return false;
    }
  };

  const handleFinish = () => {
    setIsCompleted(true);
  };

  if (isCompleted) {
    return (
      <div id="form" className="flex flex-col items-center justify-center min-h-[55vh] max-md:min-h-[40vh] gap-4 p-8 bg-black text-white">
        <AiOutlineCheckCircle className="text-6xl text-green-500" />
        <h2 className="text-3xl font-bold text-center">شكراً لتقديم طلبك!</h2>
        <p className="text-lg text-center max-w-md">
          لقد استلمنا بياناتك بنجاح وسنتواصل معك قريباً لإكمال إجراءاتك.
        </p>
      </div>
    );
  }

  return (
    <div id="form" className="bg-[#0a0710] min-h-[75vh] max-md:min-h-[auto] py-[3rem] flex flex-col items-center justify-evenly gap-[2rem]">
      <div>
        <BlurText
          text="سجل بياناتك"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-4xl text-white font-bold max-md:text-2xl"
        />
      </div>

      <Stepper
        initialStep={1}
        onFinalStepCompleted={handleFinish}
        backButtonText="السابق"
        nextButtonText="التالي"
        validateStep={validateStep}
      >
        {/* Step 1: User type selection */}
        <Step>
          <h2 className="text-2xl font-bold">التسجيل كا:</h2>
          <div className="flex gap-4 mt-4">
            <Button
              className="w-[80%]"
              variant={stepData.userType === "owner" ? "default" : "outline"}
              onClick={() => setStepData({ ...stepData, userType: "owner" })}
            >
              مالك
            </Button>
            <Button
              className="w-[80%]"
              variant={stepData.userType === "tenant" ? "default" : "outline"}
              onClick={() => setStepData({ ...stepData, userType: "tenant" })}
            >
              مستأجر
            </Button>
          </div>
        </Step>

        {/* Step 2: Phone input */}
        <Step>
          <Label htmlFor="phone">ادخل رقم جوالك</Label>
          <Input
          className="my-2"
            id="phone"
            type="tel"
            placeholder="05xxxxxxxx"
            value={stepData.phone}
            onChange={(e) =>
              setStepData({ ...stepData, phone: e.target.value })
            }
            required
          />
        </Step>

        {/* Step 3: OTP input */}
        <Step>
          <div className="flex items-center justify-center flex-col">
            <h2 className="text-l">ادخل رمز التحقق </h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              {stepData.otp.map((num, i) => (
                <Input
                  key={i}
                  id={`otp-${i}`}
                  value={num}
                  maxLength={1}
                  onChange={(e) => handleOtpChange(i, e.target.value)}
                  required
                  className="w-12 h-12 border-2 border-gray-400 text-center text-xl m-2"
                />
              ))}
            </div>
          </div>
        </Step>

        {/* Step 4: Owner info */}
        <Step>
          <h2>معلومات المالك</h2>
          <div className="flex flex-col gap-4 my-4">
            <Input
              placeholder="الاسم"
              value={stepData.owner.name}
              onChange={(e) =>
                setStepData({
                  ...stepData,
                  owner: { ...stepData.owner, name: e.target.value },
                })
              }
              required
            />
            <Input
              placeholder="رقم الجوال"
              value={stepData.owner.phone}
              onChange={(e) =>
                setStepData({
                  ...stepData,
                  owner: { ...stepData.owner, phone: e.target.value },
                })
              }
              required
            />
            <Input
              placeholder="البريد الإلكتروني"
              value={stepData.owner.email}
              onChange={(e) =>
                setStepData({
                  ...stepData,
                  owner: { ...stepData.owner, email: e.target.value },
                })
              }
              required
            />
            <Input
              placeholder="رقم الهوية"
              value={stepData.owner.id}
              onChange={(e) =>
                setStepData({
                  ...stepData,
                  owner: { ...stepData.owner, id: e.target.value },
                })
              }
              required
            />
          </div>
        </Step>

        {/* Step 5: Tenant info */}
        <Step>
          <h2>معلومات المستأجر</h2>
          <div className="flex flex-col gap-4 my-4">
            <Input
              placeholder="الاسم"
              value={stepData.tenant.name}
              onChange={(e) =>
                setStepData({
                  ...stepData,
                  tenant: { ...stepData.tenant, name: e.target.value },
                })
              }
              required
            />
            <Input
              placeholder="رقم الجوال"
              value={stepData.tenant.phone}
              onChange={(e) =>
                setStepData({
                  ...stepData,
                  tenant: { ...stepData.tenant, phone: e.target.value },
                })
              }
              required
            />
            <Input
              placeholder="البريد الإلكتروني"
              value={stepData.tenant.email}
              onChange={(e) =>
                setStepData({
                  ...stepData,
                  tenant: { ...stepData.tenant, email: e.target.value },
                })
              }
              required
            />
            <Input
              placeholder="رقم الهوية"
              value={stepData.tenant.id}
              onChange={(e) =>
                setStepData({
                  ...stepData,
                  tenant: { ...stepData.tenant, id: e.target.value },
                })
              }
              required
            />
          </div>
        </Step>

        {/* Step 6: Property info */}
        <Step>
          <h2>معلومات العقار</h2>
          <div className="flex flex-col gap-4 my-4">
            <Input
              placeholder="المدينة"
              value={stepData.property.city}
              onChange={(e) =>
                setStepData({
                  ...stepData,
                  property: { ...stepData.property, city: e.target.value },
                })
              }
              required
            />
            <Input
              placeholder="الموقع بالتحديد"
              value={stepData.property.location}
              onChange={(e) =>
                setStepData({
                  ...stepData,
                  property: { ...stepData.property, location: e.target.value },
                })
              }
              required
            />
            <Input
              placeholder="المساحة"
              value={stepData.property.area}
              onChange={(e) =>
                setStepData({
                  ...stepData,
                  property: { ...stepData.property, area: e.target.value },
                })
              }
              required
            />
            <Input
              placeholder="الطابق"
              value={stepData.property.floor}
              onChange={(e) =>
                setStepData({
                  ...stepData,
                  property: { ...stepData.property, floor: e.target.value },
                })
              }
              required
            />
            <Input
              placeholder="عدد الغرف"
              value={stepData.property.rooms}
              onChange={(e) =>
                setStepData({
                  ...stepData,
                  property: { ...stepData.property, rooms: e.target.value },
                })
              }
              required
            />
          </div>
        </Step>

        {/* Step 7: Review step */}
        <Step>
          <div className="flex items-center justify-center">
            <h2 className="text-lg font-bold">مراجعة البيانات</h2>
          </div>
          <div className="mt-4 space-y-2 p-4 bg-gray-100 rounded">
            <p>
              <strong>العميل:</strong>{" "}
              {stepData.userType === "owner" ? "مالك" : "مستأجر"}
            </p>
            <p>
              <strong>رقم الجوال:</strong> {stepData.phone}
            </p>
            <div className="w-full h-[0.2px] my-4 bg-black/25"></div>
            <h3 className="mt-2 font-bold">معلومات المالك</h3>
            <p>الاسم: {stepData.owner.name}</p>
            <p>رقم الجوال: {stepData.owner.phone}</p>
            <p>البريد الإلكتروني: {stepData.owner.email}</p>
            <p>رقم الهوية: {stepData.owner.id}</p>
            <div className="w-full h-[0.2px] my-4 bg-black/25"></div>
            <h3 className="mt-2 font-bold">معلومات المستأجر</h3>
            <p>الاسم: {stepData.tenant.name}</p>
            <p>رقم الجوال: {stepData.tenant.phone}</p>
            <p>البريد الإلكتروني: {stepData.tenant.email}</p>
            <p>رقم الهوية: {stepData.tenant.id}</p>
            <div className="w-full h-[0.2px] my-4 bg-black/25"></div>
            <h3 className="mt-2 font-bold">معلومات العقار</h3>
            <p>المدينة: {stepData.property.city}</p>
            <p>الموقع: {stepData.property.location}</p>
            <p>المساحة: {stepData.property.area}</p>
            <p>الطابق: {stepData.property.floor}</p>
            <p>عدد الغرف: {stepData.property.rooms}</p>
          </div>
          <div className="flex items-center justify-center mt-2">
            <p className="mt-2">
              اضغط إنهاء لتأكيد البيانات. شكراً لاستخدامك أكنان!
            </p>
          </div>
        </Step>
      </Stepper>
    </div>
  );
};

export default Form;
