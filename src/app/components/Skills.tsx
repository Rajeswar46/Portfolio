import { motion } from "motion/react";
import {
  Code2,
  Database,
  GitBranch,
  Palette,
  Server,
  Smartphone,
  Cpu,
} from "lucide-react";
import {
  fadeUp,
  staggerContainer,
  staggerItem,
  viewportConfig,
  lift,
} from "@/utils/animation-utils";

export function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      icon: Code2,
      skills: [
        { name: "React", icon: "⚛️", proficiency: 95 },
        { name: "TypeScript", icon: "💎", proficiency: 90 },
        { name: "Tailwind", icon: "🎨", proficiency: 95 },
        { name: "Next.js", icon: "▲", proficiency: 85 },
      ],
    },
    {
      category: "Backend",
      icon: Server,
      skills: [
        { name: "Node.js", icon: "🟢", proficiency: 90 },
        { name: "Python", icon: "🐍", proficiency: 85 },
      ],
    },
    {
      category: "Database",
      icon: Database,
      skills: [
        { name: "PostgreSQL", icon: "🐘", proficiency: 85 },
        { name: "MySQL", icon: "🐬", proficiency: 90 },
      ],
    },
    {
      category: "Tools & Others",
      icon: GitBranch,
      skills: [
        { name: "Git", icon: "📦", proficiency: 95 },
        { name: "Wix", icon: "📄", proficiency: 75 },
        { name: "Figma", icon: "🎨", proficiency: 90 },
        { name: "Webflow", icon: "🔮", proficiency: 90 },
      ],
    },
  ];

  const highlights = [
    { icon: Code2, label: "Clean Code", color: "#ff6b6b" },
    { icon: Smartphone, label: "Responsive", color: "#ff8e53" },
    { icon: Cpu, label: "Performance", color: "#ff6b6b" },
    { icon: Palette, label: "UI/UX Focus", color: "#ff8e53" },
  ];

  return (
    <section
      id="skills"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeUp(0, 30)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Tech <span className="text-gradient-primary">Stack</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skill Categories */}
        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.category}
              variants={staggerItem}
              className="glass rounded-3xl p-6 sm:p-8 hover:glass-strong transition-all"
            >
              {/* Category title */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#ff6b6b]/20 to-[#ff8e53]/20 flex items-center justify-center">
                  <category.icon className="text-[#ff6b6b]" size={24} />
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-white">
                  {category.category}
                </h3>
              </div>

              {/* Skills */}
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={lift}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                    className="group relative bg-white/5 rounded-xl p-4 border border-white/10 hover:border-[#ff6b6b]/50 transition-all tap-target"
                  >
                    <div className="flex flex-col items-center gap-2 text-center">
                      {/* 🔥 FIX HERE */}
                      <div className="text-4xl md:grayscale md:group-hover:grayscale-0 transition-all duration-300">
                        {skill.icon}
                      </div>
                      <p className="text-sm sm:text-base text-gray-300 font-medium">
                        {skill.name}
                      </p>
                    </div>

                    {/* Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b6b]/0 to-[#ff8e53]/0 md:group-hover:from-[#ff6b6b]/10 md:group-hover:to-[#ff8e53]/10 rounded-xl blur-xl transition-all -z-10" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlights */}
        <motion.div
          variants={fadeUp(0.2, 30)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {highlights.map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass rounded-2xl p-4 sm:p-6 flex items-center gap-3 hover:glass-strong transition-all tap-target"
            >
              <item.icon size={24} style={{ color: item.color }} />
              <span className="text-gray-300">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
