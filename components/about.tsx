"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { GraduationCapIcon, Lightbulb, LightbulbIcon } from "lucide-react";
import { useRef } from "react";
import Particles from "./particles";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative bg-gray-900 py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/bg-full-rev.svg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/80 to-gray-900 opacity-70"></div>
      </div>

      <Particles />

      {/* Foreground Content */}
      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">About Me</h2>

          <div className="grid md:grid-cols-2 gap-10 mt-10">
            <div className="space-y-6">
              <p className="text-gray-300">
                I'm a Senior Software Engineer with over 6 years of experience
                building scalable backend systems, microservices, and
                cloud-native applications. I'm passionate about creating
                efficient, reliable software solutions that solve real-world
                problems.
              </p>
              <p className="text-gray-300">
                Throughout my career at companies like Lowe's, Bayer, and Dell
                Technologies, I've led development efforts for business-critical
                systems, redesigned legacy architectures, and implemented
                solutions that process millions of transactions daily.
              </p>
              <p className="text-gray-300">
                I enjoy working in collaborative environments where I can
                contribute to technical design decisions, mentor junior
                developers, and continuously learn new technologies and
                approaches.
              </p>
            </div>

            <div className="space-y-6">
              <div className="card">
                <div className="flex items-center gap-2 mb-3">
                  <GraduationCapIcon className="text-blue-400 w-5 h-5" />
                  <h3 className="text-xl font-semibold text-blue-400">
                    Education
                  </h3>
                </div>
                <p className="text-gray-300">
                  B.Tech. Computer Science & Engineering
                </p>
                <p className="text-gray-400">IIIT Bhubaneswar, 2018</p>
                <p className="text-gray-400">GPA: 8.35/10.0</p>
              </div>

              <div className="card">
                <div className="flex items-center gap-2 mb-3">
                  <LightbulbIcon className="text-blue-400 w-5 h-5" />
                  <h3 className="text-xl font-semibold text-blue-400">
                    Interests
                  </h3>
                </div>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Microservices Architecture</li>
                  <li>Cloud-Native Development</li>
                  <li>Distributed Systems</li>
                  <li>DevOps & Automation</li>
                  <li>System Design</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
