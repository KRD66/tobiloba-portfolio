import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";
import { useDarkMode } from "../context/DarkModeContext";

export default function FlyerProjects() {
  const [flyers, setFlyers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isDarkMode } = useDarkMode();

  const textColor = isDarkMode ? "text-[#E6E8FD]" : "text-[#020A51]";
  const cardStyle = isDarkMode
    ? "bg-[#010211] border border-[#E6E8FD]"
    : "bg-white border border-[#020A51]";

  useEffect(() => {
    const fetchFlyers = async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("type", "Flyer")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching flyers:", error.message);
      } else {
        setFlyers(data);
      }

      setLoading(false);
    };

    fetchFlyers();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading Flyers...</p>;

  return (
    <div
      className={`min-h-screen py-20 px-4 font-comfortaa transition-colors duration-300 ${
        isDarkMode ? "bg-[#010211]" : "bg-[#F9FAFB]"
      }`}
    >
      <h2 className={`text-4xl font-bold text-center mb-12 ${textColor}`}>
        Flyer Projects
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {flyers.map((project) => (
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
