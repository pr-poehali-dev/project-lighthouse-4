import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/1daf5d84-64ea-4807-83b5-f1613a8e0ad4/files/78a2746d-bb93-4283-b967-844dfa6dd838.jpg"
          alt="Японский автомобиль на побережье Сочи"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          ЯПОНИЯ<br/>В СОЧИ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-6 opacity-90">
          Аренда японских автомобилей — надёжность, стиль и удовольствие от каждой поездки по Черноморскому побережью
        </p>
        <button className="mt-8 bg-white text-black px-8 py-3 text-sm uppercase tracking-wide font-semibold hover:bg-neutral-200 transition-colors duration-300 cursor-pointer">
          Выбрать автомобиль
        </button>
      </div>
    </div>
  );
}