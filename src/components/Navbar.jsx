import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const sections = ["home", "about", "skills", "projects", "contact"]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [darkMode, setDarkMode] = useState(false)
    const [active, setActive] = useState("home")
    const menuRef = useRef(null)

    /* DARK MODE */
    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode)
    }, [darkMode])

    /* LOCK SCROLL WHEN MENU OPEN */
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto"
    }, [isOpen])

    /* ACTIVE SECTION */
    useEffect(() => {
        const onScroll = () => {
            sections.forEach(id => {
                const el = document.getElementById(id)
                if (!el) return
                const top = el.offsetTop - 120
                const bottom = top + el.offsetHeight
                if (window.scrollY >= top && window.scrollY < bottom) {
                    setActive(id)
                }
            })
        }
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    /* CLOSE ON OUTSIDE CLICK */
    useEffect(() => {
        if (!isOpen) return
        const handle = e => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener("mousedown", handle)
        return () => document.removeEventListener("mousedown", handle)
    }, [isOpen])

    const handleScroll = id => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
        setIsOpen(false)
    }

    return (
        <nav className="
      fixed top-0 w-full z-[999]
      bg-white/80 dark:bg-[#0B1020]/80
      backdrop-blur-xl
      border-b border-slate-200/50 dark:border-white/10
    ">
            <div className="max-w-7xl mx-auto px-4 md:px-6 h-[72px] flex items-center justify-between">

                {/* LOGO */}
                <h1
                    onClick={() => handleScroll("home")}
                    className="
            text-xl md:text-2xl font-extrabold cursor-pointer
            bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600
            bg-clip-text text-transparent
          "
                >
                    Sasindu Lakshan
                </h1>

                {/* DESKTOP MENU */}
                <ul className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700 dark:text-slate-200">
                    {sections.map(item => (
                        <li
                            key={item}
                            onClick={() => handleScroll(item)}
                            className={`relative cursor-pointer transition-all
                ${active === item
                                    ? "text-blue-600 dark:text-purple-400 after:w-full"
                                    : "hover:text-blue-500 dark:hover:text-purple-300"}
                after:absolute after:-bottom-1 after:left-0 after:h-[2px]
                after:bg-gradient-to-r after:from-blue-500 after:to-purple-500
                after:w-0 after:transition-all`}
                        >
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </li>
                    ))}

                    {/* 🔆🌙 DARK MODE */}
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="
              ml-3 w-9 h-9 rounded-full
              flex items-center justify-center
              bg-gradient-to-br from-slate-100 to-slate-200
              dark:from-purple-500/20 dark:to-blue-500/20
              border border-slate-200 dark:border-white/10
              text-lg hover:scale-110 transition
            "
                    >
                        {darkMode ? "🔆" : "🌙"}
                    </button>
                </ul>

                {/* MOBILE ACTIONS */}
                <div className="md:hidden flex items-center gap-2">
                    {/* 🔆🌙 */}
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="
              w-10 h-10 rounded-full
              bg-gradient-to-br from-slate-100 to-slate-200
              dark:from-purple-500/20 dark:to-blue-500/20
              border border-slate-200 dark:border-white/10
              text-lg
              flex items-center justify-center
            "
                    >
                        {darkMode ? "🔆" : "🌙"}
                    </button>

                    {/* MENU */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="
              w-11 h-11 rounded-xl
              bg-gradient-to-br from-blue-600 to-purple-600
              text-white shadow-lg shadow-blue-500/30
              flex items-center justify-center
            "
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        ref={menuRef}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="
              md:hidden fixed top-[80px] left-4 right-4
              rounded-2xl bg-white dark:bg-[#0B1020]
              shadow-2xl border border-slate-200/50 dark:border-white/10
            "
                    >
                        <ul className="flex flex-col p-6 space-y-4 text-slate-700 dark:text-slate-200 font-medium">
                            {sections.map(item => (
                                <li
                                    key={item}
                                    onClick={() => handleScroll(item)}
                                    className="hover:text-blue-600 dark:hover:text-purple-400"
                                >
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar
