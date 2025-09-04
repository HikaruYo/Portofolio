'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import Cuan from "@/public/Cuan.jpg";
import { HiOutlineExternalLink } from "react-icons/hi";

export default function AboutPage() {
  const desk = [
    "Cuan app adalah aplikasi pencatatan keuangan untuk toko kelontong, proyek ini dibuat oleh kelompok 3 PJBL kelas XI PPLG 1."
  ]

  return (
    <main className="min-h-screen flex text-black dark:text-white transition duration-500">

      {/* Main Content */}
      <div className="grid w-full place-content-center items-center">
        <motion.div
          initial={{opacity: 0, y: -50}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1}}
          className="mb-2 md:mb-6"
        >
          <h2 className="text-4xl text-center font-bold">My <span
            className="text-gray-600 dark:text-gray-400 transition duration-500">Project</span></h2>
        </motion.div>

        {/* Card 1 */}
        <motion.div
          initial={{opacity: 0, y: 50}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1}}
          className="bg-[#495057] flex flex-col md:flex-row p-2 md:p-7 md:space-x-10 rounded-xl md:max-w-xl mx-auto items-center justify-center"
        >
          {/* Image */}
          <Image
            src={Cuan}
            alt="Cuan Project"
            className="w-44 h-64 object-cover"
          >
          </Image>
          {/* Text */}
          <div className="space-y-4 text-white text-left p-6 md:p-0">
            <h3 className="text-3xl font-bold">Cuan: Catatan Keuangan</h3>
            <p>{ desk }</p>
            <div className="flex items-center justify-center w-full">
              <a
                href="https://github.com/MDAlviano/cuan-catatan-keuangan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <HiOutlineExternalLink
                  className="h-12 w-12 cursor-pointer hover:text-gray-200 dark:hover:text-gray-400 transition duration-500"/>
              </a>
            </div>

          </div>
        </motion.div
        >

      </div>

    </main>
  )
}