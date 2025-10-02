"use client"

// components/AuthForm.tsx
import { useState } from "react";
import Link from "next/link";

interface AuthFormProps {
  type: "login" | "signup";
  onSubmit: (email: string, password: string) => void;
}

const AuthForm = ({ type, onSubmit }: AuthFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          {type === "login" ? "Login" : "Sign Up"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-medium text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            {type === "login" ? "Login" : "Sign Up"}
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          {type === "login" ? (
            <>
              Don&apos;t have an account?{" "}
              <Link href="/Account/SignUp" className="text-blue-600 hover:underline">
                Sign Up
              </Link>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <Link href="/Account/login" className="text-blue-600 hover:underline">
                Login
              </Link>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
