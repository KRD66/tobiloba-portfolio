import { useState } from "react";
import { supabase } from "../../utils/supabase";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "../../context/DarkModeContext";

export default function UploadProject() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [figmaUrl, setFigmaUrl] = useState("");
  const [type, setType] = useState("Flyer");
  const [toolsUsed, setToolsUsed] = useState([]);
  const [isFeatured, setIsFeatured] = useState(false);
  const [year, setYear] = useState("2025");
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const navigate = useNavigate();
  const { isDarkMode } = useDarkMode();

  const allTools = ["Figma", "Photoshop", "Coreldraw", "Canva", "Pitch Deck", "Miro"];

  const textColor = isDarkMode ? "text-[#E6E8FD]" : "text-[#020A51]";
  const inputStyle = isDarkMode
    ? "bg-[#010211] border border-[#E6E8FD] text-[#E6E8FD]"
    : "bg-white border border-[#020A51] text-[#020A51]";
  const buttonStyle = isDarkMode
    ? "bg-[#020A51] text-[#E6E8FD] border-[#E6E8FD]"
    : "bg-white text-[#020A51] border-[#020A51]";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!thumbnailFile) return alert("Please select a thumbnail image.");

    try {
      setUploading(true);

      // Upload to Cloudinary
      const formData = new FormData();
      formData.append("file", thumbnailFile);
      formData.append("upload_preset", "portfolio_uploads");

      const cloudinaryResponse = await fetch(
        "https://api.cloudinary.com/v1_1/demli2dmb/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const cloudinaryData = await cloudinaryResponse.json();

      if (!cloudinaryData.secure_url) {
        throw new Error("Image upload failed");
      }

      const thumbnailUrl = cloudinaryData.secure_url;

      // Insert project into Supabase
      const { error } = await supabase.from("projects").insert([
        {
          title,
          description,
          figmaUrl: type === "UI Design" ? figmaUrl : "",
          type,
          toolsUsed,
          isFeatured,
          year,
          thumbnailUrl,
        },
      ]);

      if (error) throw error;

      alert("✅ Project uploaded successfully!");
      navigate("/admin/dashboard");
    } catch (err) {
      console.error("❌ Upload error:", err);
      alert("❌ Failed to upload project. Check console for details.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div
      className={`min-h-screen py-20 px-4 font-comfortaa transition-colors duration-300 ${
        isDarkMode ? "bg-[#010211]" : "bg-[#F9FAFB]"
      }`}
    >
      <h2 className={`text-4xl font-bold text-center mb-10 ${textColor}`}>
        Upload New Project
      </h2>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
        <input
          type="text"
          placeholder="Title"
          className={`w-full px-4 py-2 rounded ${inputStyle}`}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          placeholder="Description"
          className={`w-full px-4 py-2 rounded ${inputStyle}`}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>

        <select
          className={`w-full px-4 py-2 rounded ${inputStyle}`}
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="Flyer">Flyer</option>
          <option value="Logo">Logo</option>
          <option value="UI Design">UI Design</option>
        </select>

        {type === "UI Design" && (
          <input
            type="url"
            placeholder="Figma URL"
            className={`w-full px-4 py-2 rounded ${inputStyle}`}
            value={figmaUrl}
            onChange={(e) => setFigmaUrl(e.target.value)}
          />
        )}

        <div className={textColor}>
          <label className="block font-semibold mb-2">Tools Used:</label>
          <div className="flex flex-wrap gap-2">
            {allTools.map((tool) => (
              <label key={tool} className="flex items-center gap-1">
                <input
                  type="checkbox"
                  value={tool}
                  checked={toolsUsed.includes(tool)}
                  onChange={(e) =>
                    setToolsUsed((prev) =>
                      e.target.checked
                        ? [...prev, tool]
                        : prev.filter((t) => t !== tool)
                    )
                  }
                />
                {tool}
              </label>
            ))}
          </div>
        </div>

        <label className={`block font-semibold mt-2 ${textColor}`}>
          Year:
          <input
            type="text"
            className={`w-full px-4 py-2 rounded mt-1 ${inputStyle}`}
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </label>

        <label className={`flex items-center gap-2 ${textColor}`}>
          <input
            type="checkbox"
            checked={isFeatured}
            onChange={(e) => setIsFeatured(e.target.checked)}
          />
          Featured
        </label>

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setThumbnailFile(e.target.files[0])}
          className={textColor}
          required
        />

        <button
          type="submit"
          disabled={uploading}
          className={`w-full py-2 rounded-xl font-bold border ${buttonStyle} hover:border-red-500`}
        >
          {uploading ? "Uploading..." : "Upload Project"}
        </button>
      </form>
    </div>
  );
}
