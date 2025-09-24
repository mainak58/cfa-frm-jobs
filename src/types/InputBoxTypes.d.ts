import { ReactNode } from "react";

export type InputBoxTypes = {
  name: string;
  type: string;
  value: string;
  required: boolean;
  label: LabelInputBox;
  disabled: boolean;
  handleChange: () => void;
  handleFocus: () => void;
  section: string;
  handleBlur: () => void;
  showPassword: boolean;
  maxLength: number;
  submitClicked: () => void;
};

export type LabelInputBoxTypes = {
  icon: ReactNode;
  text: string;
};
