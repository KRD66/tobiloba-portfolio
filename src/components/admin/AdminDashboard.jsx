// src/components/admin/AdminDashboard.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../utils/supabase";
import { auth } from "../../utils/firebase";
import { signOut } from "firebase/auth";

export default function AdminDashboard() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching projects:", error.message);
      } else {
        setProjects(data);
      }

      setLoading(false);
    };

    fetchProjects();
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this project?");
    if (!confirm) return;

    const { error } = await supabase.from("projects").delete().eq("id", id);

    if (error) {
      console.error("❌ Delete error:", error.message);
      alert("Failed to delete project");
    } else {
      setProjects((prev) => prev.filter((p) => p.id !== id));
      alert("✅ Project deleted successfully");
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/admin/login");
  };

  const goToUploadForm = () => {
    navigate("/admin/upload");
  };

  if (loading) return <p className="text-center mt-10">Loading projects...</p>;

  return (
    <div className="max-w-6xl mx-auto p-4 font-comfortaa">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Admin Dashboard</h2>
        <div className="flex gap-3">
          <button
            onClick={goToUploadForm}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Upload New Project
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>

      {projects.length === 0 ? (
        <p className="text-center text-gray-500">No projects uploaded yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={project.thumbnailUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{project.title}</h3>
                <p className="text-sm mt-1">{project.description}</p>
                <p className="text-xs text-gray-500 mt-2">Type: {project.type}</p>
                <p className="text-xs text-gray-500">Year: {project.year}</p>
                <button
                  onClick={() => handleDelete(project.id)}
                  className="mt-3 bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
