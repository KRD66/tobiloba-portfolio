import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useDarkMode } from "../../context/DarkModeContext";
import { AiOutlineSend } from "react-icons/ai";
import { FaWhatsapp, FaLinkedin, FaInstagram, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  const { isDarkMode } = useDarkMode();
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const bgColor = isDarkMode ? "#010211" : "#F9FAFB";
  const textColor = isDarkMode ? "#E6E8FD" : "#020A51";
  const inputTextColor = isDarkMode ? "#C5C8F1" : "#020A51";

  const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        setSuccess(true);
        form.current.reset();
      })
      .catch(() => setError(true));
  };

  return (
    <section
      id="contact"
      className="min-h-screen w-full px-4 py-20 font-comfortaa transition-colors duration-300"
      style={{ backgroundColor: bgColor }}
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2
          className="text-4xl md:text-5xl font-extrabold"
          style={{ color: textColor }}
        >
          Contact Me
        </h2>
        <p
          className="text-base md:text-lg font-semibold mt-2"
          style={{ color: "#079927" }}
        >
          Let’s build something amazing together!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Left: Contact Info */}
        <div className="space-y-8 text-left">
          <div>
            <h3 className="text-2xl font-bold mb-3" style={{ color: textColor }}>
              Contact Information
            </h3>

            <div className="flex items-center gap-2 mb-1 text-lg">
              <MdEmail className="text-2xl" style={{ color: "#079927" }} />
              <span style={{ color: "#079927" }}>Email</span>
            </div>
            <p className="text-base ml-7" style={{ color: "#079927" }}>
              temtopconcept1@gmail.com
            </p>

            <br />

            <div className="flex items-center gap-2 mb-1 text-lg">
              <FaPhone className="text-2xl rotate-90" style={{ color: "#079927" }} />
              <span style={{ color: "#079927" }}>Phone Number</span>
            </div>
            <p className="text-base ml-7" style={{ color: "#079927" }}>
              08144521784 , 09064940864
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3" style={{ color: textColor }}>
              Let's Connect
            </h3>
            <div className="flex items-center gap-5 text-3xl" style={{ color: "#079927" }}>
              <a href="https://www.linkedin.com/in/oluwatobiloba-awosanmi-485619370" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://wa.me/2348144521784" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
              <a href="https://www.instagram.com/temtopconcept_1" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="space-y-6 text-left">
          <h3 className="text-2xl font-bold mb-3" style={{ color: textColor }}>
            Send a Message
          </h3>

          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="user_name"
              placeholder="Enter your name"
              required
              className={`w-full md:w-1/2 px-4 py-3 border rounded text-base placeholder:text-gray-400 ${
                isDarkMode ? "focus:border-[#079927]" : "focus:border-[#020A51]"
              } focus:outline-none`}
              style={{
                color: inputTextColor,
                backgroundColor: bgColor,
                borderColor: isDarkMode ? "#E6E8FD" : "#020A51"
              }}
            />
            <input
              type="email"
              name="user_email"
              placeholder="Enter your email"
              required
              className={`w-full md:w-1/2 px-4 py-3 border rounded text-base placeholder:text-gray-400 ${
                isDarkMode ? "focus:border-[#079927]" : "focus:border-[#020A51]"
              } focus:outline-none`}
              style={{
                color: inputTextColor,
                backgroundColor: bgColor,
                borderColor: isDarkMode ? "#E6E8FD" : "#020A51"
              }}
            />
          </div>

          <div>
            <label className="block mb-1 font-bold text-lg md:text-xl" style={{ color: textColor }}>
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              placeholder="Your message"
              required
              className={`w-full px-4 py-3 border rounded resize-none text-base placeholder:text-gray-400 ${
                isDarkMode ? "focus:border-[#079927]" : "focus:border-[#020A51]"
              } focus:outline-none`}
              style={{
                color: inputTextColor,
                backgroundColor: bgColor,
                borderColor: isDarkMode ? "#E6E8FD" : "#020A51"
              }}
            />
          </div>

          <button
            type="submit"
            className={`flex items-center justify-center gap-2 w-full py-3 text-lg font-bold rounded border-2 transition-all duration-300 group ${
              isDarkMode
                ? "text-[#020A51] bg-[#E6E8FD] border-[#E6E8FD]"
                : "text-white bg-[#020A51] border-[#020A51]"
            }`}
            style={{ hover: { borderColor: isDarkMode ? "#079927" : "#020A51" } }}
          >
            Send Message
            <AiOutlineSend className="text-xl transition-transform group-hover:-rotate-45" />
          </button>

          {success && (
            <p className="text-green-600 font-semibold">Message sent successfully!</p>
          )}
          {error && (
            <p className="text-red-500 font-semibold">Failed to send. Try again.</p>
          )}
        </form>
      </div>
    </section>
  );
}
