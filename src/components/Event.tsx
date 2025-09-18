"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { Skeleton } from "../components/ui/skeleton"; // shadcn skeleton
import { Card, CardContent } from "../components/ui/card"; // shadcn card

// Import your local images
import Event1Img from "../assets/soccer-ball.jpg";
import Event2Img from "../assets/street-soccer1.jpg";

type EventItem = {
  id: number;
  title: string;
  date: string;
  image: string; // just string now
};

const Event: React.FC = () => {
  const [events, setEvents] = useState<EventItem[] | null>(null);

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: { perView: 3, spacing: 16 },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 1, spacing: 12 },
      },
    },
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setEvents([
        {
          id: 1,
          title: "Soccer Fiesta",
          date: "Aug 23, 2025",
          image: Event1Img, // imported local image works
        },
        {
          id: 2,
          title: "Street Football Showdown",
          date: "Sep 5, 2025",
          image: Event2Img,
        },
      ]);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full px-6 py-12 bg-background">
      <h2 className="text-3xl md:text-4xl font-medium mb-8 text-left text-black">
        Events
      </h2>

      {!events ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="h-48 w-full rounded-xl" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      ) : (
        <div ref={sliderRef} className="keen-slider cursor-grab hover:cursor-grab">
          {events.map((event) => (
            <motion.div
              key={event.id}
              className="keen-slider__slide px-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="rounded-xl overflow-hidden shadow-lg">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-48 w-full object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold">{event.title}</h3>
                  <p className="text-gray-500 mt-1">{event.date}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Event;
