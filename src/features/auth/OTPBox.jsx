import { useState } from "react";
import OtpInput from "react-otp-input";

export default function OTPBox() {
  const [otp, setOtp] = useState("");
  console.log(otp);
  return (
    <div className="w-full h-full">
      <OtpInput
        containerStyle="justify-center flex gap-5"
        inputStyle="otpInputStyle min-w-10 min-h-10 border-2 border-slate-400"
        value={otp}
        onChange={setOtp}
        numInputs={4}
        renderSeparator={<span>--</span>}
        renderInput={(props) => <input {...props} />}
        shouldAutoFocus
        onPaste={false}
      />
    </div>
  );
}
