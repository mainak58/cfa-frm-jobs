// "use server";
"use client";

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
    "phoneNumber",
    "email",
    "password",
    "reEnterPassword",
  ];
  const errors = formValidation(formData, required);

  if (errors.length > 0) return { success: false, message: errors.join(" ") };

  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const phoneNumber = formData.get("phoneNumber");
  const email = formData.get("email")?.toString() || "";
  const password = formData.get("password")?.toString() || "";
  const reEnterPassword = formData.get("reEnterPassword")?.toString() || "";

  if (password !== reEnterPassword)
    return { success: false, message: "Passwords do not match." };

  console.log("firstName", firstName);
  console.log("lastName", lastName);
  console.log("phoneNumber", phoneNumber);
  console.log("email", email);
  console.log("password", password);
  console.log("reEnterPassword", reEnterPassword);

  // const res = await fetch("/api/register", {
  //   method: "POST",
  //   body: JSON.stringify({
  //     firstName,
  //     lastName,
  //     phoneNumber,
  //     email,
  //     password,
  //   }),
  //   headers: { "Content-Type": "application/json" },
  // });

  // const data = await res.json();
  // return { success: data.success, message: data.message };
  return { success: true, message: "success" };
}
