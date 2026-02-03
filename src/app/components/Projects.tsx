import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import {
    fadeUp,
    staggerContainer,
    staggerItem,
    lift,
    viewportConfig,
    buttonTap,
} from "@/utils/animation-utils";

interface Project {
    id: number;
    title: string;
    description: string;
    longDescription: string;
    image: string;
    tags: string[];
    liveUrl?: string;
    githubUrl?: string;
}

export function Projects() {
    const [expandedProject, setExpandedProject] = useState<number | null>(null);

    const projects: Project[] = [
        {
            id: 1,
            title: "Kheti Bharat",
            description: "Kheti Bharat website is for farmers",
            longDescription:
                "KhetiBharat is an integrated nature-farming ecosystem that directly connects farmers and families. ",
            image: "/imgs/k.png",
            tags: ["Next.js", "Tailwind", "Stripe"],
            liveUrl: "https://khetibharat.vercel.app/",
            githubUrl: "#",
        },
        {
            id: 2,
            title: "RKapsilan Research lab",
            description: "RKapsilan Research lab website built with wixstudios",
            longDescription:
                " website built with wixstudios and hosted on wixstudios",
            image: "/imgs/rk.png",
            tags: ["wixstudios"],
            liveUrl: "https://www.rkapsilan.com/",
            githubUrl: "#",
        },
        // {
        //     id: 3,
        //     title: "Analytics Dashboard",
        //     description: "Real-time data visualization and insights",
        //     longDescription:
        //         "An interactive analytics dashboard with charts, tables, and backend integration.",
        //     image: "/projects/dashboard.png",
        //     tags: ["React", "Node.js", "PostgreSQL"],
        //     liveUrl: "#",
        //     githubUrl: "#",
        // },
    ];

    const toggleProject = (id: number) => {
        setExpandedProject(expandedProject === id ? null : id);
    };

    return (
        <section
            id="projects"
            className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12"
        >
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    variants={fadeUp(0, 30)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    className="text-center mb-14"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                        Featured <span className="text-gradient-primary">Projects</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Some of my real-world projects and client work
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    variants={staggerContainer(0.2)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportConfig}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project) => (
                        <motion.div key={project.id} variants={staggerItem}>
                            <motion.div
                                variants={lift}
                                initial="initial"
                                whileHover="hover"
                                whileTap="tap"
                                onClick={() => toggleProject(project.id)}
                                className="glass rounded-3xl overflow-hidden border border-white/10 hover:border-[#ff6b6b]/40 transition-all cursor-pointer"
                            >
                                {/* Image */}
                                <div className="relative h-52 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] via-transparent to-transparent" />
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-white mb-2">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                        {expandedProject === project.id
                                            ? project.longDescription
                                            : project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-5">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-lg text-gray-300"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex gap-3">
                                        {project.liveUrl && (
                                            <motion.a
                                                whileTap={buttonTap}
                                                href={project.liveUrl}
                                                onClick={(e) => e.stopPropagation()}
                                                className="flex-1 px-4 py-2 bg-gradient-to-r from-[#ff6b6b] to-[#ff8e53] text-white rounded-lg text-sm font-medium flex items-center justify-center gap-2"
                                            >
                                                <ExternalLink size={16} />
                                                Live
                                            </motion.a>
                                        )}
                                        {project.githubUrl && (
                                            <motion.a
                                                whileTap={buttonTap}
                                                href={project.githubUrl}
                                                onClick={(e) => e.stopPropagation()}
                                                className="px-4 py-2 glass rounded-lg text-sm font-medium flex items-center justify-center gap-2"
                                            >
                                                <Github size={16} />
                                                Code
                                            </motion.a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
