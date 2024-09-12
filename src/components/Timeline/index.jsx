"use client";
import React, { useEffect, useRef } from "react";
import timelineItems from "@/data/timelineItems.json";

const Timeline = () => {
  const timelineItemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    timelineItemsRef.current.forEach((item) => {
      if (item) {
        observer.observe(item);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="container mx-auto px-4">
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical my-10">
        {timelineItems.map((item, index) => (
          <li
            key={index}
            className="fade-in-section"
            ref={(el) => (timelineItemsRef.current[index] = el)}
          >
            {/* Exclude hr for the first item */}
            {index !== 0 && <hr />}
            {/* --- */}
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="green"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div
              className={`${
                index % 2 === 0 ? "timeline-start md:text-end" : "timeline-end"
              }`}
            >
              <div className="text-3xl font-black">{item.period}</div>
              <p
                className={`${
                  index === timelineItems.length - 1 ? "mb-0" : "mb-6"
                }`}
              >
                {item.content}
              </p>
            </div>
            {/* Exclude hr for the last item */}
            {index !== timelineItems.length - 1 && <hr />}
            {/* --- */}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Timeline;
