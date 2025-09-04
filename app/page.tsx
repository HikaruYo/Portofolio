'use client'

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Violet from "@/public/Violet.jpg"
import { FaGithub, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import {ReactTyped} from "react-typed";

export default function Home() {
  return (
    <main className="relative h-[100dvh] md:min-h-screen flex text-black dark:text-white transition duration-500">

      {/* Main Content */}
      <div
        className="absolute top-36 -left-10 w-72 h-72 bg-gray-500 dark:bg-[#252525] rounded-full mix-blend-multiply filter blur-xl dark:blur-2xl opacity-70 dark:opacity-90 animate-blob"></div>
      <div
        className="absolute top-60 left-8 w-72 h-72 bg-gray-600 dark:bg[#00111c] rounded-full mix-blend-multiply filter blur-xl opacity-60 dark:opacity-90 animate-blob animation-delay-3"></div>

      <div
        className="flex flex-col translate-y-14 md:translate-y-0 md:top-0 md:flex-row items-center py-6 gap-10 md:gap-24">

        {/* Profile Image */}
        <motion.div
          initial={{opacity: 0, x: -50}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 1}}
          className="w-[300px] h-[300px] md:w-[350px] rounded-3xl overflow-hidden shadow-lg"
        >
          <Image
            src={Violet}
            alt="profile"
            width={620}
            height={620}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Text Content */}
        <div
          className="flex flex-col text-left gap-1 md:gap-2"
        >
          <motion.h2
            initial={{opacity: 0, y: -50}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1}}
            className="text-2xl md:text-2xl font-semibold"
          >
            Hello, I’m
          </motion.h2>
          <motion.h1
            initial={{opacity: 0, x: 50}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 1}}
            className="text-3xl md:text-4xl font-extrabold mt-2"
          >
            Adithya Prasetio Hutahaean
          </motion.h1>
          <motion.div
            initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1}}
            className="flex flex-col md:flex-row justify-center md:justify-start gap-1 md:gap-2 mt-4"
          >
            <span className="text-xl md:text-2xl font-medium">And I&apos;m a</span>
            <span
              className="text-xl md:text-2xl font-bold text-[#212529]"
            >
                <ReactTyped
                  strings={[
                    "Web Developer",
                    "Backend Developer",
                  ]}
                  typeSpeed={70}
                  backSpeed={70}
                  loop
                  className="text-black dark:text-white transition duration-500"
                ></ReactTyped>
              </span>
          </motion.div>
          {/* Icons */}
          <motion.div
            initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1}}
            className="flex mt-4 justify-start space-x-4"
          >
            <Link href="https://github.com/HikaruYo">
              <FaGithub
                className="inline-flex justify-center items-center w-10 h-10 border-2 border-black dark:border-white rounded-full p-2 text-black dark:text-white hover:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black transition duration-500"
              />
            </Link>
            <Link href="https://www.instagram.com/adithaean/">
              <FaInstagram
                className="inline-flex justify-center items-center w-10 h-10 border-2 border-black dark:border-white rounded-full p-2 text-black dark:text-white hover:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black transition duration-500"
              />
            </Link>
          </motion.div>
        </div>
      </div>

    </main>
  );
}
