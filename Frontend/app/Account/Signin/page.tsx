"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Signin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

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

      const data = await res.json();
      const token = data.tokens?.accessToken
      if (res.ok) {
        console.log('Received data:', data);
        console.log('Token:', token);
        localStorage.setItem('token', token);
        console.log('Login successful!');
        router.push("/UserDashboard"); 
        
      } else {
        console.error("Signin failed");
      }
    }
    catch (error) {
      console.error("Error during signin:", error);
    }
  }

  return(
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
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
            className="w-full bg-gradient-to-r from-green-700 to-lime-400 cursor-pointer text-white p-3 rounded hover:bg-green-600 transition"
          >
            Sign In
          </button>
          <Link href="/Account/SignUp" className="text-sm text-gray-700 hover:underline mt-4 block text-center">Don't have an account? Sign Up</Link>
        </form>
      </div>
    </>
  )
}