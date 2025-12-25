import { motion } from "framer-motion"
import { Code2, Briefcase, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"
import {
    FaReact,
    FaJsSquare,
    FaGitAlt,
    FaNodeJs
} from "react-icons/fa"
import { SiTailwindcss, SiMysql } from "react-icons/si"
import profileImg from "../assets/Profile.jpg"

// COUNTER
const Counter = ({ value, suffix = "", trigger }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!trigger) return
        let start = 0
        const duration = 1200
        const step = Math.max(Math.floor(duration / value), 20)

        const timer = setInterval(() => {
            start += 1
            setCount(start)
            if (start >= value) clearInterval(timer)
        }, step)

        return () => clearInterval(timer)
    }, [trigger, value])

    return (
        <>
            {count}
            {suffix}
        </>
    )
}

const About = () => {
    const [animate, setAnimate] = useState(false)

    return (
        <section
            id="about"
            className="
        py-32 overflow-hidden
        bg-gradient-to-b from-gray-50 via-white to-gray-100
        dark:from-gray-950 dark:via-gray-900 dark:to-gray-950
        text-gray-900 dark:text-white
      "
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20 max-w-3xl"
                >
                    <h2 className="text-5xl font-extrabold leading-tight">
                        About <span className="text-blue-600">Me</span>
                    </h2>

                    <p className="mt-6 text-lg text-gray-700 dark:text-gray-300">
                        I’m Sasindu Lakshan, a passionate software developer focused on
                        building modern and scalable web applications.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* PROFILE IMAGE */}
                    <div className="flex justify-center">
                        <div className="relative w-72 h-72">

                            {/* GRADIENT RING */}
                            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 blur-lg opacity-80 animate-spin-slow"></div>

                            {/* IMAGE */}
                            <img
                                src={profileImg}
                                alt="Sasindu Lakshan"
                                className="relative z-10 w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-2xl"
                            />

                            {/* ONLINE DOT */}
                            <span className="absolute bottom-5 right-5 z-20 flex h-4 w-4">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
                            </span>
                        </div>
                    </div>

                    {/* TEXT + TECH ICONS + STATS */}
                    <div className="space-y-10">

                        {/* DESCRIPTION */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            <p className="text-lg text-gray-700 dark:text-gray-300">
                                I specialize in frontend development, crafting responsive and
                                user-friendly interfaces with clean UI and simple logic.
                            </p>

                            <p className="text-lg text-gray-700 dark:text-gray-300">
                                Currently learning full-stack development and building real-world projects.
                            </p>

                            {/* ✅ TECH ICON ROW */}
                            <div className="flex flex-wrap gap-6 pt-4 text-3xl text-gray-700 dark:text-gray-300">
                                <FaReact className="text-cyan-500" title="React" />
                                <SiTailwindcss className="text-sky-500" title="Tailwind CSS" />
                                <FaJsSquare className="text-yellow-400" title="JavaScript" />
                                <FaNodeJs className="text-green-500" title="Node.js" />
                                <SiMysql className="text-blue-600" title="MySQL" />
                                <FaGitAlt className="text-orange-500" title="Git" />
                            </div>
                        </motion.div>

                        {/* STATS */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            onViewportEnter={() => setAnimate(true)}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
                        >
                            <div className="bg-white/80 dark:bg-gray-900/70 backdrop-blur-xl rounded-3xl p-6 shadow-lg">
                                <Code2 className="text-blue-600 mb-3" />
                                <h3 className="text-2xl font-bold">
                                    <Counter value={10} suffix="+" trigger={animate} />
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">Projects</p>
                            </div>

                            <div className="bg-white/80 dark:bg-gray-900/70 backdrop-blur-xl rounded-3xl p-6 shadow-lg">
                                <Briefcase className="text-purple-600 mb-3" />
                                <h3 className="text-2xl font-bold">
                                    <Counter value={3} suffix="+" trigger={animate} />
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">Years Learning</p>
                            </div>

                            <div className="bg-white/80 dark:bg-gray-900/70 backdrop-blur-xl rounded-3xl p-6 shadow-lg">
                                <Sparkles className="text-green-600 mb-3" />
                                <h3 className="text-2xl font-bold">
                                    <Counter value={100} suffix="%" trigger={animate} />
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">Passion</p>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
