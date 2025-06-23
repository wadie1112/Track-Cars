import { useState, memo } from "react";
import { Mail, Lock, Loader } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { useAuthStore } from "../store/authStore";

const LoginPage = ({ onSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, error, isAuthenticated } = useAuthStore();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // Client-side validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Invalid email format");
      return;
    }
    if (password.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }
    try {
      const success = await login(email, password);
      if (success) {
        if (isAuthenticated) {
          if (onSuccess) {
            onSuccess();
          } else {
            navigate("/dashboard"); // Navigate only if authenticated
          }
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign in</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <Input
            icon={Mail}
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-required="true"
            aria-describedby="email-error"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <Input
            icon={Lock}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-required="true"
            aria-describedby="password-error"
          />
        </div>
        {error && (
          <p id="error" className="text-red-500 text-sm">
            {error}
          </p>
        )}
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 disabled:bg-gray-400"
          disabled={isLoading}
        >
          {isLoading ? <Loader className="w-6 h-6 animate-spin mx-auto" /> : "Sign in"}
        </button>
        <div className="text-center">
          <Link to="/forgot-password" className="text-sm text-blue-500 hover:underline">
            Forgot password?
          </Link>
        </div>
      </form>
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default memo(LoginPage);