import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";

export default function PrivateRoute({ children }) {
  const [session, setSession] = useState(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const fetchSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.error("Error fetching session:", error.message);
      }
      setSession(data.session);
      setChecking(false);
    };

    fetchSession();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      listener?.subscription?.unsubscribe();
    };
  }, []);

  if (checking) return <div className="text-center mt-10">Loading...</div>;

  // Optionally restrict to a specific admin email:
  // const adminEmail = "admin@example.com";
  // const userEmail = session?.user?.email;
  // if (!session || userEmail !== adminEmail) return <Navigate to="/admin/login" />;

  return session ? children : <Navigate to="/admin/login" />;
}
