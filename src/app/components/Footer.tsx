import { Heart } from "lucide-react";
import { motion } from "motion/react";
import { buttonTap } from "@/utils/animation-utils";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-12 border-t border-white/5 safe-bottom">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          {/* Logo/Name - clickable to scroll to top */}
          <motion.button
            whileTap={buttonTap}
            onClick={scrollToTop}
            className="text-xl sm:text-2xl font-bold tracking-tight"
          >
            <span className="text-gradient-primary">Dev</span>
            <span className="text-white">Portfolio</span>
          </motion.button>

          {/* Copyright */}
          <div className="text-gray-400 text-sm sm:text-base flex items-center gap-2 text-center">
            © {currentYear} Rajeswar. Made with{" "}
            <Heart size={16} className="text-[#ff6b6b] fill-[#ff6b6b] inline" />{" "}
            and coffee
          </div>

          {/* Links - Optional */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400">
            <a
              href="#"
              className="hover:text-white transition-colors tap-target"
            >
              Privacy Policy
            </a>
            <span className="text-gray-600">•</span>
            <a
              href="#"
              className="hover:text-white transition-colors tap-target"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
