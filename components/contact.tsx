"use client";

import Link from "next/link";
import type React from "react";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  CalendarClockIcon,
  CalendarClock,
} from "lucide-react";
import { sendEmail } from "@/lib/email";
import Particles from "./particles";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendEmail(formData);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    alert("Message sent successfully!");
  };

  return (
    <section
      id="contact"
      className="relative bg-gray-800 py-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/bg-full.svg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/80 to-gray-900 opacity-70"></div>
      </div>

      <Particles />

      <div className="section-container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Get In Touch</h2>

          <div className="grid lg:grid-cols-2 gap-10 mt-10">
            <div>
              <p className="text-gray-300 mb-8">
                I'm always open to discussing new projects, opportunities, or
                partnerships. Feel free to reach out using the contact form or
                through my social media profiles.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="p-2 rounded-md bg-blue-900/30 text-blue-400 mr-3">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Email</h3>
                    <p className="text-gray-300">
                      contact@sarthakmahapatra.dev
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-2 rounded-md bg-blue-900/30 text-blue-400 mr-3">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Phone</h3>
                    <p className="text-gray-300">+91-9040422567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-2 rounded-md bg-blue-900/30 text-blue-400 mr-3">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">Location</h3>
                    <p className="text-gray-300">Bengaluru, India</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-2 rounded-md bg-blue-900/30 text-blue-400 mr-3">
                    <CalendarClock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">
                      Book a Call
                    </h3>
                    <a
                      href="https://calendly.com/sarthakmahapatra-dev/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      Schedule a 30-minute meeting
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white mb-4">
                  Connect With Me
                </h3>
                <div className="flex space-x-4">
                  <Link
                    href="https://github.com/MaVericKWareZ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-gray-700 text-gray-300 hover:text-white hover:bg-gray-700"
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
                      className="rounded-full border-gray-700 text-gray-300 hover:text-white hover:bg-gray-700"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-6 text-white">
                Send Me a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus-visible:ring-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus-visible:ring-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus-visible:ring-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    required
                    className="min-h-32 bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus-visible:ring-blue-500"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
