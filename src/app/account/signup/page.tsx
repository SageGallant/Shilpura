"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function SignUpPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [signupError, setSignupError] = useState("");
  const [signupSuccess, setSignupSuccess] = useState(false);

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreeTerms: "",
    };

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
      valid = false;
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
      valid = false;
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password =
        "Password must contain at least one uppercase letter, one lowercase letter, and one number";
      valid = false;
    }

    // Confirm Password validation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      valid = false;
    }

    // Terms agreement validation
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = "You must agree to the terms and conditions";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    // Clear error on input change
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }

    // Clear signup error on any input change
    if (signupError) {
      setSignupError("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setSignupError("");

    try {
      // Simulate API call with a delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // For demo purposes, we'll consider email "taken@example.com" to be already registered
      // In a real app, this would be an API call to your auth service
      if (formData.email === "taken@example.com") {
        setSignupError(
          "This email is already registered. Please use a different email or sign in."
        );
      } else {
        // Save user info to localStorage (demo only - use a proper auth system in production)
        localStorage.setItem(
          "user",
          JSON.stringify({
            name: formData.fullName,
            email: formData.email,
            isLoggedIn: true,
          })
        );

        // Show success message
        setSignupSuccess(true);

        // Redirect to profile page after short delay
        setTimeout(() => {
          router.push("/account/profile");
        }, 2000);
      }
    } catch (error) {
      setSignupError("An error occurred during sign up. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-islandSpice/10 py-16">
      <div className="container-custom">
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-sm p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-playfair text-bordeaux mb-2">
              Create Your Account
            </h1>
            <p className="text-osloGray">
              Join Shilpura to discover unique artisan crafts
            </p>
          </div>

          {signupError && (
            <div className="bg-red-50 text-red-500 px-4 py-3 rounded-md mb-6">
              {signupError}
            </div>
          )}

          {signupSuccess && (
            <div className="bg-green-50 text-green-600 px-4 py-3 rounded-md mb-6">
              <p className="font-medium">Account created successfully!</p>
              <p className="text-sm">Redirecting to your profile...</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-osloGray mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full border ${
                  errors.fullName ? "border-red-500" : "border-gray-200"
                } rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gold`}
                placeholder="Enter your full name"
                disabled={isLoading || signupSuccess}
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-osloGray mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full border ${
                  errors.email ? "border-red-500" : "border-gray-200"
                } rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gold`}
                placeholder="Enter your email address"
                disabled={isLoading || signupSuccess}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-osloGray mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full border ${
                  errors.password ? "border-red-500" : "border-gray-200"
                } rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gold`}
                placeholder="Create a strong password"
                disabled={isLoading || signupSuccess}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-osloGray mb-2"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full border ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-200"
                } rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gold`}
                placeholder="Confirm your password"
                disabled={isLoading || signupSuccess}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className="mr-2 mt-1"
                  disabled={isLoading || signupSuccess}
                />
              </div>
              <label
                htmlFor="agreeTerms"
                className="text-sm text-osloGray ml-2"
              >
                I agree to the{" "}
                <Link href="/terms" className="text-terracotta hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy-policy"
                  className="text-terracotta hover:underline"
                >
                  Privacy Policy
                </Link>
              </label>
            </div>
            {errors.agreeTerms && (
              <p className="text-red-500 text-sm mt-1">{errors.agreeTerms}</p>
            )}

            <div>
              <button
                type="submit"
                disabled={isLoading || signupSuccess}
                className={`w-full bg-terracotta text-white py-3 rounded-md ${
                  isLoading || signupSuccess
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:bg-terracotta/90"
                }`}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Creating Account...
                  </span>
                ) : signupSuccess ? (
                  "Account Created!"
                ) : (
                  "Create Account"
                )}
              </button>
            </div>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-osloGray">
              Already have an account?{" "}
              <Link
                href="/account/signin"
                className="text-terracotta hover:text-bordeaux"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
