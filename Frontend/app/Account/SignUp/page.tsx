"use client"

import axios from "axios";
import AuthForm from "components/AuthForm";

const SignupPage = () => {
  const handleSignup = async (email: string, password: string) => {
    // Add actual signup logic here (e.g., API call)
    try {
        const response = await axios.post('http://localhost:5000/auth/signup', {
            email,
            password
        })
        console.log("signup sucessfully", response.data)
    } catch (error: any) {
        console.error("signup error", error.response)
    }
    console.log("Sign Up:", { email, password });
  };

  return <AuthForm type="signup" onSubmit={handleSignup} />;
};

export default SignupPage;
