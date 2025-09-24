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

  for (const field of requiredFields) {
    const value = formData.get(field)?.toString().trim() || "";
    if (!value) {
      messages.push(`${field} is required.`);
    }
  }

  if (email && !emailValidation(email)) {
    messages.push("Please provide a valid email.");
  }

  // Phone validation
  if (phoneNumber && !phoneValidation(phoneNumber)) {
    messages.push("Please provide a valid phone number.");
  }

  if (whatsappNumber && !phoneValidation(whatsappNumber)) {
    messages.push("Please provide a valid whatsappNumber.");
  }

  return messages;
}
