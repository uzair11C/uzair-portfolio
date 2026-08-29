"use client";

import React, { useEffect, useState } from "react";

export function ScrollRacingLine() {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        // Check reduced motion preference
        const motionQuery = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        );
        setPrefersReducedMotion(motionQuery.matches);

        const handleMotionChange = (e: MediaQueryListEvent) => {
            setPrefersReducedMotion(e.matches);
        };
        motionQuery.addEventListener("change", handleMotionChange);

        const handleScroll = () => {
            const totalScroll =
                document.documentElement.scrollHeight - window.innerHeight;
            if (totalScroll > 0) {
                const currentProgress = Math.min(
                    100,
                    Math.max(0, (window.scrollY / totalScroll) * 100),
                );
                setScrollProgress(currentProgress);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // Initial calculation

        return () => {
            window.removeEventListener("scroll", handleScroll);
            motionQuery.removeEventListener("change", handleMotionChange);
        };
    }, []);

    if (prefersReducedMotion) {
        return null;
    }

    return (
        <div className="hidden xl:block fixed top-0 bottom-0 left-6 z-40 pointer-events-none w-8">
            {/* Telemetry Track Line */}
            <div className="absolute top-24 bottom-24 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-transparent via-[#E8002D]/30 to-transparent">
                {/* Active Scroll Highlight Line */}
                <div
                    className="w-full bg-[#E8002D] transition-all duration-150 ease-out"
                    style={{ height: `${scrollProgress}%` }}
                />
            </div>

            {/* Travelling F1 Car Marker */}
            <div
                className="absolute left-1/2 -translate-x-1/2 transition-all duration-150 ease-out"
                style={{
                    top: `calc(96px + ${scrollProgress} * (100% - 192px) / 100)`,
                }}
            >
                <div className="relative -ml-4 flex items-center justify-center">
                    {/* Subtle Red Beacon Glow */}
                    <div className="absolute w-8 h-8 rounded-full bg-[#E8002D]/40 blur-md animate-pulse" />

                    {/* F1 Car Top View SVG Motif */}
                    <svg
                        width="32"
                        height="40"
                        viewBox="0 0 32 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="relative z-10 drop-shadow-[0_0_8px_rgba(232,0,45,0.8)]"
                    >
                        {/* Front Wing */}
                        <rect
                            x="2"
                            y="33"
                            width="28"
                            height="4"
                            rx="1"
                            fill="#0D0D11"
                        />

                        {/* Front Wheels */}
                        <rect
                            x="1"
                            y="24"
                            width="5"
                            height="8"
                            rx="1"
                            fill="#14141B"
                            stroke="#272732"
                            strokeWidth="1"
                        />
                        <rect
                            x="26"
                            y="24"
                            width="5"
                            height="8"
                            rx="1"
                            fill="#14141B"
                            stroke="#272732"
                            strokeWidth="1"
                        />

                        {/* Front Axel */}
                        <rect
                            x="2"
                            y="10.5"
                            width="28"
                            height="1"
                            rx="1"
                            fill="#0D0D11"
                        />

                        {/* Rear Axel */}
                        <rect
                            x="2"
                            y="27.5"
                            width="28"
                            height="1"
                            rx="1"
                            fill="#0D0D11"
                        />

                        {/* Main Chassis / Sidepods */}
                        <path
                            d="M8 11 L16 37 L24 11 L20 4 L12 4 Z"
                            fill="#D40026"
                        />

                        {/* Cockpit / Driver Helmet Motif */}
                        <ellipse
                            cx="16"
                            cy="18"
                            rx="3.5"
                            ry="5"
                            fill="#0D0D11"
                        />
                        <circle cx="16" cy="17" r="2.5" fill="#FFF200" />

                        {/* Rear Wheels */}
                        <rect
                            x="1"
                            y="6"
                            width="6"
                            height="10"
                            rx="1"
                            fill="#14141B"
                            stroke="#272732"
                            strokeWidth="1"
                        />
                        <rect
                            x="25"
                            y="6"
                            width="6"
                            height="10"
                            rx="1"
                            fill="#14141B"
                            stroke="#272732"
                            strokeWidth="1"
                        />

                        {/* Rear Wing */}
                        <rect
                            x="4"
                            y="0"
                            width="24"
                            height="4"
                            rx="2"
                            fill="#0D0D11"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
}
