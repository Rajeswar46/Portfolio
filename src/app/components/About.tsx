import { motion } from "motion/react";
import { Award, Users, Coffee, Target, Heart, Zap } from "lucide-react";
import {
  fadeUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  staggerItem,
  scaleIn,
  viewportConfig,
} from "@/utils/animation-utils";

export function About() {
  const stats = [
    { icon: Award, label: "Months Experience", value: "6+" },
    { icon: Users, label: "Happy Clients", value: "2+" },
    { icon: Coffee, label: "Projects Done", value: "2+" },
    { icon: Zap, label: "Code Quality", value: "A+" },
  ];

  const values = [
    {
      icon: Target,
      title: "Problem Solver",
      description: "Complex challenges into elegant solutions",
    },
    {
      icon: Heart,
      title: "Detail Oriented",
      description: "Pixel-perfect, polished experiences",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-24 lg:py-28 px-6 sm:px-8 lg:px-12 bg-[#0f1729]/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header - cleaner */}
        <motion.div
          variants={fadeUp(0, 15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            About <span className="text-gradient-primary">Me</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto">
            Building solutions, one project at a time
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          {/* Left Side - Cleaner Stats Grid */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-2 gap-5 sm:gap-6"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={scaleIn(0, 0.92)}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center hover:glass-strong transition-all duration-300 border border-white/10 cursor-pointer"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-[#ff6b6b]/15 to-[#ff8e53]/15 flex items-center justify-center">
                    <stat.icon className="text-[#ff6b6b]" size={22} />
                  </div>
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side - Cleaner Content */}
          <motion.div
            variants={slideInRight(0, 30)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                Transforming Ideas into{" "}
                <span className="text-gradient-primary">Digital Reality</span>
              </h3>

              <div className="space-y-5 text-gray-400 text-base sm:text-lg leading-relaxed">
                <p>
                  I'm a passionate full-stack developer with over 6 months of experience creating exceptional digital experiences through clean code and thoughtful design.
                </p>
                <p>
                  Whether you need a landing page, a complex web application, or ongoing development support, I'm here to help you succeed.
                </p>
              </div>
            </div>

            {/* Values - More subtle */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {values.map((value) => (
                <motion.div
                  key={value.title}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.3 }}
                  className="glass rounded-xl p-5 border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#ff6b6b]/15 to-[#ff8e53]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <value.icon className="text-[#ff6b6b]" size={18} />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-white mb-1">
                        {value.title}
                      </h4>
                      <p className="text-sm text-gray-400 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
