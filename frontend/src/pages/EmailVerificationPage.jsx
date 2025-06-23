import { useEffect, useRef, useState } from "react";
import { useAuthStore } from "../store/authStore";
import toast from "react-hot-toast";

const EmailVerificationPage = ({ onSuccess, onSwitchToLogin }) => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const { error, isLoading, verifyEmail } = useAuthStore();

  const handleChange = (index, value) => {
    const newCode = [...code];
    if (value.length > 1) {
      const pastedCode = value.slice(0, 6).split("");
      for (let i = 0; i < 6; i++) {
        newCode[i] = pastedCode[i] || "";
      }
      setCode(newCode);
      const lastFilledIndex = newCode.findLastIndex((digit) => digit !== "");
      const focusIndex = lastFilledIndex < 5 ? lastFilledIndex + 1 : 5;
      inputRefs.current[focusIndex].focus();
    } else {
      newCode[index] = value;
      setCode(newCode);
      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const verificationCode = code.join("");
    try {
      const success = await verifyEmail(verificationCode);
      if (success && onSuccess) {
        toast.success("Email verified successfully");
        onSuccess();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (code.every((digit) => digit !== "")) {
      handleSubmit(new Event("submit"));
    }
  }, [code]);

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Verify Your Email</h2>
      <p className="text-center text-gray-600 mb-6">Enter the 6-digit code sent to your email address.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex justify-between">
          {code.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-10 h-10 text-center text-xl font-bold border rounded focus:ring-2 focus:ring-green-500"
            />
          ))}
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          disabled={isLoading || code.some((digit) => !digit)}
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 disabled:bg-gray-400"
        >
          {isLoading ? "Verifying..." : "Verify Email"}
        </button>
      </form>
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          Back to{" "}
          <button
            onClick={onSwitchToLogin}
            className="text-blue-500 hover:underline"
          >
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
};

export default EmailVerificationPage;