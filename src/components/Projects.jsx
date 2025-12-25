import { useState } from "react"
import { motion } from "framer-motion"
import {
    Github,
    ExternalLink,
    Filter,
    Server,
    Layout,
    Layers
} from "lucide-react"

const projectsData = [
    {
        title: "RideSmart – Smart Transport System",
        description:
            "A full stack smart transport and ride management system with modern UI and RESTful APIs.",
        image: "/projects/ridesmart.jpg",
        tech: ["React", "Tailwind", "Node.js", "REST API"],
        category: "fullstack",
        github: "https://github.com/",
        live: null, // demo unavailable
    },
    {
        title: "Personal Portfolio Website",
        description:
            "A modern and responsive portfolio showcasing my projects, skills and experience.",
        image: "/projects/portfolio.jpg",
        tech: ["React", "Tailwind", "Framer Motion"],
        category: "frontend",
        github: "https://github.com/",
        live: "https://your-portfolio.vercel.app", // ✅ YOUR REAL PORTFOLIO LINK
    },
    {
        title: "Weather App (Python + API)",
        description:
            "A weather forecasting application built using Python and external APIs with real-time data.",
        image: "/projects/whether.jpg",
        tech: ["Python", "API", "Flask"],
        category: "backend",
        github: "https://github.com/Sasindu-Lakshn/Simple-Python-Whether-App",
        live: "https://simple-python-whether-app.vercel.app/",
    },
]

const filters = [
    { label: "All", value: "all", icon: Filter },
    { label: "Frontend", value: "frontend", icon: Layout },
    { label: "Full Stack", value: "fullstack", icon: Layers },
    { label: "Backend", value: "backend", icon: Server },
]

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState("all")

    const filteredProjects =
        activeFilter === "all"
            ? projectsData
            : projectsData.filter(p => p.category === activeFilter)

    return (
        <section
            id="projects"
            className="
        relative py-28
        bg-gradient-to-b from-white via-gray-50 to-gray-100
        dark:from-gray-950 dark:via-gray-900 dark:to-gray-950
      "
        >
            {/* BACKGROUND GLOW */}
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-3xl rounded-full" />

            <div className="relative max-w-7xl mx-auto px-6">
                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold">
                        My Work
                    </p>

                    <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mt-3">
                        Selected Projects
                    </h2>

                    <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        A curated collection of frontend, backend and full stack
                        projects demonstrating my technical skills and problem-solving
                        approach.
                    </p>
                </motion.div>

                {/* FILTERS */}
                <div className="flex justify-center gap-4 mb-8 flex-wrap">
                    {filters.map(filter => {
                        const Icon = filter.icon
                        return (
                            <button
                                key={filter.value}
                                onClick={() => setActiveFilter(filter.value)}
                                className={`
                  inline-flex items-center gap-2
                  px-5 py-2 rounded-full text-sm font-medium
                  border transition
                  ${activeFilter === filter.value
                                        ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-600/30"
                                        : "bg-white/70 dark:bg-gray-900/70 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
                                    }
                `}
                            >
                                <Icon size={16} />
                                {filter.label}
                            </button>
                        )
                    })}
                </div>

                {/* COUNT */}
                <p className="text-center text-sm text-gray-500 mb-12">
                    Showing {filteredProjects.length} project(s)
                </p>

                {/* GRID */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="
                group rounded-3xl
                bg-white/70 dark:bg-gray-900/70
                backdrop-blur-xl
                border border-gray-200/50 dark:border-gray-800
                overflow-hidden
                shadow-lg hover:shadow-2xl
                transition
              "
                        >
                            {/* IMAGE */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                                />

                                {!project.live && (
                                    <span className="absolute top-3 right-3 text-xs px-3 py-1 rounded-full bg-black/70 text-white">
                                        Demo Unavailable
                                    </span>
                                )}
                            </div>

                            {/* CONTENT */}
                            <div className="p-6 space-y-4">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                    {project.title}
                                </h3>

                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* TECH */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* LINKS */}
                                <div className="flex items-center gap-6 pt-3">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
                                    >
                                        <Github size={18} /> Code
                                    </a>

                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:underline"
                                        >
                                            <ExternalLink size={18} /> Live
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
