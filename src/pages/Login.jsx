import React, { useState } from "react";
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight, 
  Building, 
  Globe, 
  Shield, 
  Home, 
  Key,
  Users,
  TrendingUp,
  Award
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle, FaLinkedin, FaApple } from "react-icons/fa";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [userType, setUserType] = useState("agent"); // For role-specific login flow

  const userTypes = [
    { value: "agent", label: "Agent", icon: "👔", desc: "Real Estate Agent" },
    { value: "broker", label: "Broker", icon: "🏢", desc: "Brokerage Owner" },
    { value: "investor", label: "Investor", icon: "👤", desc: "Property Investor" },
    { value: "developer", label: "Developer", icon: "🏗️", desc: "Property Developer" }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Validate inputs
    if (!email || !password) {
      setError("Please enter email and password");
      setIsLoading(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // For demo, navigate based on user type
      switch (userType) {
        case "agent":
          navigate("/agent-dashboard");
          break;
        case "broker":
          navigate("/broker-dashboard");
          break;
        case "investor":
          navigate("/investor-dashboard");
          break;
        case "developer":
          navigate("/developer-dashboard");
          break;
        default:
          navigate("/dashboard");
      }
    }, 1500);
  };

  const handleUserTypeChange = (type) => {
    setUserType(type);
  };

  const handleDemoLogin = (type) => {
    switch (type) {
      case "agent":
        setEmail("demo.agent@globalestates.com");
        setPassword("Demo@1234");
        break;
      case "broker":
        setEmail("demo.broker@globalestates.com");
        setPassword("Demo@1234");
        break;
      case "investor":
        setEmail("demo.investor@globalestates.com");
        setPassword("Demo@1234");
        break;
      case "developer":
        setEmail("demo.developer@globalestates.com");
        setPassword("Demo@1234");
        break;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-emerald-50 p-2 sm:p-4">
      <div className="flex flex-col lg:flex-row w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden h-[95vh] max-h-[900px]">
        {/* Left Side - Hero Section */}
        <div className="lg:w-2/5 relative bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-900 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80"
              alt="Luxury International Real Estate"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-emerald-900/70"></div>
          </div>
          
          <div className="relative z-20 p-4 sm:p-6 md:p-8 h-full flex flex-col justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2 mb-4 sm:mb-6">
              <div className="p-2 bg-white/10 backdrop-blur-sm rounded-xl">
                <Building className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-white">Global Estates</h1>
                <p className="text-blue-100 text-xs sm:text-sm">International Realty</p>
              </div>
            </div>

            {/* Welcome Message */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-3 sm:mb-4">
                Welcome Back<br />to Your Portfolio
              </h2>
              <p className="text-blue-100/90 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                Access your properties, analytics, and global network from one powerful platform.
              </p>

              {/* Features */}
              <div className="space-y-3 sm:space-y-4">
                {[
                  { icon: <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5" />, text: "Real-time market analytics" },
                  { icon: <Globe className="h-4 w-4 sm:h-5 sm:w-5" />, text: "Global property portfolio" },
                  { icon: <Users className="h-4 w-4 sm:h-5 sm:w-5" />, text: "10,000+ professional network" },
                  { icon: <Shield className="h-4 w-4 sm:h-5 sm:w-5" />, text: "Bank-level security & encryption" }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 sm:space-x-3">
                    <div className="p-1.5 sm:p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    <span className="text-white/90 text-sm font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="border-t border-white/20 pt-4">
              <div className="grid grid-cols-4 gap-2">
                <div className="text-center">
                  <div className="text-lg sm:text-xl font-bold text-white">50+</div>
                  <div className="text-blue-100/80 text-xs">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-lg sm:text-xl font-bold text-white">500K+</div>
                  <div className="text-blue-100/80 text-xs">Listings</div>
                </div>
                <div className="text-center">
                  <div className="text-lg sm:text-xl font-bold text-white">$10B+</div>
                  <div className="text-blue-100/80 text-xs">Transactions</div>
                </div>
                <div className="text-center">
                  <div className="text-lg sm:text-xl font-bold text-white">24/7</div>
                  <div className="text-blue-100/80 text-xs">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="lg:w-3/5 p-4 sm:p-6 md:p-8 lg:p-10 overflow-y-auto">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-4 sm:mb-6">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                Welcome Back
              </h1>
              <p className="text-gray-600 text-sm sm:text-base">
                Sign in to your professional dashboard
              </p>
            </div>

            {/* Quick Role Selector */}
            <div className="mb-6 bg-blue-50 rounded-xl p-3 sm:p-4">
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs sm:text-sm font-semibold text-gray-700">
                  I am logging in as:
                </label>
                <button
                  onClick={() => handleDemoLogin(userType)}
                  className="text-xs font-medium text-blue-600 hover:text-blue-700"
                >
                  Demo {userType}
                </button>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {userTypes.map((type) => (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() => handleUserTypeChange(type.value)}
                    className={`p-2 rounded-lg border transition-all duration-200 ${
                      userType === type.value
                        ? 'border-blue-600 bg-white shadow-sm'
                        : 'border-gray-200 hover:border-blue-400 hover:bg-white/50'
                    }`}
                  >
                    <div className="text-lg mb-0.5">{type.icon}</div>
                    <div className="text-xs font-semibold text-gray-800">{type.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Form Container */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-100 shadow-md">
              {error && (
                <div className="mb-4 bg-red-50 border border-red-100 rounded-lg p-3">
                  <p className="text-red-700 text-sm font-medium flex items-center">
                    <svg className="w-3 h-3 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {error}
                  </p>
                </div>
              )}

              <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                {/* Email Field */}
                <div className="space-y-1.5">
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700">
                    Professional Email
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <Mail className="h-4 w-4" />
                    </span>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-200 outline-none"
                      placeholder={
                        userType === "agent" ? "agent@globalestates.com" :
                        userType === "broker" ? "broker@globalestates.com" :
                        userType === "investor" ? "investor@globalestates.com" :
                        "developer@globalestates.com"
                      }
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700">
                      Password
                    </label>
                    <Link
                      to="/forgot-password"
                      className="text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <Lock className="h-4 w-4" />
                    </span>
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-9 pr-9 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-200 outline-none"
                      placeholder="Enter your secure password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember Me & Security Options */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-3 sm:space-y-0">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all duration-200 ${rememberMe ? 'bg-blue-600 border-blue-600' : 'border-gray-300'}`}>
                        {rememberMe && (
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="text-sm text-gray-700 font-medium">Remember this device</span>
                  </label>
                  
                  <Link
                    to="/two-factor"
                    className="flex items-center text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <Key className="h-3 w-3 mr-1" />
                    Enable 2FA
                  </Link>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-2.5 px-4 rounded-lg font-semibold text-sm text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] ${
                    isLoading
                      ? 'bg-blue-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 shadow hover:shadow-md'
                  }`}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Authenticating...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      Access {userType.charAt(0).toUpperCase() + userType.slice(1)} Dashboard
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </div>
                  )}
                </button>


              </form>

              {/* Divider */}
              <div className="my-4 sm:my-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="px-2 bg-white text-gray-500 text-xs font-medium">
                      Or continue with
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Logins */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                <button
                  type="button"
                  className="flex items-center justify-center py-2 border border-gray-200 rounded-lg hover:bg-red-50 hover:border-red-100 text-red-600 transition-all duration-200 hover:shadow-sm"
                >
                  <FaGoogle className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center py-2 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-100 text-blue-700 transition-all duration-200 hover:shadow-sm"
                >
                  <FaLinkedin className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center py-2 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 text-gray-800 transition-all duration-200 hover:shadow-sm"
                >
                  <FaApple className="h-4 w-4" />
                </button>
              </div>

              {/* Register Link */}
              <div className="mt-6 text-center">
                <p className="text-xs text-gray-600">
                  New to Global Estates?{" "}
                  <Link
                    to="/register"
                    className="font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    Create professional account
                  </Link>
                </p>
              </div>


            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;