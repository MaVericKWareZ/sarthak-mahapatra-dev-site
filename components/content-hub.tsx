"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Calendar, Clock } from "lucide-react"
import Link from "next/link"

const articles = [
  {
    title: "Building Scalable Microservices with Spring Boot",
    excerpt:
      "Learn how to design and implement scalable microservices architecture using Spring Boot and best practices for production deployment.",
    date: "April 15, 2025",
    readTime: "8 min read",
    category: "Backend Development",
    slug: "building-scalable-microservices",
  },
  {
    title: "Event-Driven Architecture: A Practical Guide",
    excerpt:
      "Explore the principles of event-driven architecture and how to implement it in your applications for better scalability and decoupling.",
    date: "March 22, 2025",
    readTime: "10 min read",
    category: "System Design",
    slug: "event-driven-architecture-guide",
  },
  {
    title: "Optimizing Database Performance in High-Load Systems",
    excerpt:
      "Discover techniques for optimizing database performance in systems that handle millions of transactions daily.",
    date: "February 10, 2025",
    readTime: "12 min read",
    category: "Database",
    slug: "database-performance-optimization",
  },
]

export default function ContentHub() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="content" className="bg-gray-900 py-20">
      <div className="section-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between items-center mb-10">
            <h2 className="section-title">Content Hub</h2>
            <Link href="/blog">
              <Button variant="ghost" className="text-blue-400 hover:text-blue-300 hover:bg-blue-900/20">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {articles.map((article, index) => (
              <motion.div key={index} className="card group" variants={itemVariants}>
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 text-xs rounded-full bg-blue-900/30 text-blue-400">
                    {article.category}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors">
                  <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                </h3>

                <p className="text-gray-300 mb-4">{article.excerpt}</p>

                <div className="flex items-center text-gray-400 text-sm mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    {article.date}
                  </div>
                  <div className="mx-2">•</div>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {article.readTime}
                  </div>
                </div>

                <Link href={`/blog/${article.slug}`}>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-blue-400 hover:text-blue-300 hover:bg-blue-900/20 p-0"
                  >
                    Read Article <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-16 card bg-gradient-to-r from-blue-900/30 to-purple-900/30">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-6">
                <div className="flex items-center mb-3">
                  <BookOpen className="h-5 w-5 text-blue-400 mr-2" />
                  <h3 className="text-xl font-semibold text-white">Technical Writing</h3>
                </div>
                <p className="text-gray-300 max-w-xl">
                  I regularly write about software engineering, system design, and backend development. Subscribe to my
                  newsletter to get the latest articles delivered to your inbox.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Link href="/blog">Browse Articles</Link>
                </Button>
                <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
