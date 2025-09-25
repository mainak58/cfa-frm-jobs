import emailValidation from "@/validations/emailValidation";
import phoneValidation from "@/validations/phoneValidation";

export function formValidation(
  formData: FormData,
  requiredFields: string[] = []
): string[] {
  const messages: string[] = [];

  const email = formData.get("email")?.toString().trim() || "";
  const phoneNumber = formData.get("phoneNumber")?.toString().trim() || "";
  const whatsappNumber =
    formData.get("whatsappNumber")?.toString().trim() || "";
  const verifyOption = formData.get("verifyOption")?.toString().trim() || "";

  for (const field of requiredFields) {
    const value = formData.get(field)?.toString().trim() || "";
    if (!value) {
      messages.push(`${field} is required.`);
    }
  }

  if (!email) messages.push("Email is required.");
  if (!phoneNumber) messages.push("Phone number is required.");

  if (email && !emailValidation(email)) {
    messages.push("Please provide a valid email.");
  }

  if (phoneNumber && !phoneValidation(phoneNumber)) {
    messages.push("Please provide a valid phone number.");
  }

  if (whatsappNumber && !phoneValidation(whatsappNumber)) {
    messages.push("Please provide a valid WhatsApp number.");
  }

  if (verifyOption === "email" && !email) {
    messages.push(
      "You selected email verification, but no email was provided."
    );
  }
  if (verifyOption === "phone" && !phoneNumber) {
    messages.push(
      "You selected phone verification, but no phone number was provided."
    );
  }

  return messages;
}
