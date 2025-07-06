import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { supabase } from "../../utils/supabase";
import { useDarkMode } from "../../context/DarkModeContext";

export default function AdminLogin() {
  const { isDarkMode } = useDarkMode();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError("Invalid email or password");
    } else {
      navigate("/admin/dashboard");
    }
  };

  const cardStyle = isDarkMode ? "bg-[#010211] text-[#E6E8FD]" : "bg-white text-[#020A51]";
  const inputStyle = isDarkMode
    ? "bg-[#0A0B1F] border-[#E6E8FD] text-white"
    : "bg-white border-[#020A51] text-[#020A51]";
  const buttonStyle = isDarkMode
    ? "bg-[#020A51] text-[#E6E8FD]"
    : "bg-white text-[#020A51] border border-[#020A51] hover:border-red-500";

  return (
    <div className={`min-h-screen flex items-center justify-center font-comfortaa transition-colors duration-300 ${isDarkMode ? "bg-[#010211]" : "bg-[#F9FAFB]"}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className={`rounded-xl shadow-xl p-8 ${cardStyle}`}>
          <h2 className="text-3xl font-extrabold text-center mb-6">Admin Portal</h2>

          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-sm dark:bg-red-900 dark:text-red-100">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-4 py-2 rounded-lg border ${inputStyle}`}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full px-4 py-2 rounded-lg border ${inputStyle}`}
                required
              />
            </div>

            <button
              type="submit"
              className={`w-full py-2 rounded-lg font-bold transition-colors duration-300 ${buttonStyle}`}
            >
              Sign In
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
