"use client";

import { useEffect, useRef } from "react";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure muted property is set on the DOM element for strict browser autoplay policies
    video.muted = true;
    video.defaultMuted = true;
    video.play().catch(() => {
      // Autoplay blocked until interaction or video still buffering
    });
  }, []);

  return (
    <section className="relative w-full h-[85vh] min-h-150 overflow-hidden bg-black">
      {/* Video Background */}
      <video
        ref={videoRef}
        src="/video/chinmaya-attukal.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video/chinmaya-attukal.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Subtle Overlay to make the navbar pop and add depth */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />
    </section>
  );
}
