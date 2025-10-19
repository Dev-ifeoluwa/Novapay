"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignUpPage() {
  const router = useRouter();
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, lastName, email, password }),
      })
      if (res.ok) {
        router.push("/Account/Signin");
      } else {
        console.error("Registration failed");
      }
    }
    catch (error) {
      console.error("Error during registration:", error);
    }
  }
  return(
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
          <input 
            value={firstName} 
            onChange={e => setFirstName(e.target.value)}
            placeholder="firstName" 
            className="w-full p-3 mb-4 border border-gray-300 rounded"
          />
          <input 
            value={lastName} 
            onChange={e => setLastName(e.target.value)}
            placeholder="lastName" 
            className="w-full p-3 mb-4 border border-gray-300 rounded"
          />
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
            className="w-full bg-gradient-to-r from-green-700 to-lime-400 text-white p-3 rounded cursor-pointer hover:bg-green-600 transition"
            >Signup</button>
          <Link href="/Account/Signin" className="text-sm text-gray-700 hover:underline mt-4 block text-center">Already have an account? Login</Link>
        </form>
      </div>
    </>
  )
}