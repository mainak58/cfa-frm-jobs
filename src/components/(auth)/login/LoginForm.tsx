"use client";

import { useState, useTransition } from "react";
import { loginAction, LoginResponse } from "./action";

export default function LoginForm() {
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      const res: LoginResponse = await loginAction(formData);
      setMessage(res.message);
      setSuccess(res.success);
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 max-w-sm mx-auto mt-10"
    >
      <input
        name="emailOrPhone"
        placeholder="Email or Phone"
        className="border border-black p-2 rounded"
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        className="border border-black p-2 rounded"
      />
      <button
        type="submit"
        disabled={isPending}
        className={`p-2 rounded text-white ${
          isPending ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {isPending ? "Submitting..." : "Login"}
      </button>

      {message && (
        <p className={success ? "text-green-600" : "text-red-600"}>{message}</p>
      )}
    </form>
  );
}
