import { useDarkMode } from "../../context/DarkModeContext";
import { Link } from "react-router-dom";
import flyer1 from "../../assets/images/flyer1.jpg";
import flyer2 from "../../assets/images/logo1.jpg";
import logo1 from "../../assets/images/logo2.png";
import fintech from "../../assets/images/fintech.jpg";

export default function Projects() {
  const { isDarkMode } = useDarkMode();

  // Colors
  const cardStyle = isDarkMode
    ? "bg-[#0C0C2A] border border-[#E6E8FD]" // darker box bg
    : "bg-white border border-[#020A51]";

  const buttonStyle = isDarkMode
    ? "bg-[#020A51] text-[#E6E8FD] border-[#E6E8FD]"
    : "bg-white text-[#020A51] border-[#020A51]";

  const headingColor = isDarkMode ? "text-[#E6E8FD]" : "text-[#020A51]";
  const textColor = isDarkMode ? "text-[#E6E8FD]" : "text-[#020A51]";
  const linkColor = isDarkMode ? "text-[#E6E8FD]" : "text-[#020A51]";
  const bgColor = isDarkMode ? "bg-[#010211]" : "bg-[#F9FAFB]";
  const reviewerNameColor = isDarkMode ? "#FFFFFF" : "#020A51";
  const reviewerTitleColor = isDarkMode ? "#BBBBBB" : "#333333";
  const avatarBgColor = isDarkMode ? "#BBBBBB" : "#000000";

  const testimonials = [
    {
      message:
        "Tobiloba brought my brand to life with a clean, professional logo. His creativity and attention to detail are top-notch!",
      name: "Seun Kuti",
      title: "Digital Marketer",
    },
    {
      message:
        '"I needed a flyer in less than 24 hours and he delivered something better than I imagined. Highly recommend!"',
      name: "Seun Kuti",
      title: "Digital Marketer",
    },
    {
      message:
        "The UI design for my fintech app was smooth, modern, and user-friendly. He understood my vision from day one.",
      name: "Seun Kuti",
      title: "Digital Marketer",
    },
    {
      message:
        "Working with Tobiloba was a seamless process. Fast turnaround and premium quality work.",
      name: "Seun Kuti",
      title: "Digital Marketer",
    },
    {
      message:
        "Great communication and delivery. Would definitely work with him again!",
      name: "Seun Kuti",
      title: "Digital Marketer",
    },
  ];

  return (
    <section
      id="projects"
      className={`py-20 px-4 font-comfortaa transition-colors duration-300 ${bgColor}`}
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <h2
          className={`text-4xl md:text-5xl font-extrabold text-center mb-12 ${headingColor}`}
        >
          Projects
        </h2>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <div className={`rounded-xl p-2 ${cardStyle}`}>
            <img
              src={flyer1}
              alt="Flyer 1"
              className="rounded-lg w-full h-auto object-cover"
            />
            <p className={`mt-2 text-center font-semibold text-base md:text-lg ${textColor}`}>
              E-flyer Design
            </p>
          </div>

          <div className={`rounded-xl p-2 ${cardStyle}`}>
            <img
              src={flyer2}
              alt="Flyer 2"
              className="rounded-lg w-full h-auto object-cover"
            />
            <p className={`mt-2 text-center font-semibold text-base md:text-lg ${textColor}`}>
              Logo Design
            </p>
          </div>

          <div className={`rounded-xl p-2 ${cardStyle}`}>
            <img
              src={logo1}
              alt="Logo Design"
              className="rounded-lg w-full h-auto object-cover"
            />
            <p className={`mt-2 text-center font-semibold text-base md:text-lg ${textColor}`}>
              E-flyer Design
            </p>
          </div>

          <div className={`rounded-xl p-2 ${cardStyle}`}>
            <img
              src={fintech}
              alt="Fintech App Design"
              className="rounded-lg w-full h-auto object-cover"
            />
            <p className={`mt-2 text-center font-semibold text-base md:text-lg ${textColor}`}>
              Fintech App Design for TopPay
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20">
          <Link
            to="/projects/flyers"
            className={`w-[160px] h-[44px] font-comfortaa text-sm md:text-base font-bold rounded-xl flex items-center justify-center border transition-colors duration-300 ${buttonStyle} ${linkColor} hover:border-red-500`}
          >
            View Flyers →
          </Link>
          <Link
            to="/projects/logos"
            className={`w-[160px] h-[44px] font-comfortaa text-sm md:text-base font-bold rounded-xl flex items-center justify-center border transition-colors duration-300 ${buttonStyle} ${linkColor} hover:border-red-500`}
          >
            View Logos →
          </Link>
          <Link
            to="/projects/ui"
            className={`w-[160px] h-[44px] font-comfortaa text-sm md:text-base font-bold rounded-xl flex items-center justify-center border transition-colors duration-300 ${buttonStyle} ${linkColor} hover:border-red-500`}
          >
            Figma Link →
          </Link>
        </div>

        {/* Testimonials Section */}
        <div className="text-center">
          <h2 className={`text-4xl font-bold mb-10 ${headingColor}`}>Clients Review</h2>
          <div className="flex gap-6 overflow-x-auto px-2 py-4">
            {testimonials.map((review, index) => (
              <div
                key={index}
                className={`min-w-[300px] max-w-[320px] p-6 rounded-2xl shadow-md ${cardStyle} flex flex-col justify-between`}
              >
                <p className={`text-left mb-6 ${textColor}`}>{review.message}</p>
                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-full"
                    style={{ backgroundColor: avatarBgColor }}
                  ></div>
                  <div className="text-left">
                    <p className="font-bold text-base" style={{ color: reviewerNameColor }}>
                      {review.name}
                    </p>
                    <p className="text-sm" style={{ color: reviewerTitleColor }}>
                      {review.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
