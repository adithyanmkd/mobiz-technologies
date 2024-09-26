"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

export function LampEffect() {
  return (
    <LampContainer className="-z-30">
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text py-4 text-center text-4xl font-medium tracking-tight text-transparent text-white md:text-7xl"
      >
        A Software House <br /> With Human Touch
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 max-w-md bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text py-4 text-center font-light leading-[180%] tracking-tight text-gray-300 text-transparent"
      >
        At Mobiz, we believe that people are the heart of any company.
        They&apos;re the main driving force behind its business success.
      </motion.h1>
    </LampContainer>
  );
}
