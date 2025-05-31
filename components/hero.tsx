"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import TypewriterComponent from "typewriter-effect";
import Particles from "./particles";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timeout = setTimeout(() => setShowScroll(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      boxShadow:
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
    tap: { scale: 0.98 },
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/80 to-gray-900 opacity-60"></div>
        <img
          src="/bg-full.svg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      <Particles />

      <div className="relative z-10 max-w-6xl w-full px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-center gap-10">
        {/* Left: Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left flex-1 space-y-6"
        >
          <motion.div
            variants={itemVariants}
            className="mb-2 text-indigo-400 font-medium text-2xl"
          >
            Hi, I'm
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white underline decoration-indigo-600 decoration-4 underline-offset-8"
          >
            Sarthak Mahapatra
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="text-2xl sm:text-3xl text-gray-300 mb-6 h-12"
          >
            {mounted && (
              <TypewriterComponent
                options={{
                  strings: [
                    "Software Engineer",
                    "Problem Solver",
                    "Product Engineer",
                    "Explorer",
                    "Tinkerer",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  deleteSpeed: 20,
                }}
              />
            )}
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0"
          >
            Specializing in building scalable backend systems, microservices
            architecture, and cloud-native applications with a focus on
            performance and reliability.
          </motion.p>

          <div className="flex justify-center sm:justify-start items-center gap-4 mt-2 sm:mt-0">
            <Link
              href="https://github.com/MaVericKWareZ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="icon"
                className="text-gray-400 hover:text-white hover:bg-gray-800"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>

            <Link
              href="https://linkedin.com/in/sarthakmahapatra"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="icon"
                className="text-gray-400 hover:text-white hover:bg-gray-800"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Right: Hero Image */}
        <motion.div
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          whileHover={{
            rotate: [0, 2, -2, 2, 0],
            transition: { duration: 2, repeat: Infinity },
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: isHovered ? [0, 2, -2, 2, 0] : 0,
          }}
          transition={{ duration: isHovered ? 2 : 0.4, ease: "easeOut" }}
          className="flex-shrink-0 w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-lg"
        >
          <img
            src="/hero.png"
            alt="Sarthak Mahapatra"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      {showScroll && (
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
          <motion.div
            animate={{
              y: [0, 10, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 2,
            }}
          >
            <Link href="#about">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full border border-gray-700"
              >
                <ArrowRight className="h-5 w-5 rotate-90" />
                <span className="sr-only">Scroll Down</span>
              </Button>
            </Link>
          </motion.div>
        </div>
      )}
    </section>
  );
}
