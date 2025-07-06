import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";
import { useDarkMode } from "../context/DarkModeContext";

export default function LogoProjects() {
  const [logos, setLogos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isDarkMode } = useDarkMode();

  const textColor = isDarkMode ? "text-[#E6E8FD]" : "text-[#020A51]";
  const cardStyle = isDarkMode
    ? "bg-[#010211] border border-[#E6E8FD]"
    : "bg-white border border-[#020A51]";

  useEffect(() => {
    const fetchLogos = async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("type", "Logo")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching logos:", error.message);
      } else {
        setLogos(data);
      }

      setLoading(false);
    };

    fetchLogos();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading logos...</p>;

  return (
    <div
      className={`min-h-screen py-20 px-4 font-comfortaa transition-colors duration-300 ${
        isDarkMode ? "bg-[#010211]" : "bg-[#F9FAFB]"
      }`}
    >
      <h2 className={`text-4xl font-bold text-center mb-12 ${textColor}`}>
        Logo Projects
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {logos.map((project) => (
          <div
            key={project.id}
            className={`rounded-xl p-2 ${cardStyle}`}
          >
            <img
              src={project.thumbnailUrl}
              alt={project.title}
              className="rounded-lg w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className={`font-semibold text-lg ${textColor}`}>
                {project.title}
              </h3>
              <p className={`text-sm mt-1 ${textColor}`}>
                {project.description}
              </p>
              <p className={`text-xs mt-2 ${textColor}`}>
                Tools: {project.toolsUsed}
              </p>
              <p className={`text-xs mt-1 ${textColor}`}>
                Year: {project.year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
