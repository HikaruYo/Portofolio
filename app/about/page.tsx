'use client'

import { motion } from "framer-motion";
import Me from "@/public/me.jpg"
import Image from "next/image";

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
          className="flex flex-col md:flex-1 text-left md:text-left gap-6"
        >
          <motion.div
            initial={{opacity: 0, y: -50}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1}}
          >
            <h2 className="text-4xl font-bold">About <span className="text-gray-600 dark:text-gray-400 transition duration-500">Me!</span></h2>
          </motion.div>
          <motion.div
            initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1}}
          >
            <p>
              { text }
            </p>
          </motion.div>
        </div>

        {/* Right Content */}
        <motion.div
          initial={{opacity: 0, x: 50}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 1}}
          className="md:flex-1 w-[300px] h-[350px] rounded-3xl overflow-hidden shadow-lg"
        >
          <Image
            src={Me}
            alt="profile"
            width={837}
            height={966}
            className="w-full h-full object-cover"
          />
        </motion.div>

      </div>

    </main>
  )
}