import { FaFigma, FaArrowRight } from "react-icons/fa";
import { SiCanva, SiMiro, SiAdobephotoshop } from "react-icons/si";
import { MdOutlineTextSnippet } from "react-icons/md";
import { useDarkMode } from "../../context/DarkModeContext";
import coreldrawIcon from "../../assets/icons/coreldraw.svg";
import wordIcon from "../../assets/icons/word.svg";
import powerpointIcon from "../../assets/icons/powerpoint.svg";
import resumePDF from "../../assets/docs/temtopresume.pdf"; // ✅ Import your resume

export default function About() {
  const { isDarkMode } = useDarkMode();

  const skills = [
    { name: "Figma", icon: <FaFigma className="text-xl text-purple-600" /> },
    { name: "Photoshop", icon: <SiAdobephotoshop className="text-xl text-blue-600" /> },
    { name: "CorelDRAW", icon: <img src={coreldrawIcon} alt="CorelDRAW" className="w-5 h-5" /> },
    { name: "Canva", icon: <SiCanva className="text-xl text-indigo-600" /> },
    { name: "Word", icon: <img src={wordIcon} alt="Word" className="w-5 h-5" /> },
    { name: "PowerPoint", icon: <img src={powerpointIcon} alt="PowerPoint" className="w-5 h-5" /> },
    { name: "Miro", icon: <SiMiro className="text-xl text-yellow-600" /> },
    { name: "Pitch Deck", icon: <MdOutlineTextSnippet className="text-xl text-gray-600" /> },
  ];

  return (
    <section
      id="about"
      className={`py-20 px-4 font-comfortaa scroll-mt-[100px] transition-colors duration-300 ${
        isDarkMode ? "bg-[#010211] text-[#E6E8FD]" : "bg-gray-50 text-[#020A51]"
      }`}
    >
      <div className="max-w-[1200px] mx-auto flex flex-col gap-20">
        {/* About Me Section */}
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">About Me</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I’m a passionate UI/UX and Graphic Designer based in Osun State, Nigeria. I specialize
              in creating user-friendly digital experiences and visually appealing designs that
              bring ideas to life.
              <br />
              With a strong foundation in design principles and user-centered thinking, I combine
              creativity with strategy to craft intuitive interfaces, sleek mobile and web layouts,
              brand identities, and marketing graphics.
              <br />
              I recently completed my UI/UX training at Anettcom Academy, Osogbo, where I honed my
              skills in user research, wireframing, prototyping, and responsive design.
              <br />
              I’m constantly exploring design trends, solving real user problems, and adding value
              through thoughtful visuals and clean design systems.
              <br />
              Let’s build something meaningful — together.
            </p>
          </div>

          {/* Skills Section */}
          <div className="w-full md:w-1/2 mt-10">
            <div
              className={`p-6 rounded-2xl ${
                isDarkMode
                  ? "bg-[#010211] border border-[#E6E8FD]"
                  : "bg-white border border-[#020A51] shadow-md"
              }`}
            >
              <h3 className="text-[2.6rem] md:text-[3rem] font-extrabold mb-6">My Skills</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm"
                  >
                    {skill.icon}
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* View Resume Button */}
            <a
              href={resumePDF} // ✅ This links directly to the PDF
              target="_blank"
              rel="noopener noreferrer"
              className={`w-[184px] h-[44px] font-comfortaa font-bold text-sm md:text-base rounded-xl mt-4 flex items-center justify-center border transition-colors duration-300 gap-2 ${
                isDarkMode
                  ? "bg-[#020A51] text-[#E6E8FD] border-[#E6E8FD] hover:border-red-500"
                  : "bg-white text-[#020A51] border-[#020A51] hover:border-red-500"
              }`}
            >
              <span>View Resume</span>
              <FaArrowRight className="ml-1 text-inherit text-sm md:text-base" />
            </a>
          </div>
        </div>

        {/* Qualifications Section */}
        <div className="text-center">
          <h2 className={`text-4xl md:text-5xl font-extrabold mb-10 ${isDarkMode ? "text-[#E6E8FD]" : "text-[#020A51]"}`} >Qualifications</h2>
          <div className="flex flex-col md:flex-row gap-8 justify-between text-left">
            <div className="w-full md:w-1/2 space-y-2">
              <p className="text-xl md:text-2xl font-bold">
                National Diploma in Computer Science
              </p>
              <p className={`text-base md:text-lg font-medium ${isDarkMode ? "text-[red]" : "text-[#079927]"}`}>
                Federal Polytechnic Ede, Osun State - 2022
              </p>
            </div>
            <div className="w-full md:w-1/2 space-y-2">
              <p className="text-xl md:text-2xl font-bold">
                Higher National Diploma in Computer Science
              </p>
              <p className={`text-base md:text-lg font-medium ${isDarkMode ? "text-[red]" : "text-[#079927]"}`}>
                Federal Polytechnic Ede, Osun State - 2024
              </p>
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="text-center">
          <h2 className={`text-4xl md:text-5xl font-extrabold mb-10 ${isDarkMode ? "text-[#E6E8FD]" : "text-[#020A51]"}`} >Certifications</h2>
          <div className="flex flex-col md:flex-row gap-8 justify-between text-left">
            <div className="w-full md:w-1/2 space-y-6">
              <div>
                <p className="text-xl md:text-2xl font-bold">
                  Product Design Brainstorming with <br /> Miro
                </p>
                <p className={`text-base md:text-lg font-medium ${isDarkMode ? "text-[red]" : "text-[#079927]"}`}>
                  Project Authorized by Coursera - 2025
                </p>
              </div>
              <div><br /> 
                <p className="text-xl md:text-2xl font-bold">
                  User Interface and User Experience <br /> Course
                </p>
                <p className={`text-base md:text-lg font-medium ${isDarkMode ? "text-[red]" : "text-[#079927]"}`}>
                  Anettcom Academy - 2025
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/2 space-y-6">
              <div>
                <p className="text-xl md:text-2xl font-bold">
                  Agile Project: Product Prototype <br /> Touchpoint Analysis in Miro
                </p>
                <p className={`text-base md:text-lg font-medium ${isDarkMode ? "text-[red]" : "text-[#079927]"}`}>
                Project Authorized by Coursera - 2025
                </p>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-bold"><br />
                  Jobberman Soft Skill Training
                </p>
                <p className={`text-base md:text-lg font-medium ${isDarkMode ? "text-[red]" : "text-[#079927]"}`}>
                  2023
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
