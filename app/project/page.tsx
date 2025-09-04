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

        {/* Card 1 */}
        <motion.div
          initial={{opacity: 0, y: 50}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1}}
          className="bg-[#495057] flex p-7 space-x-12 rounded-xl max-w-xl mx-auto"
        >
          {/* Image */}
          <Image
            src={Cuan}
            alt="Cuan Project"
            className="w-44 h-56 object-cover"
          >
          </Image>
          {/* Text */}
          <div className="space-y-4 text-white">
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