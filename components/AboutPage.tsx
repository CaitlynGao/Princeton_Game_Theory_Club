'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ScrollAnimation, StaggerContainer, StaggerItem } from './ScrollAnimation'

const teamMembers = [
  { initials: "JD", name: "Jay Dewan", role: "President", year: "ORFE '30" },
  { initials: "CZ", name: "Crystal Zheng", role: "Treasurer", year: "CBE '30" },
  { initials: "YW", name: "Yi Wang Heng", role: "Social Chair", year: "Physics '30" },
  { initials: "AJ", name: "Amy Jiang", role: "Social Chair", year: "Psychology '30" },
  { initials: "SK", name: "Seraphina Kang", role: "Publicity Manager", year: "SPIA '30" },
  { initials: "SD", name: "Sissi Dai", role: "Dev Team & Graphic Design", year: "Math/COS '30" },
  { initials: "CG", name: "Caitlyn Gao", role: "Dev Team & Website", year: "COS '30" },
  { initials: "CW", name: "Charles Wang", role: "Strategy Team", year: "Math '29" },
]

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<'about' | 'team'>('about')

  return (
    <div className="max-w-7xl mx-auto px-8 py-16">
      {/* Sub-navigation */}
      <div className="flex gap-1 mb-12 border-b border-gray-200">
        {(['about', 'team'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 text-sm font-semibold capitalize transition-colors relative ${
              activeTab === tab
                ? 'text-princeton-orange'
                : 'text-gray-500 hover:text-princeton-orange'
            }`}
          >
            {tab === 'team' ? 'Meet the Team' : 'About Us'}
            {activeTab === tab && (
              <motion.div
                layoutId="tab-underline"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-princeton-orange"
              />
            )}
          </button>
        ))}
      </div>

      {activeTab === 'about' && (
        <div className="mb-16">
          <ScrollAnimation direction="up">
            <h2 className="text-4xl font-bold mb-4 text-princeton-black relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-princeton-orange">
              About Us
            </h2>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={0.1}>
            <p className="text-lg leading-relaxed mb-8 text-gray-700">
              The Princeton Game Theory Club is a student-run organization dedicated to exploring the fascinating world of strategic decision-making. Founded in October 2025, we bring together students from mathematics, economics, computer science, and beyond to study how rational actors interact in competitive and cooperative scenarios.
            </p>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={0.2}>
            <p className="text-lg leading-relaxed mb-8 text-gray-700">
              Game theory provides powerful tools for understanding everything from auction design to evolutionary biology, from political strategy to artificial intelligence. Our club offers a welcoming environment for both beginners and advanced students to deepen their understanding of these concepts.
            </p>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={0.3}>
            <h2 className="text-4xl font-bold mb-4 text-princeton-black relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-princeton-orange mt-12">
              Our Mission
            </h2>
          </ScrollAnimation>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <StaggerItem>
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <h3 className="text-princeton-orange text-2xl mb-4 font-semibold">Educate</h3>
                <p className="text-gray-600 leading-relaxed">
                  Provide accessible introduction to game theory concepts through workshops and seminars.
                </p>
              </motion.div>
            </StaggerItem>
            <StaggerItem>
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <h3 className="text-princeton-orange text-2xl mb-4 font-semibold">Research</h3>
                <p className="text-gray-600 leading-relaxed">
                  Support original student research and facilitate connections with faculty mentors.
                </p>
              </motion.div>
            </StaggerItem>
            <StaggerItem>
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <h3 className="text-princeton-orange text-2xl mb-4 font-semibold">Connect</h3>
                <p className="text-gray-600 leading-relaxed">
                  Build a community of students passionate about strategic thinking across disciplines.
                </p>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      )}

      {activeTab === 'team' && (
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
                  whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.2 } }}
                  className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }}
                    className="w-32 h-32 rounded-full bg-gradient-to-br from-princeton-orange to-orange-700 mx-auto mb-4 flex items-center justify-center text-white text-4xl font-bold"
                  >
                    {member.initials}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <div className="text-princeton-orange text-sm mb-2">{member.role}</div>
                  <p className="text-gray-600">{member.year}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      )}
    </div>
  )
}
