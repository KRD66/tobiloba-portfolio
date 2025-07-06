import { useDarkMode } from "../../context/DarkModeContext";

export default function Footer() {
  const { isDarkMode } = useDarkMode();

  const bgColor = isDarkMode ? "bg-[#010211]" : "bg-[#F9FAFB]";
  const textColor = isDarkMode ? "text-[#E6E8FD]" : "text-[#020A51]";
  const borderColor = isDarkMode
    ? "border-t border-[#E6E8FD]/20"
    : "border-t border-[#020A51]/20";

  return (
    <footer className={`w-full py-6 mt-0 ${bgColor} ${borderColor} transition-colors duration-300`}>
      <div className="max-w-[1200px] mx-auto text-center font-comfortaa">
        <p className={`text-sm md:text-base font-medium ${textColor}`}>
          &copy; {new Date().getFullYear()} Tobiloba Awosanmi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
