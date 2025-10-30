"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";


export default function AdminSignInPage() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);


    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

    const handleAdminSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch(`${API_URL}/admin-auth/Admin-login`, {
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
                localStorage.setItem('token', token);
                toast.success("Admin Login successfully!")
                console.log('Login successful!');
                router.push("/Admin");

            } else {
                // console.error("Login failed");
                console.error("Signin failed");
            }
        }
        catch (error) {
            toast.error("Something went wrong. Please try again later.");
            console.error("Error during Login:", error);
        }
    }

    return (
        <div className="flex flex-col bg-gray-100">
            <div className="flex flex-col items-center justify-center min-h-screen">
                <div className="flex items-center gap-4 px-auto mx-auto pb-6 ">
                    <Image
                        src="/favicon.ico"
                        alt="Logo"
                        width={40}
                        height={40}
                        className="rounded-full bg-green-950"
                    />
                    <h2 className="text-2xl font-bold">Shalompay</h2>
                </div>
                <div className="bg-white rounded-2xl shadow-md p-8 w-full max-w-md">
                    {/* Header */}
                    <div className="flex flex-col items-center mb-4">
                        {/* <div>
                      <Image src="/favicon.ico" alt="Logo" width={72} height={72} />
                    </div> */}
                        <h2 className="text-lg font-semibold mt-3 text-gray-800">
                            Admin Login
                        </h2>
                    </div>

                    {/* Form */}
                    <form className="space-y-10" onSubmit={handleAdminSubmit}>
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
                                    placeholder="Enter Password"
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
                            className="w-full cursor-pointer bg-linear-to-r from-green-700 to-lime-400 text-white py-2 rounded-lg font-semibold hover:bg-gray-900 transition"
                        >
                            Login
                        </button>
                        {/* <Link href="/Account/SignUp" className="text-sm text-gray-700 hover:underline -mt-6 block text-center">New to Shalompay? <strong className="text-green-700">Sign Up</strong></Link> */}
                    </form>
                </div>
                <Toaster position="top-center" reverseOrder={false} />
            </div>
        </div>
    )
}