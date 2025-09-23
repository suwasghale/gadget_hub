"use client";
import React, { useState } from "react";

interface AuthFormsProps {
  initialMode?: "login" | "signup";
}

const AuthForms: React.FC<AuthFormsProps> = ({ initialMode = "login" }) => {
  const [mode, setMode] = useState<"login" | "signup">(initialMode);

  return (
    <div className="w-full max-w-sm">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {mode === "login" ? "Sign In" : "Sign Up"}
      </h2>

      <form className="space-y-4">
        {mode === "signup" && (
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded-lg"
          />
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 border rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border rounded-lg"
        />

        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
        >
          {mode === "login" ? "Login" : "Create Account"}
        </button>
      </form>

      <p className="text-center text-sm mt-4">
        {mode === "login" ? (
          <>
            Don’t have an account?{" "}
            <button
              type="button"
              onClick={() => setMode("signup")}
              className="text-red-600 hover:underline"
            >
              Sign Up
            </button>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => setMode("login")}
              className="text-red-600 hover:underline"
            >
              Login
            </button>
          </>
        )}
      </p>
    </div>
  );
};

export default AuthForms;
