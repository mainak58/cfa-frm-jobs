export default function phoneValidation(data: string): boolean {
  const regexForPhone = /^[0-9]{10}$/;
  return regexForPhone.test(data);
}
