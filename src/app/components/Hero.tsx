import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Download } from "lucide-react";
import { useRef } from "react";
import {
  fadeUp,
  fadeIn,
  floating,
  buttonTap,
  buttonHover,
  glow,
} from "@/utils/animation-utils";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Gentle parallax for background elements (max 10px movement)
  const orbY = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const floatingCardY = useTransform(scrollYProgress, [0, 1], [0, 20]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 pt-20 pb-12 overflow-hidden"
    >
      {/* Background gradient orbs with parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: orbY }}
          className="absolute top-1/4 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-[#ff6b6b]/10 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: orbY }}
          className="absolute bottom-1/4 right-1/4 w-72 sm:w-96 md:w-[28rem] h-72 sm:h-96 md:h-[28rem] bg-[#ff8e53]/10 rounded-full blur-3xl"
        />
      </div>

      {/* Floating 3D card behind content */}
      <motion.div
        style={{ y: floatingCardY }}
        variants={floating}
        animate="animate"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[400px] md:w-[500px] h-[280px] sm:h-[400px] md:h-[500px] perspective-lg pointer-events-none"
      >
        <div
          className="w-full h-full rounded-3xl glass preserve-3d"
          style={{
            transform: "rotateX(10deg) rotateY(-10deg)",
          }}
        />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8">
          {/* Greeting */}
          <motion.div
            variants={fadeUp(0, 20)}
            initial="hidden"
            animate="visible"
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-sm sm:text-base text-gray-300">
              👋 Welcome to my portfolio
            </span>
          </motion.div>

          {/* Main headline - mobile-first typography */}
          <motion.div
            variants={fadeUp(0.1, 30)}
            initial="hidden"
            animate="visible"
            className="space-y-2 sm:space-y-3"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-tight">
              <span className="text-white block mb-2">Hi, I'm</span>
              <span className="text-gradient-primary block">
                Rajeswar
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-300 font-medium">
              Full Stack Developer
            </h2>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp(0.2, 30)}
            initial="hidden"
            animate="visible"
            className="text-base sm:text-lg md:text-xl text-gray-400 max-w-xl lg:max-w-2xl leading-relaxed px-4"
          >
            Crafting digital experiences that turn your vision into reality.
            Building high-performance web solutions for ambitious businesses.
          </motion.p>

          {/* CTAs - mobile-optimized */}
          <motion.div
            variants={fadeUp(0.3, 30)}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 pt-4 sm:pt-6 w-full sm:w-auto px-4"
          >
            <motion.button
              variants={glow}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className="group relative px-6 sm:px-8 py-4 bg-gradient-to-r from-[#ff6b6b] to-[#ff8e53] text-white rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#ff6b6b]/50 tap-target-lg font-medium text-base sm:text-lg"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                contactSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Got a project?
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </span>
            </motion.button>

            {/* <motion.button
              whileHover={buttonHover}
              whileTap={buttonTap}
              className="px-6 sm:px-8 py-4 glass text-white rounded-xl sm:rounded-2xl hover:glass-strong transition-all duration-300 hover:border-[#ff6b6b]/50 flex items-center justify-center gap-2 tap-target-lg font-medium text-base sm:text-lg"
            >
              <Download size={20} />
              My Resume
            </motion.button> */}
            <motion.a
              href="/Rajeswar_resume.pdf"
              download="Rajeswar_K_Resume.pdf"
              whileHover={buttonHover}
              whileTap={buttonTap}
              className="px-6 sm:px-8 py-4 glass text-white rounded-xl sm:rounded-2xl hover:glass-strong transition-all duration-300 hover:border-[#ff6b6b]/50 flex items-center justify-center gap-2 tap-target-lg font-medium text-base sm:text-lg"
            >
              <Download size={20} />
              My Resume
            </motion.a>

          </motion.div>

          {/* Scroll indicator - mobile-friendly */}
          <motion.div
            variants={fadeIn(0.5)}
            initial="hidden"
            animate="visible"
            className="pt-8 sm:pt-12"
          >
            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-6 h-10 rounded-full border-2 border-gray-600 flex items-start justify-center p-2 cursor-pointer"
              onClick={() => {
                const aboutSection = document.getElementById("about");
                aboutSection?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <div className="w-1.5 h-2 bg-[#ff6b6b] rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

