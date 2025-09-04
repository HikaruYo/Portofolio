'use client'

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import ModeToggle from "@/app/components/modeToggle"

export default function Navbar() {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // initialize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const links = (
    <div className="flex flex-col md:flex-row justify-between gap-y-4 md:gap-10 text-lg md:items-center">
      <Link
        href="/"
        className={`nav-link ${pathname === "/" ? "active" : ""}`}
        onClick={() => setMenuOpen(false)}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={`nav-link ${pathname === "/about" ? "active" : ""}`}
        onClick={() => setMenuOpen(false)}
      >
        About
      </Link>
      <Link
        href="/project"
        className={`nav-link ${pathname === "/project" ? "active" : ""}`}
        onClick={() => setMenuOpen(false)}
      >
        Project
      </Link>
      {/*<Link*/}
      {/*  href="/contact"*/}
      {/*  className={`nav-link ${pathname === "/contact" ? "active" : ""}`}*/}
      {/*  onClick={() => setMenuOpen(false)}*/}
      {/*>*/}
      {/*  Contact*/}
      {/*</Link>*/}
    </div>
  );

  return (
    <>
      {/* Mobile View */}
      {isMobile ? (
        <div className="flex flex-1 justify-end items-center w-full">
          {/* Hamburger Button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-white">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Mobile Menu */}
          {menuOpen && (
            <div
              className="absolute top-[50px] left-0 w-full bg-[#495057] shadow-md px-8 py-6 z-40 flex flex-col gap-8 text-white text-base font-medium"
            >
              {links}
              <ModeToggle />
            </div>
          )}
        </div>
      ) : (
        // Desktop View
        <div className="flex gap-8 text-lg">
          {links}
        </div>
      )}
    </>
  );
}
