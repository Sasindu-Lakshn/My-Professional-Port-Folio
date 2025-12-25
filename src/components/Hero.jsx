import { motion } from "framer-motion"
import {
    ArrowRight,
    Download,
    Github,
    Linkedin,
    Mail,
    Briefcase,
    Code2,
    Server,
} from "lucide-react"
import { useTypewriter, Cursor } from "react-simple-typewriter"

const Home = () => {
    const [text] = useTypewriter({
        words: [
            "Full Stack Developer",
            "Frontend • React • Tailwind",
            "Backend • Node • APIs",
            "Building Scalable Web Apps",
            "Turning Ideas into Code",
        ],
        loop: true,
        delaySpeed: 2000,
        typeSpeed: 80,
        deleteSpeed: 50,
    })

    return (
        <section
            id="home"
            className="
        relative min-h-screen flex items-center
        bg-gradient-to-b from-white via-gray-50 to-gray-100
        dark:from-gray-950 dark:via-gray-900 dark:to-gray-950
        overflow-hidden
      "
        >
            {/* BACKGROUND GLOWS */}
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
            <div className="absolute top-1/2 -right-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    {/* NAME + OPEN TO WORK */}
                    <div className="flex items-center gap-4 flex-wrap">
                        <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold leading-tight">
                            Hi, I’m{" "}
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Sasindu Lakshan
                            </span>
                        </h1>

                        <span className="
              inline-flex items-center gap-2
              px-4 py-1.5 rounded-full
              bg-green-100 dark:bg-green-900/30
              text-green-700 dark:text-green-400
              text-sm font-medium
              whitespace-nowrap
            ">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
                            </span>
                            Open to Work
                        </span>
                    </div>

                    {/* TYPING ROLE – MOVED DOWN */}
                    <div className="
            inline-block mt-2
            px-5 py-2
            rounded-full
            bg-blue-100/70 dark:bg-blue-900/30
            text-blue-700 dark:text-blue-300
            text-sm font-semibold tracking-wide
          ">
                        {text}
                        <Cursor cursorStyle="|" />
                    </div>

                    {/* DESCRIPTION */}
                    <p className="
            text-lg leading-relaxed
            text-gray-700 dark:text-gray-300
            max-w-xl
          ">
                        I’m a{" "}
                        <span className="font-semibold text-gray-900 dark:text-white">
                            Full Stack Developer
                        </span>{" "}
                        focused on building modern, scalable and user-friendly web
                        applications using{" "}
                        <span className="text-blue-600 dark:text-blue-400 font-medium">
                            React, Tailwind CSS, Node.js
                        </span>{" "}
                        and APIs.
                    </p>

                    {/* TECH ROW */}
                    <div className="flex flex-wrap gap-8 pt-2 text-gray-700 dark:text-gray-300">
                        <div className="flex items-center gap-2">
                            <Code2 size={20} className="text-blue-600" />
                            <span className="text-sm font-medium">Frontend</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <Server size={20} className="text-purple-600" />
                            <span className="text-sm font-medium">Backend</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <Briefcase size={20} className="text-green-600" />
                            <span className="text-sm font-medium">Real Projects</span>
                        </div>
                    </div>

                    {/* CTA BUTTONS */}
                    <div className="flex flex-wrap gap-4 pt-4">
                        <a
                            href="#projects"
                            className="
                inline-flex items-center gap-2
                px-7 py-3 rounded-2xl
                bg-blue-600 text-white font-medium
                shadow-lg shadow-blue-600/30
                hover:bg-blue-700 hover:scale-[1.03]
                transition
              "
                        >
                            View Projects <ArrowRight size={18} />
                        </a>

                        <a
                            href="/Sasindu-Lakshan-CV.pdf"
                            download
                            className="
                inline-flex items-center gap-2
                px-7 py-3 rounded-2xl
                border border-gray-300 dark:border-gray-700
                text-gray-800 dark:text-gray-200
                hover:bg-gray-100 dark:hover:bg-gray-800
                hover:scale-[1.03]
                transition
              "
                        >
                            Download CV <Download size={18} />
                        </a>
                    </div>

                    {/* SOCIAL LINKS */}
                    <div className="flex gap-6 pt-4 text-gray-600 dark:text-gray-400">
                        <a href="https://github.com/" target="_blank" className="hover:text-black dark:hover:text-white transition">
                            <Github />
                        </a>
                        <a href="https://linkedin.com/" target="_blank" className="hover:text-blue-600 transition">
                            <Linkedin />
                        </a>
                        <a href="mailto:youremail@gmail.com" className="hover:text-red-500 transition">
                            <Mail />
                        </a>
                    </div>
                </motion.div>

                {/* RIGHT DECOR */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="hidden lg:flex justify-center"
                >
                    <div className="
            relative w-80 h-80 rounded-full
            bg-gradient-to-r from-blue-500 to-purple-600
            blur-2xl opacity-40
          " />
                </motion.div>

            </div>
        </section>
    )
}

export default Home
