"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function FadeInOnScroll({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}
