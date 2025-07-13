'use client'

import { motion } from "framer-motion";
import { BiLogoPhp } from "react-icons/bi";
import { MdJavascript } from "react-icons/md";
import { SiFirebase } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-grow text-black dark:text-white transition duration-500 pb-20 md:pb-0">

      {/* Main Content */}
      <div className="w-full flex flex-col md:flex-row translate-y-14 md:translate-y-0 items-center py-6 gap-0 md:gap-14 justify-between">

        <motion.div
          initial={{opacity: 0, y: -50}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1}}
          className="flex w-36 h-36 items-center justify-center"
        >
          <BiLogoPhp
            className="w-24 h-24 hover:text-[#474A8A] transition duration-500"
          />
        </motion.div>
        <motion.div
          initial={{opacity: 0, y: 50}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1}}
          className="flex w-36 h-36 items-center justify-center"
        >
          <MdJavascript
            className="w-32 h-32 hover:text-[#F0DB4F] transition duration-500"
          />
        </motion.div>
        <motion.div
          initial={{opacity: 0, y: -50}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1}}
          className="flex w-36 h-36 items-center justify-center"
        >
          <SiFirebase
            className="w-16 h-16 hover:text-[#FF9100] transition duration-500"
          />
        </motion.div>
        <motion.div
          initial={{opacity: 0, y: 50}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1}}
          className="flex w-36 h-36 items-center justify-center"
        >
          <FaLaravel
            className="w-16 h-16 hover:text-[#F05340] transition duration-500"
          />
        </motion.div>
        <motion.div
          initial={{opacity: 0, y: -50}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1}}
          className="flex w-36 h-36 items-center justify-center"
        >
          <RiNextjsFill
            className="w-20 h-20 transition duration-500"
          />
        </motion.div>

      </div>

    </main>
  )
}