import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { fadeDown, buttonTap } from "@/utils/animation-utils";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const menuItems = [
        { name: "Home", id: "home" },
        { name: "About", id: "about" },
        { name: "Skills", id: "skills" },
        { name: "Projects", id: "projects" },
        { name: "Contact", id: "contact" },
    ];

    // ✅ Active section tracking (mobile safe)
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 120;

            for (const item of menuItems) {
                const section = document.getElementById(item.id);
                if (!section) continue;

                const top = section.offsetTop;
                const height = section.offsetHeight;

                if (scrollPosition >= top && scrollPosition < top + height) {
                    setActiveSection(item.id);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // ✅ MOBILE + DESKTOP SCROLL FIX
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (!element) return;

        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });

        // ✅ Close mobile menu AFTER scroll starts
        setTimeout(() => setIsMenuOpen(false), 700);
    };

    return (
        <motion.nav
            variants={fadeDown(0, 20)}
            initial="hidden"
            animate="visible"
            className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    {/* LOGO */}
                    <motion.button
                        whileTap={buttonTap}
                        onClick={() => scrollToSection("home")}
                        className="text-xl sm:text-2xl font-bold tracking-tight"
                    >
                        <span className="text-gradient-primary">Dev</span>
                        <span className="text-white">Portfolio</span>
                    </motion.button>

                    {/* DESKTOP MENU */}
                    <div className="hidden md:flex items-center gap-2">
                        {menuItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`relative px-4 py-2 rounded-lg transition-all tap-target ${activeSection === item.id
                                    ? "text-white bg-white/10"
                                    : "text-gray-400 hover:text-white hover:bg-white/5"
                                    }`}
                            >
                                {item.name}
                                {activeSection === item.id && (
                                    <motion.div
                                        layoutId="activeSection"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#ff6b6b] to-[#ff8e53]"
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* MOBILE BUTTON */}
                    <motion.button
                        whileTap={buttonTap}
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        className="md:hidden p-2 text-white rounded-lg hover:bg-white/10 tap-target-lg"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.button>
                </div>
            </div>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden glass-strong border-t border-white/5"
                    >
                        <div className="px-4 py-3 space-y-1">
                            {menuItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`w-full text-left px-4 py-3 rounded-lg tap-target ${activeSection === item.id
                                        ? "text-white bg-white/10 font-medium"
                                        : "text-gray-400 hover:text-white hover:bg-white/5"
                                        }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <span>{item.name}</span>
                                        {activeSection === item.id && (
                                            <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#ff6b6b] to-[#ff8e53]" />
                                        )}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
