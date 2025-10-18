"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http:localhost:500";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
      if (res.ok) {
        router.push("/UserDashboard"); 
        
      } else {
        console.error("Login failed");
      }
    }
    catch (error) {
      console.error("Error during login:", error);
    }
  }

  return(
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <input 
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-3 mb-4 border border-gray-300 rounded"
          />
          <input 
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-3 mb-4 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="w-full bg-green-700 cursor-pointer text-white p-3 rounded hover:bg-green-600 transition"
          >
            Login
          </button>
        </form>
        <Link href="/Account/SignUp" className="text-sm text-green-500 hover:underline mt-4 absolute bottom-5">Don't have an account? Sign Up</Link>
      </div>
    </>
  )
}