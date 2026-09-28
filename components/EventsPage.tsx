"use client";

import { motion } from "framer-motion";
import {
  ScrollAnimation,
  StaggerContainer,
  StaggerItem,
} from "./ScrollAnimation";
import { fallbackEvents } from "@/data/events";

interface Event {
  id: number;
  date: string;
  title: string;
  description: string;
  location?: string | null;
}

export default function EventsPage() {
  const events: Event[] = fallbackEvents;

  return (
    <div className="max-w-7xl mx-auto px-8 py-16">
      <div className="mb-16">
        <ScrollAnimation direction="up">
          <h2 className="text-4xl font-bold mb-4 text-princeton-black relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-princeton-orange">
            Upcoming Events
          </h2>
        </ScrollAnimation>

        <StaggerContainer className="mt-8 space-y-6" staggerDelay={0.15}>
          {events.map((event) => (
            <StaggerItem key={event.id}>
              <motion.div
                whileHover={{ x: 8, transition: { duration: 0.2 } }}
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-princeton-orange hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="text-princeton-orange font-bold text-sm mb-2">
                  {event.date}
                </div>
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600">{event.description}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
}
