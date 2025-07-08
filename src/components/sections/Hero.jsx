import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import HeroImage from '../../assets/images/temtop.jpg';
import { useDarkMode } from '../../context/DarkModeContext';

export default function Hero() {
  const mainText = "Welcome, I'm Awosanmi Oluwatobiloba";
  const subText1 = "Brain behind TEMTOP CONCEPTS";
  const subText2 = "A Passionate UI/UX and Graphic Designer";
  const { isDarkMode } = useDarkMode();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };

  const charVariants = {
    hidden: { opacity: 0, width: 0 },
    visible: { opacity: 1, width: 'auto', transition: { duration: 0.1 } },
  };

  const subTextVariants = {
    hidden: { opacity: 0, width: 0 },
    visible: { opacity: 1, width: 'auto', transition: { duration: 0.05 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 1 } },
  };

  return (
    <section
      id="home"
      className={`relative min-h-screen px-4 overflow-hidden scroll-mt-[100px] transition-colors duration-300 ${
        isDarkMode ? 'bg-[#010211]' : 'bg-[#F9FAFB]'
      }`}
    >
      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start w-full max-w-[1428px] mx-auto mt-24 md:mt-[270px] gap-8 md:gap-16 px-4 md:px-0">
        
        {/* Text section */}
        <div className="w-full md:w-[60%] flex flex-col items-center md:items-start text-center md:text-left md:pr-4 lg:pr-12 xl:pr-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 2,
            }}
          >
            <p className={`font-comfortaa font-bold ${
              isDarkMode ? 'text-[#E6E8FD]' : 'text-[#020A51]'
            } text-[1.2rem] sm:text-2xl md:text-[2.4rem] lg:text-[2.8rem] xl:text-[3.2rem] whitespace-nowrap`}>
              {mainText.split("").map((char, index) => (
                <motion.span
                  key={`main-text-${index}`}
                  variants={charVariants}
                  style={{
                    display: 'inline-block',
                    fontWeight: index === 0 || index === 10 || index === 13 ? '900' : '700',
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </p>
          </motion.div>

          {/* Subtext 1 */}
          <motion.p
            className={`text-sm sm:text-base md:text-lg font-comfortaa font-bold mt-4 ${
              isDarkMode ? 'text-[#079927]' : 'text-[#079927]'
            } md:pl-[250px] md:max-w-[200px]`}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.5,
                },
              },
            }}
          >
            {subText1.split("").map((char, index) => (
              <motion.span key={`subtext1-${index}`} variants={subTextVariants}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.p>

          {/* Line */}
          <hr className={`border-t-[4px] w-[90%] max-w-[300px] sm:max-w-[400px] md:max-w-[600px] mt-2 ${
            isDarkMode ? 'border-[#ccc]' : 'border-[#020A51]'
          } md:ml-[130px]`} />

          {/* Subtext 2 */}
          <motion.p
            className={`text-sm sm:text-base md:text-lg font-comfortaa font-bold mt-2 ${
              isDarkMode ? 'text-[#079927]' : 'text-[#079927]'
            } md:pl-[250px] md:max-w-[200px]`}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.5,
                  staggerDirection: -1,
                },
              },
            }}
          >
            {subText2.split("").map((char, index) => (
              <motion.span key={`subtext2-${index}`} variants={subTextVariants}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.p>

          {/* Scroll Button */}
          <motion.div
            className={`w-[184px] h-[44px] font-comfortaa font-bold text-sm md:text-base rounded-xl mt-6 md:mt-4 flex items-center justify-center border transition-colors duration-300 ${
              isDarkMode
                ? 'bg-[#020A51] text-[#E6E8FD] border-[#ccc] hover:border-[#079927]'
                : 'bg-white text-[#020A51] border-[#020A51] hover:border-red-500'
            } ${isDarkMode ? 'md:ml-[310px]' : 'md:ml-[310px]'} mx-auto md:mx-0`}
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
          >
            <ScrollLink
              to="projects"
              smooth={true}
              duration={700}
              offset={-80}
              className="cursor-pointer flex items-center gap-1"
            >
              <span>View Projects</span>
              <FaArrowRight className="text-inherit text-sm md:text-base" />
            </ScrollLink>
          </motion.div>
        </div>

        {/* Image Wrapper aligned fully to the right */}
        <motion.div
          className="w-full md:w-[40%] flex justify-center md:justify-end mt-6 md:mt-[-100px] relative"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src={HeroImage}
            alt="Awosanmi Oluwatobiloba"
            className="bg-gray-200 dark:bg-gray-200 rounded-2xl object-contain w-[200px] sm:w-[220px] md:w-[200px] lg:w-[200px] xl:w-[240px] h-auto max-h-[350px] md:absolute md:right-0 md:top-[-20px] mr-4"
          />
        </motion.div>
      </div>
    </section>
  );
}
