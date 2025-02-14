'use client';

import PaperPlane from "../assets/icons/paper-plane.svg";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

export const CallToAction = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="bg-black text-white py-[72px] text-center">
      <div className="container" ref={ref}>
        {/* Título animado */}
        <motion.h2
          variants={fadeUpVariants}
          initial="hidden"
          animate={controls}
          className="font-bold text-5xl tracking-tighter sm:text-6xl"
        >
          Entre em contato
        </motion.h2>

        {/* Descrição animada */}
        <motion.p
          variants={fadeUpVariants}
          initial="hidden"
          animate={controls}
          className="text-xl text-white/70 mt-5"
        >
          Preencha o formulário abaixo para entrar em contato conosco
        </motion.p>

        {/* Formulário animado */}
        <motion.form
          variants={fadeUpVariants}
          initial="hidden"
          animate={controls}
          className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row sm:max-w-md"
        >
          <input
            type="email"
            placeholder="your@email.com"
            className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-white/70 placeholder:text-opacity-70 w-full"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white text-black py-3 px-5 rounded-lg font-bold flex items-center justify-center gap-x-2"
          >
            <PaperPlane className="h-4 w-4" />
            <span>Enviar</span>
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default CallToAction;
