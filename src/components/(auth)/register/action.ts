"use client";

import { nextAppInstance } from "@/utils/axiosInstances";
import { formValidation } from "@/validations/formValidation";

export type RegisterResponse = {
  success: boolean;
  message?: string;
  otpVerify?: boolean;
  data?: any;
};

export async function registerAction(
  formData: FormData
): Promise<RegisterResponse> {
  const firstName = formData.get("firstName")?.toString() || "";
  const lastName = formData.get("lastName")?.toString() || "";
  const phoneNumber = formData.get("phoneNumber")?.toString() || "";
  const countryCode = formData.get("countryCode")?.toString() || "";
  const email = formData.get("email")?.toString() || "";
  const password = formData.get("password")?.toString() || "";
  const reEnterPassword = formData.get("reEnterPassword")?.toString() || "";
  const verifyOption = formData.get("verifyOption")?.toString() || "";
  let whatsappNumber = formData.get("whatsappNumber")?.toString() || "";
  let otp = formData.get("otp")?.toString() || "";
  let whatsappCountryCode =
    formData.get("whatsappCountryCode")?.toString() || "";

  if (!whatsappNumber) whatsappNumber = phoneNumber;
  if (!whatsappCountryCode) whatsappCountryCode = countryCode;

  const required: string[] = [
    "firstName",
    "lastName",
    "password",
    "reEnterPassword",
  ];
  const errors = formValidation(formData, required);
  if (errors.length > 0) return { success: false, message: errors.join(" ") };

  if (password !== reEnterPassword)
    return { success: false, message: "Passwords do not match." };

  const data = {
    fname: firstName,
    lname: lastName,
    password,
    email,
    countryCode,
    phone: phoneNumber,
    whatsappCountryCode,
    whatsappNumber,
    verificationMode: verifyOption,
    redirectUrl: "/",
  };

  try {
    const res = await nextAppInstance.post("/auth/register", data);
    console.log(res.data.user);
    console.log(res.data.otp);
    console.log(res.data.resend_token);

    if (res.status === 200) {
      const data = {
        token: res.data.resend_token,
        otp,
      };

      const otpVerify = await nextAppInstance.post("/auth/verifytoken", data);

      if (otpVerify.status === 200) {
        return {
          success: true,
          data: res.data,
          message: "Registration successful",
          otpVerify: true,
        };
      } else {
        return {
          success: false,
          data: res.data,
          message: "Registration Unsuccessful",
          otpVerify: false,
        };
      }
    }
    return {
      success: true,
      data: res.data,
      message: "Registration successful",
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.response?.data?.message || "Registration failed",
    };
  }
}
