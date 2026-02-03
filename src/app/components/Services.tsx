import { motion } from "motion/react";
import { Globe, Smartphone, Palette } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description:
        "Custom, responsive websites built with modern technologies. Fast, scalable, and optimized for performance.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading"],
    },
    {
      icon: Smartphone,
      title: "App Development",
      description:
        "Full-stack web applications with seamless user experiences. From concept to deployment.",
      features: ["React & Node.js", "Database Integration", "API Development"],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive interfaces that users love. Focused on accessibility and user experience.",
      features: ["User Research", "Prototyping", "Design Systems"],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            What I <span className="bg-gradient-to-r from-[#ff6b6b] to-[#ff8e53] bg-clip-text text-transparent">Offer</span>
          </h2>
          <p className="text-gray-400 text-lg">Services tailored to your needs</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={item}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Glassmorphism Card */}
              <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:bg-white/10 hover:border-[#ff6b6b]/50 hover:shadow-2xl hover:shadow-[#ff6b6b]/20">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#ff6b6b]/20 to-[#ff8e53]/20 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="text-[#ff6b6b]" size={32} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#ff6b6b] to-[#ff8e53]"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b6b]/0 to-[#ff8e53]/0 group-hover:from-[#ff6b6b]/5 group-hover:to-[#ff8e53]/5 rounded-2xl transition-all duration-300 -z-10"></div>
              </div>

              {/* Background Blur Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b6b]/0 to-[#ff8e53]/0 group-hover:from-[#ff6b6b]/10 group-hover:to-[#ff8e53]/10 rounded-2xl blur-2xl transition-all duration-300 -z-20"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
