import { useState, memo } from "react";
import { Mail, Loader } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { useAuthStore } from "../store/authStore";

const ForgotPasswordPage = ({ onSwitchToLogin }) => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { isLoading, forgotPassword, error } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Client-side validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Invalid email format");
      return;
    }
    try {
      await forgotPassword(email);
      setIsSubmitted(true);
    } catch (err) {
      console.error("Forgot password error:", err);
    }
  };

  const handleBackToLogin = () => {
    if (onSwitchToLogin) {
      onSwitchToLogin();
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Forgot Password</h2>

      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <p className="text-gray-600 mb-6 text-center">
            Enter your email address and we'll send you a link to reset your password.
          </p>
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
          {error && (
            <p id="email-error" className="text-red-500 text-sm">
              {error}
            </p>
          )}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 disabled:bg-gray-400"
            disabled={isLoading}
          >
            {isLoading ? <Loader className="w-6 h-6 animate-spin mx-auto" /> : "Send Reset Link"}
          </button>
        </form>
      ) : (
        <div className="text-center">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="h-6 w-6 text-white" />
          </div>
          <p className="text-gray-600 mb-6">
            If an account exists for {email}, you will receive a password reset link shortly.
          </p>
        </div>
      )}

      <div className="mt-4 text-center">
        <Link
          to="/login"
          onClick={handleBackToLogin}
          className="text-sm text-blue-500 hover:underline"
        >
          Back to Sign in
        </Link>
      </div>
    </div>
  );
};

export default memo(ForgotPasswordPage);