import { useState } from "react";
import nexLeadlogo from "../assets/Images/nexLeadLogo.png";
import Login from "../assets/Images/Login.png";

import starBg from "../assets/Images/star.png";

export default function AuthPages() {
  const [mode, setMode] = useState("login");

  const isLogin = mode === "login";
  const isSignup = mode === "signup";
  const isForgot = mode === "forgot";

  // 🔑 LOGIN + FORGOT behave the same
  const isLoginLike = isLogin || isForgot;

  return (
    <div
      className="h-screen w-full flex relative"
      style={{
        background: isSignup
          ? `url(${starBg}) repeat center center, linear-gradient(90deg, #3671cc 0%, #021024 100%)`
          : `url(${starBg}) repeat center center, linear-gradient(270deg, #3671cc 0%, #021024 100%)`,
        backgroundSize: "auto, auto, auto, cover",
      }}
    >
      {/* LOGO */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-50">
        <img src={nexLeadlogo} alt="Logo" width="120"/>
      </div>

      {/* GRID */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2">
        {/* FORM SECTION */}
        <div
          className={`w-full p-8 sm:p-12 text-white flex items-center justify-center
          ${isLoginLike ? "order-1" : "order-2"}`}
        >
          <div className="w-full max-w-md">
            {/* LOGIN */}
            {isLogin && (
              <>
                <h2 className="text-3xl font-bold mb-8">Login</h2>

                <div className="space-y-6">
                  <input
                    type="text"
                    placeholder="Username Or Email Address *"
                    className="auth-input"
                  />
                  <input
                    type="password"
                    placeholder="Password *"
                    className="auth-input"
                  />

                  <label className="flex items-center gap-2 text-sm text-white">
                    <input type="checkbox" className="accent-white" />
                    Remember me
                  </label>

                  <button className="w-full bg-white text-[#0b1c33] py-3 rounded-full font-semibold">
                    LOG IN
                  </button>

                  <p className="text-center text-sm text-white">
                    <button
                      onClick={() => setMode("signup")}
                      
                    >
                      Sign up
                    </button>{" "}
                    |{" "}
                    <button
                      onClick={() => setMode("forgot")}
                      
                    >
                      Lost your Password?
                    </button>
                  </p>
                </div>
              </>
            )}

            {/* SIGNUP */}
            {isSignup && (
              <>
                <h2 className="text-3xl font-bold mb-6">Create Account</h2>

                <div className="space-y-5">
                  <input placeholder="Name" className="auth-input" />
                  <input placeholder="Email Address" className="auth-input" />
                  <input placeholder="Username" className="auth-input" />
                  <input
                    type="password"
                    placeholder="Password"
                    className="auth-input"
                  />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="auth-input"
                  />

                  <button className="w-full bg-white text-[#0b1c33] py-3 rounded-full font-semibold">
                    Sign Up
                  </button>

                  <p className="text-center text-sm text-white">
                    Already have an account?{" "}
                    <button
                      onClick={() => setMode("login")}
                   
                    >
                      Log in
                    </button>
                  </p>
                </div>
              </>
            )}

            {/* FORGOT PASSWORD */}
            {isForgot && (
              <>
                <button
                  onClick={() => setMode("login")}
                  className="text-sm mb-6 inline-block"
                >
                  ← Back to Login
                </button>

                <h2 className="text-3xl font-bold mb-4">Forgot Password</h2>

                <p className="text-white mb-6 text-sm">
                  Enter your email address and we’ll send you a reset link.
                </p>

                <div className="space-y-6">
                  <input
                    type="email"
                    placeholder="Email Address *"
                    className="auth-input"
                  />

                  <button className="w-full bg-white text-[#0b1c33] py-3 rounded-full font-semibold">
                    Send Reset Link
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        {/* IMAGE SECTION */}
        <div
          className={`hidden lg:flex items-center justify-center h-screen
          ${isLoginLike ? "order-2" : "order-1"}`}
        >
          <img
            src={Login}
            alt="Auth Illustration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>


    </div>
  );
}
