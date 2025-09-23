"use server";

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

  const email = formData.get("email")?.toString() || "";
  const password = formData.get("password")?.toString() || "";
  const reEnterPassword = formData.get("reEnterPassword")?.toString() || "";

  if (password !== reEnterPassword)
    return { success: false, message: "Passwords do not match." };

  const res = await fetch("/api/register", {
    method: "POST",
    body: JSON.stringify({
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      phoneNumber: formData.get("phoneNumber"),
      email,
      password,
    }),
    headers: { "Content-Type": "application/json" },
  });

  const data = await res.json();
  return { success: data.success, message: data.message };
}
