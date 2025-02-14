"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import ArrowRight from "../assets/icons/arrow-right.svg";

export const Hero = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 }); // amount: 0.5 dispara quando 50% do elemento está visível

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  // Variantes para cada elemento
  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.3 } },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.5 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.7 },
    },
  };

  return (
    <div
      ref={ref}
      className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#091e3a,#1c2669,#2845c8,#003dcc)] py-[72px] sm:py-24 relative overflow-clip"
    >
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2800px] lg:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border-[6px] border-[#1c2669] bg-[radial-gradient(closest-side,#000)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)] filter blur-[20px]"></div>
      <div className="container relative">
        {/* Link animado */}
        <motion.div
          variants={linkVariants}
          initial="hidden"
          animate={controls}
          className="flex items-center justify-center cursor-pointer active:scale-95 transition-all duration-300 ease-in-out"
        >
          <a
            href="#"
            className="inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30"
          >
            <span className="text-white/80">
              A versão 2.0 já está disponível
            </span>
            <span className="inline-flex items-center gap-1">
              <span>Saiba mais</span>
              <ArrowRight className="h-3 w-3" />
            </span>
          </a>
        </motion.div>

        {/* Título animado */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={controls}
          className="flex justify-center"
        >
          <h1 className="text-7xl sm:text-8xl font-bold tracking-tighter text-center mt-2 inline-flex">
            Concentre-se em <br /> uma tarefa de cada vez
          </h1>
        </motion.div>

        {/* Descrição animada */}
        <motion.div
          variants={descriptionVariants}
          initial="hidden"
          animate={controls}
          className="flex justify-center"
        >
          <p className="text-center text-lg mt-4 max-w-md">
            Celebre suas conquistas com um aplicativo para acompanhar seu
            progresso, motivar seus esforços e festejar seus sucessos
          </p>
        </motion.div>

        {/* Botão animado */}
        <motion.div
          variants={buttonVariants}
          initial="hidden"
          animate={controls}
          className="flex items-center justify-center mt-8"
        >
          <button className="bg-white text-black py-3 px-5 rounded-lg font-bold active:scale-95 transition-all duration-300 ease-in-out">
            Comece agora
          </button>
        </motion.div>
      </div>
    </div>
  );
};
