"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const SetPin: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const [pin, setPin] = useState(["", "", "", ""]);

  const handleChange = (value: string, index: number) => {
    if (/^[0-9]?$/.test(value)) {
      const newPin = [...pin];
      newPin[index] = value;
      setPin(newPin);
      if (value && index < 3) document.getElementById(`pin-${index + 1}`)?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const transactionPin = pin.join("");

    if (transactionPin.length < 4) {
      alert("Please enter a 4-digit PIN");
      return;
    }

    const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

    try {
      const res = await fetch(`${API_URL}/auth/setPin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, transactionPin }),
      });

      if (res.ok) {
        router.push("/Account/Signin");
      } else {
        console.error("Failed to set PIN");
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-md p-8 w-full max-w-sm text-center"
      >
        <h2 className="text-lg font-semibold text-gray-900 mb-2">SET PIN</h2>
        <p className="text-sm text-gray-600 mb-8">
          Kindly enter the 4-digit PIN to transact on our platform.
        </p>

        <div className="flex justify-center gap-3 mb-8">
          {pin.map((digit, i) => (
            <input
              key={i}
              id={`pin-${i}`}
              type="password"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e.target.value, i)}
              className="w-10 h-10 text-center text-lg font-semibold border-b-2 border-gray-300 focus:border-green-500 outline-none"
            />
          ))}
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-gradient-to-r from-green-700 to-lime-400 text-white rounded-lg font-medium hover:opacity-90 transition"
        >
          Proceed
        </button>
      </form>
    </div>
  );
};

export default SetPin;
