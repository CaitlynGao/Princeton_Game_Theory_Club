"use client";

import { motion } from "framer-motion";
import {
  ScrollAnimation,
  StaggerContainer,
  StaggerItem,
} from "./ScrollAnimation";

const projects = [
  {
    title: "Fish Simulation",
    icon: "🐟",
    description:
      "A simulation exploring game-theoretic concepts through the lens of the card game Fish. More details coming soon.",
    status: "In Development",
    tags: ["Simulation", "Game Theory"],
  },
  {
    title: "Solving Fish",
    icon: "📖",
    description:
      "A book that applies game theory to fully analyze and solve the card game Fish — uncovering optimal strategies, equilibria, and the mathematics behind the game.",
    status: "In Progress",
    tags: ["Game Theory", "Research", "Fish"],
  },
];

export default function OurWorkPage() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-16">
      <div className="mb-16">
        <ScrollAnimation direction="up">
          <h2 className="text-4xl font-bold mb-4 text-princeton-black relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-princeton-orange">
            Our Work
          </h2>
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.1}>
          <p className="text-lg text-gray-600 mb-12">
            Projects and research from the Princeton Game Theory Club.
          </p>
        </ScrollAnimation>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          staggerDelay={0.15}
        >
          {projects.map((project, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-princeton-orange"
              >
                <div className="text-5xl mb-4">{project.icon}</div>
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-orange-100 text-princeton-orange">
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed mb-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
}
