// "use client";

// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useState } from "react";

// export default function Signin() {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const res = await fetch(`${API_URL}/auth/login`, {
//         method: "POST",
//         credentials: "include",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       })

//       const data = await res.json();
//       const token = data.tokens?.accessToken
//       if (res.ok) {
//         console.log('Received data:', data);
//         console.log('Token:', token);
//         localStorage.setItem('token', token);
//         console.log('Login successful!');
//         router.push("/UserDashboard"); 
        
//       } else {
//         console.error("Signin failed");
//       }
//     }
//     catch (error) {
//       console.error("Error during signin:", error);
//     }
//   }

//   return(
//     <>
//       <div className="min-h-screen flex items-center justify-center bg-gray-100">
//         <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
//           <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
//           <input 
//             value={email}
//             onChange={e => setEmail(e.target.value)}
//             placeholder="Email"
//             className="w-full p-3 mb-4 border border-gray-300 rounded"
//           />
//           <input 
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//             placeholder="Password"
//             className="w-full p-3 mb-4 border border-gray-300 rounded"
//           />
//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-green-700 to-lime-400 cursor-pointer text-white p-3 rounded hover:bg-green-600 transition"
//           >
//             Sign In
//           </button>
//           <Link href="/Account/SignUp" className="text-sm text-gray-700 hover:underline mt-4 block text-center">Don't have an account? Sign Up</Link>
//         </form>
//       </div>
//     </>
//   )
// }




"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Signin = () => {
  const router = useRouter();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);


  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_URL}/auth/login`, {
      // const res = await fetch('http://localhost:5000/auth/login', {
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
      console.error("Error during Login:", error);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-2xl shadow-md p-8 w-full max-w-md">
        {/* Header */}
        <div className="flex flex-col items-center mb-4">
          <div>
            <Image src="/signicon.png" alt="Logo" width={72} height={72} />
          </div>
          <h2 className="text-lg font-semibold mt-3 text-gray-800">
            ACCOUNT SIGNIN
          </h2>
        </div>

        {/* Form */}
        <form className="space-y-10" onSubmit={handleSubmit}>
          {/* Email */}
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email Address"
            className="w-full border-b-2 border-gray-200 focus:border-green-950 outline-none py-1"
          />

          {/* Mobile & Password */}
          <div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password} 
                onChange={e => setPassword(e.target.value)}
                placeholder="Create Password"
                className="w-full border-b-2 border-gray-200 focus:border-green-950 outline-none py-1 pr-8"
              />

              {/* Toggle Icon */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  // Eye open
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-.712 2.257-2.3 4.152-4.323 5.322M15 15a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                ) : (
                  // Eye closed
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3l18 18M4.5 4.5a9.473 9.473 0 0113.5 0M3 12a9 9 0 0118 0"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full cursor-pointer bg-gradient-to-r from-green-700 to-lime-400 text-white py-2 rounded-lg font-semibold hover:bg-gray-900 transition"
          >
            Login
          </button>
          <Link href="/Account/SignUp" className="text-sm text-gray-700 hover:underline -mt-6 block text-center">Don't have an account? Sign Up</Link>
        </form>
      </div>
    </div>
  );
};

export default Signin;
