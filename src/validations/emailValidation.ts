export default function emailValidation(data: string): boolean {
  const regexForEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regexForEmail.test(data);
}
