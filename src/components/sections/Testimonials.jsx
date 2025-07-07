import { useDarkMode } from "../../context/DarkModeContext";

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
    name: "King bay",
    title: "Digital Marketer",
  },
  {
    message:
      "The UI design for my fintech app was smooth, modern and user-friendly. He understood my vision from day one.",
    name: "Kehinde Ayokunle",
    title: "Full stack developer",
  },
  {
    message:
      "Amazing turnaround time and design quality. Every detail was professionally executed. Great work!",
    name: "Olat gadget",
    title: "Entrepreneur",
  },
  {
    message:
      "Working with Tobiloba was a breeze. His designs helped my brand stand out and convert better online.",
    name: "Oluwaseun",
    title: "Digital Marketer",
  },
];

export default function Testimonials() {
  const { isDarkMode } = useDarkMode();
   

  const textColor = isDarkMode ? "#E6E8FD" : "#020A51";

  return (
    <section
      className="py-20 px-4 font-comfortaa transition-colors duration-300"
      style={{ background: `linear-gradient(to bottom, #C1C1C1, #020A51)` }}
    >
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-extrabold" style={{ color: textColor }}>
          Clients Review
        </h2>
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 w-max px-2">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="min-w-[300px] md:min-w-[400px] p-6 rounded-2xl bg-gray-300 dark:bg-gray-700 flex-shrink-0 shadow-md"
              style={{ color: textColor }}
            >
              <p className="mb-6 text-lg leading-relaxed">{t.message}</p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-black" />
                <div>
                  <h4 className="text-lg font-bold">{t.name}</h4>
                  <p className="text-sm opacity-80">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
