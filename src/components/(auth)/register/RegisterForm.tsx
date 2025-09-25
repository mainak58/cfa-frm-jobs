"use client";
import React, { useState, useTransition } from "react";
import { registerAction, RegisterResponse } from "./action";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { countries } from "../../../../country";
import PhoneInput from "@/components/PhoneInput";

export type showPasswordType = {
  showPassword: boolean;
  showReenteredPassword: boolean;
};

function RegisterForm() {
  const dispatch = useDispatch();
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean | null>(null);
  const [verifyOtp, setVerifyOtp] = useState<boolean>(false);
  const [isWhatsAppDifferent, setIsWhatsAppDifferent] =
    useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<showPasswordType>({
    showPassword: false,
    showReenteredPassword: false,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      const res: RegisterResponse = await registerAction(formData);
      setMessage(res.message || "");
      setSuccess(res.success);
      setVerifyOtp(res.otpVerify || false);
    });
  };

  const toggleShowPassword = (field: keyof showPasswordType) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  return (
    <div className="max-w-md mx-auto p-6 rounded-xl shadow-md bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* First Name */}
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          className="w-full p-2 border rounded"
        />

        <PhoneInput countries={countries} name="phoneNumber" />
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="isWhatsAppDifferent"
            checked={isWhatsAppDifferent}
            onChange={() => setIsWhatsAppDifferent((prev) => !prev)}
          />
          <label htmlFor="isWhatsAppDifferent">
            WhatsApp Number is different from Mobile
          </label>
        </div>

        {isWhatsAppDifferent && (
          <PhoneInput countries={countries} name="whatsappNumber" />
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
        />

        <div className="relative">
          <input
            type={showPassword.showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="w-full p-2 border rounded pr-10"
            required
          />
          <button
            type="button"
            onClick={() => toggleShowPassword("showPassword")}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600"
          >
            {showPassword.showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <div className="relative">
          <input
            type={showPassword.showReenteredPassword ? "text" : "password"}
            name="reEnterPassword"
            placeholder="Re-enter Password"
            className="w-full p-2 border rounded pr-10"
            required
          />
          <button
            type="button"
            onClick={() => toggleShowPassword("showReenteredPassword")}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600"
          >
            {showPassword.showReenteredPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <div className="flex gap-5">
          <div className="flex gap-2">
            <label htmlFor="verifyByPhone">Phone</label>
            <input
              type="radio"
              name="verifyOption"
              id="verifyByPhone"
              value="phone"
              defaultChecked
            />
          </div>
          <div className="flex gap-2">
            <label htmlFor="verifyByEmail">Email</label>
            <input
              type="radio"
              name="verifyOption"
              id="verifyByEmail"
              value="email"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {isPending ? "Registering..." : "Register"}
        </button>
      </form>

      {message && (
        <p
          className={`mt-4 text-center ${
            success ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}

export default RegisterForm;
