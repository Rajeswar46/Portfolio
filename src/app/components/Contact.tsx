import { motion } from "motion/react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { useState } from "react";
import {
  fadeUp,
  slideInLeft,
  slideInRight,
  viewportConfig,
  glow,
  buttonTap,
} from "@/utils/animation-utils";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rajeswar00012@gmail.com",
      href: "mailto:rajeswar00012@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6301918181",
      href: "tel:+916301918181",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, Telangana, India",
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/Rajeshwar00012",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/rajeswar-k-81264531a",
    },
    {
      icon: Twitter,
      label: "Twitter",
      url: "https://twitter.com",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    const whatsappMessage = `
👋 New Project Inquiry

👤 Name: ${name}
📧 Email: ${email}
📌 Subject: ${subject}

📝 Message:
${message}
    `;

    const phoneNumber = "916301918181"; // WhatsApp number (without +)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");

    // Optional: reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={fadeUp(0, 30)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-gradient-primary">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Let’s work together on your next project
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* LEFT */}
          <motion.div
            variants={slideInLeft(0, 50)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <motion.a
                    key={info.label}
                    href={info.href || "#"}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-4 text-gray-400 hover:text-white transition-all"
                  >
                    <div className="w-14 h-14 rounded-xl glass flex items-center justify-center border border-white/10">
                      <info.icon className="text-[#ff6b6b]" size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">
                        {info.label}
                      </div>
                      <div className="text-white font-medium">
                        {info.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* SOCIALS */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 rounded-xl glass flex items-center justify-center border border-white/10 hover:border-[#ff6b6b]/50"
                  >
                    <social.icon
                      className="text-gray-400 hover:text-[#ff6b6b]"
                      size={20}
                    />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT – FORM */}
          <motion.div
            variants={slideInRight(0, 50)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="glass px-4 py-4 rounded-xl text-white border border-white/10"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                  className="glass px-4 py-4 rounded-xl text-white border border-white/10"
                />
              </div>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Project subject"
                required
                className="glass px-4 py-4 rounded-xl text-white border border-white/10 w-full"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                placeholder="Tell me about your project..."
                required
                className="glass px-4 py-4 rounded-xl text-white border border-white/10 w-full resize-none"
              />

              <motion.button
                type="submit"
                variants={glow}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="w-full py-4 bg-gradient-to-r from-[#ff6b6b] to-[#ff8e53] rounded-xl text-white font-semibold flex items-center justify-center gap-2"
              >
                Send on WhatsApp
                <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
