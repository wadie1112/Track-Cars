import { useState, memo } from "react";
import { Mail, Lock, Loader, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import PasswordStrengthMeter from "../components/PasswordStrengthMeter";
import { useAuthStore } from "../store/authStore";

const SignUpPage = ({ onSuccess }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, isLoading, error } = useAuthStore();
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
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
    if (name.length < 2) {
      alert("Name must be at least 2 characters");
      return;
    }
    try {
      await signup(email, password, name);
      if (onSuccess) {
        onSuccess();
      } else {
        navigate("/verify-email");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign up</h2>
      <form onSubmit={handleSignUp} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <Input
            icon={User}
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-required="true"
            aria-describedby="name-error"
          />
        </div>
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
          <PasswordStrengthMeter password={password} />
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
          {isLoading ? <Loader className="w-6 h-6 animate-spin mx-auto" /> : "Sign up"}
        </button>
      </form>
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default memo(SignUpPage);