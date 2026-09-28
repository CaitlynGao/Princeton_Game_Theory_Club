"use client";

import { motion } from "framer-motion";
import {
  ScrollAnimation,
  StaggerContainer,
  StaggerItem,
} from "./ScrollAnimation";

export default function TeamPage() {
  const teamMembers = [
    { initials: "JD", name: "Jay Dewan", role: "President", year: "ORFE '30" },
    {
      initials: "CZ",
      name: "Crystal Zheng",
      role: "Treasurer",
      year: "CBE '30",
    },
    {
      initials: "YW",
      name: "Yi Wang Heng",
      role: "Social Chair",
      year: "Physics '30",
    },
    {
      initials: "AJ",
      name: "Amy Jiang",
      role: "Social Chair",
      year: "Psychology '30",
    },
    {
      initials: "SK",
      name: "Seraphina Kang",
      role: "Publicity Manager",
      year: "SPIA '30",
    },
    {
      initials: "SD",
      name: "Sissi Dai",
      role: "Dev Team & Graphic Design",
      year: "Math/COS '30",
    },
    {
      initials: "CG",
      name: "Caitlyn Gao",
      role: "Dev Team & Website",
      year: "COS '30",
    },
    {
      initials: "CW",
      name: "Charles Wang",
      role: "Strategy Team",
      year: "Math '29",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-8 py-16">
      <div className="mb-16">
        <ScrollAnimation direction="up">
          <h2 className="text-4xl font-bold mb-4 text-princeton-black relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-princeton-orange">
            Our Team
          </h2>
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.1}>
          <p className="text-lg text-gray-600 mb-8">
            Meet the dedicated students leading Princeton Game Theory Club.
          </p>
        </ScrollAnimation>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
          staggerDelay={0.1}
        >
          {teamMembers.map((member, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow"
              >
                <motion.div
                  whileHover={{
                    rotate: [0, -10, 10, -10, 0],
                    transition: { duration: 0.5 },
                  }}
                  className="w-32 h-32 rounded-full bg-gradient-to-br from-princeton-orange to-orange-700 mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold"
                >
                  {member.initials}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <div className="text-princeton-orange text-sm mb-2">
                  {member.role}
                </div>
                <p className="text-gray-600">{member.year}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
}
