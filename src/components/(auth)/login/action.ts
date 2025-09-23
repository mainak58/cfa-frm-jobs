"use server";

import emailValidation from "@/validations/emailValidation";

export type LoginResponse = {
  success: boolean;
  message: string;
};

export async function loginAction(formData: FormData): Promise<LoginResponse> {
  const emailOrPhone = formData.get("emailOrPhone")?.toString() || "";
  const password = formData.get("password")?.toString() || "";

  console.log("emailOrPhone:", emailOrPhone);
  console.log("password:", password);

  if (!emailOrPhone || !password) {
    return { success: false, message: "Please fill all fields." };
  }

  if (emailValidation(emailOrPhone) && password === "1234") {
    return { success: true, message: "Login successful!" };
  } else {
    return { success: false, message: "Invalid credentials." };
  }
}
