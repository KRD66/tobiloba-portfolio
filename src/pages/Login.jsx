import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDarkMode } from "../context/DarkModeContext";

export default function Login() {
  const { isDarkMode } = useDarkMode();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, trimmedEmail, trimmedPassword);
      console.log("✅ Login success:", userCredential.user);
      navigate("/admin/dashboard");
    } catch (err) {
      console.error("❌ Firebase login error:", err.code, err.message);
      switch (err.code) {
        case "auth/user-not-found":
          setError("No user found with this email");
          break;
        case "auth/wrong-password":
          setError("Incorrect password");
          break;
        case "auth/invalid-email":
          setError("Invalid email format");
          break;
        case "auth/too-many-requests":
          setError("Too many login attempts. Please try again later.");
          break;
        default:
          setError("Login failed: " + err.message);
      }
    }
  };

  return (
    <section className={`flex items-center justify-center min-h-screen px-4 transition-colors duration-300 ${isDarkMode ? "bg-[#010211] text-white" : "bg-[#f9fafb] text-gray-900"}`}>
      <div className="w-full max-w-md p-6 rounded-xl shadow-lg bg-white dark:bg-[#0f0f2e]">
        <h2 className="text-3xl font-bold text-center mb-6">Admin Login</h2>

        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-semibold">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
              placeholder="e.g. testadmin@example.com"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-semibold">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700"
              placeholder="Enter password"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 mt-4 font-bold bg-[#020A51] text-white rounded-md hover:bg-red-500 transition-colors duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
}
