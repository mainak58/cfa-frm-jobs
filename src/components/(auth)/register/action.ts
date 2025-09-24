"use server";
// "use client";

import { formValidation } from "@/validations/formValidation";

export type RegisterResponse = {
  success: boolean;
  message: string;
};

export async function registerAction(
  formData: FormData
): Promise<RegisterResponse> {
  const required: string[] = [
    "firstName",
    "lastName",
    "phoneNumber",
    "email",
    "password",
    "reEnterPassword",
    "whatsappNumber",
  ];
  const errors = formValidation(formData, required);

  if (errors.length > 0) return { success: false, message: errors.join(" ") };

  const firstName = formData.get("firstName")?.toString() || "";
  const lastName = formData.get("lastName")?.toString() || "";
  const phoneNumber = formData.get("phoneNumber")?.toString() || "";
  const countryCode = formData.get("countryCode")?.toString() || "";
  const email = formData.get("email")?.toString() || "";
  const password = formData.get("password")?.toString() || "";
  const reEnterPassword = formData.get("reEnterPassword")?.toString() || "";

  let whatsappNumber = formData.get("whatsappNumber")?.toString() || "";
  let whatsappCountryCode =
    formData.get("whatsappCountryCode")?.toString() || "";

  if (!whatsappNumber) whatsappNumber = phoneNumber;
  if (!whatsappCountryCode) whatsappCountryCode = countryCode;

  if (password !== reEnterPassword)
    return { success: false, message: "Passwords do not match." };

  console.log("firstName", firstName);
  console.log("lastName", lastName);
  console.log("countryCode", countryCode);
  console.log("phoneNumber", phoneNumber);
  console.log("email", email);
  console.log("password", password);
  console.log("reEnterPassword", reEnterPassword);
  console.log("whatsappNumber", whatsappNumber);
  console.log("whatsappCountryCode", whatsappCountryCode);

  return { success: true, message: "success" };
}
