'use client'

import { motion } from "framer-motion";
import Me from "@/public/me.jpg"
import {SiFirebase} from "react-icons/si";
import {FaLaravel} from "react-icons/fa";
import {RiNextjsFill} from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiPhp } from "react-icons/si";

export default function AboutPage() {
  const text = [
    "I'm Adithya Prasetio Hutahaean, an aspiring developer with a strong interest in technology and programming. " +
    "I have some experience working with Next.js, Laravel, and Firebase. " +
    "Currently, I'm highly interested in mobile app development and continuously learning to expand my skills across different platforms."
  ]

  return (
    <main className="min-h-screen flex text-black dark:text-white transition duration-500">

      {/* Main Content */}
      <div className="flex flex-col md:flex-row translate-y-14 md:translate-y-0 items-center py-6 gap-14 md:gap-24">

        {/* Left Content */}
        <div
          className="flex flex-col md:flex-1 md:text-left gap-6"
        >
          <motion.div
            initial={{opacity: 0, y: -50}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1}}
          >
            <h2 className="text-4xl text-right font-bold">About <span className="text-gray-600 dark:text-gray-400 transition duration-500">Me!</span></h2>
          </motion.div>
          <motion.div
            initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1}}
          >
            <p className="text-justify">
              { text }
            </p>
          </motion.div>
        </div>

        {/* Right Content */}
        <div className="">
          <motion.h3
            initial={{opacity: 0, x: 50}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 1}}
            className="text-2xl text-gray-300 font-bold pb-4"
          >
            Tech Stack
          </motion.h3>

          <div className="grid grid-cols-3 gap-x-10 gap-y-2">
            <motion.div
              initial={{opacity: 0, y: -50}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 1}}
              className="flex w-20 h-20 items-center justify-center"
            >
              <SiPhp
                className="w-16 h-16 hover:text-[#474A8A] transition duration-500"
              />
            </motion.div>
            <motion.div
              initial={{opacity: 0, y: -50}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 1, delay: 0.2}}
              className="flex w-20 h-20 items-center justify-center"
            >
              <IoLogoJavascript
                className="w-16 h-16 hover:text-[#F0DB4F] transition duration-500"
              />
            </motion.div>
            <motion.div
              initial={{opacity: 0, y: -50}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 1, delay: 0.4}}
              className="flex w-20 h-20 items-center justify-center"
            >
              <SiFirebase
                className="w-14 h-14 hover:text-[#FF9100] transition duration-500"
              />
            </motion.div>
            <motion.div
              initial={{opacity: 0, y: -50}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 1, delay: 0.6}}
              className="flex w-20 h-20 items-center justify-center"
            >
              <FaLaravel
                className="w-14 h-14 hover:text-[#F05340] transition duration-500"
              />
            </motion.div>
            <motion.div
              initial={{opacity: 0, y: -50}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 1, delay: 0.8}}
              className="flex w-20 h-20 items-center justify-center"
            >
              <RiNextjsFill
                className="w-16 h-16 hover:text-[#495057] dark:hover:text-black transition duration-500"
              />
            </motion.div>
          </div>
        </div>
      </div>

    </main>
  )
}