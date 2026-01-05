"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export const LayoutTextFlip = ({
    words,
    duration = 2000,
}: {
    words: string[];
    duration?: number;
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, duration);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <motion.span
                layout
                className=" absolute w-fit ml-2 mt-2 md:mt-0 md:ml-6 overflow-hidden rounded-md tracking-tight"
            >
                <AnimatePresence mode="popLayout">
                    <motion.span
                        key={currentIndex}
                        initial={{ y: -14, filter: "blur(10px)" }}
                        animate={{
                            y: 0,
                            filter: "blur(0px)",
                        }}
                        exit={{ y: 14, filter: "blur(10px)", opacity: 0 }}
                        transition={{
                            duration: 0.5,
                        }}
                        className={"inline-block whitespace-nowrap"}
                    >
                        {words[currentIndex]}
                    </motion.span>
                </AnimatePresence>
            </motion.span>
        </>
    );
};
