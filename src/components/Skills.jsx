import { motion } from "framer-motion"
import { useState } from "react"

// TECH ICONS (SAFE IMPORTS)
import {
    SiJavascript,
    SiPython,
    SiCplusplus,
    SiHtml5,
    SiCss3,
    SiMysql,
    SiPostgresql,
    SiMongodb,
    SiFirebase,
    SiGithub,
    SiVercel,
    SiApollographql
} from "react-icons/si"

import { FaJava } from "react-icons/fa"
import { Code, Monitor, Database, Layers } from "lucide-react"

// Skill level label
const levelLabel = (level) => {
    if (level >= 80) return "Advanced"
    if (level >= 60) return "Intermediate"
    return "Beginner"
}

const skillCategories = [
    {
        title: "Programming Languages",
        filter: "backend",
        icon: <Code size={24} />,
        color: "from-purple-500 to-pink-500",
        bg: "bg-purple-50 dark:bg-purple-900/20",
        skills: [
            { name: "JavaScript", level: 70, icon: <SiJavascript className="text-yellow-500" /> },
            { name: "Python", level: 50, icon: <SiPython className="text-blue-500" /> },
            { name: "Java", level: 50, icon: <FaJava className="text-red-600" /> },
            { name: "C / C++", level: 50, icon: <SiCplusplus className="text-blue-600" /> },
        ],
    },
    {
        title: "Web Development",
        filter: "frontend",
        icon: <Monitor size={24} />,
        color: "from-blue-500 to-cyan-500",
        bg: "bg-blue-50 dark:bg-blue-900/20",
        skills: [
            { name: "HTML", level: 90, icon: <SiHtml5 className="text-orange-600" /> },
            { name: "CSS", level: 90, icon: <SiCss3 className="text-blue-600" /> },
        ],
    },
    {
        title: "Databases",
        filter: "backend",
        icon: <Database size={24} />,
        color: "from-green-500 to-emerald-500",
        bg: "bg-green-50 dark:bg-green-900/20",
        skills: [
            { name: "MySQL", level: 50, icon: <SiMysql className="text-blue-700" /> },
            { name: "PostgreSQL", level: 50, icon: <SiPostgresql className="text-sky-600" /> },
            { name: "MongoDB", level: 50, icon: <SiMongodb className="text-green-600" /> },
            { name: "Firebase", level: 50, icon: <SiFirebase className="text-yellow-500" /> },
        ],
    },
    {
        title: "Others",
        filter: "tools",
        icon: <Layers size={24} />,
        color: "from-orange-500 to-yellow-500",
        bg: "bg-orange-50 dark:bg-orange-900/20",
        skills: [
            { name: "Git & GitHub", level: 70, icon: <SiGithub /> },
            { name: "API Integration", level: 65, icon: <SiApollographql className="text-purple-500" /> },
            { name: "Vercel", level: 75, icon: <SiVercel /> },
        ],
    },
]

const filters = ["all", "frontend", "backend", "tools"]

const Skills = () => {
    const [activeFilter, setActiveFilter] = useState("all")

    return (
        <section id="skills" className="py-28 bg-gray-100 dark:bg-gray-950 text-gray-900 dark:text-white">
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-4xl font-bold text-center mb-10">
                    My <span className="text-blue-600">Skills</span>
                </h2>

                {/* Filter Tabs */}
                <div className="flex justify-center gap-4 mb-16 flex-wrap">
                    {filters.map((f) => (
                        <button
                            key={f}
                            onClick={() => setActiveFilter(f)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition
              ${activeFilter === f
                                    ? "bg-blue-600 text-white"
                                    : "bg-white dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                                }`}
                        >
                            {f.toUpperCase()}
                        </button>
                    ))}
                </div>

                {/* Skill Cards */}
                <div className="grid gap-10 md:grid-cols-2">
                    {skillCategories
                        .filter(cat => activeFilter === "all" || cat.filter === activeFilter)
                        .map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg"
                            >

                                <div className="flex items-center gap-3 mb-8">
                                    <div className={`p-3 rounded-xl text-white bg-gradient-to-r ${category.color}`}>
                                        {category.icon}
                                    </div>
                                    <h3 className="text-2xl font-semibold">{category.title}</h3>
                                </div>

                                {/* AUTO SORTED + TOOLTIP */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    {[...category.skills]
                                        .sort((a, b) => b.level - a.level)
                                        .map(skill => (
                                            <motion.div
                                                key={skill.name}
                                                whileHover={{ scale: 1.05 }}
                                                className={`${category.bg} border border-gray-200 dark:border-gray-700 rounded-xl p-4 relative group`}
                                            >

                                                {/* TOOLTIP */}
                                                <div className="absolute -top-9 left-1/2 -translate-x-1/2
                          scale-0 group-hover:scale-100 transition
                          bg-black text-white text-xs px-3 py-1 rounded">
                                                    {levelLabel(skill.level)} • {skill.level}%
                                                </div>

                                                <div className="flex justify-between mb-2">
                                                    <div className="flex items-center gap-2 text-sm font-medium">
                                                        <span className="text-lg">{skill.icon}</span>
                                                        {skill.name}
                                                    </div>
                                                    <span className="text-xs text-gray-500">
                                                        {levelLabel(skill.level)}
                                                    </span>
                                                </div>

                                                <div className="w-full h-2 bg-white dark:bg-gray-800 rounded-full overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: `${skill.level}%` }}
                                                        transition={{ duration: 0.8 }}
                                                        className={`h-full bg-gradient-to-r ${category.color}`}
                                                    />
                                                </div>
                                            </motion.div>
                                        ))}
                                </div>

                            </motion.div>
                        ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
