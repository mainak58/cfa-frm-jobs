"use client";
import React, { useState } from "react";
import { useFormStatus } from "react-dom";

function LoginForm() {
  const { pending, data, method, action } = useFormStatus();
  const formSubmit = () => {
    const emailOrPhone = data.get("emailOrPhone");
    const password = data.get("password");

    console.log("password: ", password);
    console.log("emailOrPhone: ", emailOrPhone);
  };

  return (
    <>
      <form action={formSubmit}>
        <input name="emailOrPhone" className="border border-black" />
        <input name="password" className="border border-black" />
        <button type="submit" disabled={pending}>
          {pending ? "Submitting..." : "Submit"}
        </button>
      </form>
    </>
  );
}

export default LoginForm;
