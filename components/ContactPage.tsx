"use client";

import { motion } from "framer-motion";
import {
  ScrollAnimation,
  StaggerContainer,
  StaggerItem,
} from "./ScrollAnimation";

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-16">
      <div className="mb-16">
        <ScrollAnimation direction="up">
          <h2 className="text-4xl font-bold mb-4 text-princeton-black relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-princeton-orange">
            Get In Touch
          </h2>
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.1}>
          <p className="text-lg text-gray-600 mb-8">
            Interested in joining or learning more? We&apos;d love to hear from
            you!
          </p>
        </ScrollAnimation>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <StaggerItem>
            <motion.div
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <h3 className="text-princeton-orange text-2xl mb-4 font-semibold">
                📧 Email
              </h3>
              <p className="text-gray-600">gametheory@princeton.edu</p>
            </motion.div>
          </StaggerItem>

          <StaggerItem>
            <motion.div
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <h3 className="text-princeton-orange text-2xl mb-4 font-semibold">
                📍 Location
              </h3>
              <p className="text-gray-600">TBD</p>
            </motion.div>
          </StaggerItem>

          <StaggerItem>
            <motion.div
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <h3 className="text-princeton-orange text-2xl mb-4 font-semibold">
                💬 Join Us
              </h3>
              <p className="text-gray-600">
                Sign up for our mailing list:
                <br />
                <a
                  href="mailto:gametheory@princeton.edu?subject=Mailing%20List"
                  className="text-princeton-orange hover:underline"
                >
                  Subscribe here
                </a>
              </p>
            </motion.div>
          </StaggerItem>
        </StaggerContainer>

        <ScrollAnimation direction="up" delay={0.4}>
          <motion.div
            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
            className="mt-12 bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <p className="text-gray-600 mb-4">
              Stay updated with our latest events and activities on social
              media.
            </p>
            <div className="flex gap-6">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="text-princeton-black hover:text-princeton-orange transition-colors"
              >
                Instagram
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="text-princeton-black hover:text-princeton-orange transition-colors"
              >
                Facebook
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="text-princeton-black hover:text-princeton-orange transition-colors"
              >
                LinkedIn
              </motion.a>
            </div>
          </motion.div>
        </ScrollAnimation>
      </div>
    </div>
  );
}
