"use client"
import AuthForm from "components/AuthForm";

const LoginPage = () => {
  const handleLogin = (email: string, password: string) => {
    // Add actual login logic here (e.g., API call)
    console.log("Login:", { email, password });
  };

  return <AuthForm type="login" onSubmit={handleLogin} />;
};

export default LoginPage;
