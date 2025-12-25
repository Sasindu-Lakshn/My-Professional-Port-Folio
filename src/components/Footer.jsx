import { motion } from "framer-motion"
import UniversityLogo from "../assets/university-logo.png"

import {
    Github,
    Linkedin,
    Mail,
    ArrowUp,
    Briefcase,
    Phone,
    MessageCircle,
    GraduationCap,
} from "lucide-react"

const iconHover = {
    hover: {
        y: -4,
        scale: 1.15,
        transition: { type: "spring", stiffness: 300 },
    },
}

const Footer = () => {
    return (
        <>
            {/* FLOATING HIRE ME BUTTON */}
            <motion.a
                href="#contact"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.4 }}
                className="
          fixed bottom-5 right-5 md:bottom-10 md:right-10 z-[999]
          inline-flex items-center gap-2
          px-4 py-2 md:px-6 md:py-3 rounded-full
          bg-gradient-to-r from-blue-600 to-purple-600
          text-white font-semibold text-sm md:text-base
          shadow-lg shadow-blue-600/30
          hover:shadow-purple-600/40
          hover:scale-110 transition-all duration-300
        "
            >
                <Briefcase size={18} />
                Hire Me
            </motion.a>

            {/* FOOTER */}
            <motion.footer
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="
          relative overflow-hidden
          bg-gray-50 dark:bg-gray-950
          border-t border-gray-200 dark:border-gray-800
        "
            >
                {/* DOT GRID */}
                <div
                    className="
            absolute inset-0
            bg-[radial-gradient(circle,rgba(0,0,0,0.04)_1px,transparent_1px)]
            dark:bg-[radial-gradient(circle,rgba(255,255,255,0.06)_1px,transparent_1px)]
            [background-size:22px_22px]
            opacity-40
          "
                />

                {/* SOFT GLOW */}
                <div className="absolute inset-x-0 -top-28 h-44 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl" />

                <div className="relative max-w-7xl mx-auto px-6 py-10 md:py-16">

                    {/* MAIN GRID */}
                    <div className="grid gap-10 md:gap-14 md:grid-cols-3 items-start">

                        {/* BRAND */}
                        <div className="space-y-4 text-center md:text-left">
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Sasindu Lakshan
                            </h3>
                            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 max-w-sm mx-auto md:mx-0">
                                Full Stack Developer building modern, scalable and high-quality web applications.
                            </p>

                            {/* UNIVERSITY */}
                            <div className="flex items-center justify-center md:justify-start gap-3">
                                <img
                                    src={UniversityLogo}
                                    alt="University of Vavuniya Logo"
                                    className="h-8 w-auto object-contain"
                                />
                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                    University of Vavuniya
                                </span>
                            </div>

                        </div>

                        {/* QUICK LINKS */}
                        <nav className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-10 text-sm font-medium text-gray-600 dark:text-gray-400">
                            <a href="#home" className="hover:text-blue-600 transition">Home</a>
                            <a href="#about" className="hover:text-blue-600 transition">About</a>
                            <a href="#projects" className="hover:text-blue-600 transition">Projects</a>
                            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
                        </nav>

                        {/* CONTACT + SOCIAL */}
                        <div className="space-y-5 text-sm text-gray-600 dark:text-gray-400 text-center md:text-left">

                            {/* CONTACT DETAILS */}
                            <div className="space-y-3">
                                <div className="flex items-center justify-center md:justify-start gap-3">
                                    <Phone size={16} className="text-green-600" />
                                    <span>+94 76 258 0832</span>
                                </div>

                                <a
                                    href="https://wa.me/94762580832"
                                    target="_blank"
                                    className="flex items-center justify-center md:justify-start gap-3 hover:text-green-600 transition"
                                >
                                    <MessageCircle size={16} className="text-green-500" />
                                    WhatsApp
                                </a>

                                <a
                                    href="mailto:sasindu125lakshan@gmail.com"
                                    className="flex items-center justify-center md:justify-start gap-3 hover:text-red-500 transition"
                                >
                                    <Mail size={16} />
                                    sasindu125lakshan@gmail.com
                                </a>
                            </div>

                            {/* SOCIAL ICONS */}
                            <div className="flex items-center justify-center md:justify-start gap-6 pt-2">
                                <motion.a
                                    variants={iconHover}
                                    whileHover="hover"
                                    href="https://github.com/"
                                    target="_blank"
                                    className="hover:text-black dark:hover:text-white"
                                >
                                    <Github />
                                </motion.a>

                                <motion.a
                                    variants={iconHover}
                                    whileHover="hover"
                                    href="https://linkedin.com/"
                                    target="_blank"
                                    className="hover:text-blue-600"
                                >
                                    <Linkedin />
                                </motion.a>

                                <motion.a
                                    variants={iconHover}
                                    whileHover="hover"
                                    href="#home"
                                    className="
                    inline-flex items-center justify-center
                    w-10 h-10 rounded-full
                    border border-gray-300 dark:border-gray-700
                    hover:bg-gray-100 dark:hover:bg-gray-800
                  "
                                >
                                    <ArrowUp size={16} />
                                </motion.a>
                            </div>
                        </div>
                    </div>

                    {/* COPYRIGHT */}
                    <div
                        className="
              mt-14 pt-6
              border-t border-gray-200 dark:border-gray-800
              text-center text-xs tracking-wide
              text-gray-500 dark:text-gray-400
            "
                    >
                        © {new Date().getFullYear()} Sasindu Lakshan — Crafted with React & Tailwind CSS
                    </div>
                </div>
            </motion.footer>
        </>
    )
}

export default Footer
