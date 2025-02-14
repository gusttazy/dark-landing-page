'use client'

import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ProductImage from "../assets/images/app-screen.png";

export const ProductShowcase = () => {
  // Ref para o texto (título e descrição)
  const textRef = useRef(null);
  const isTextInView = useInView(textRef, { once: false, amount: 0.5 });
  const textControls = useAnimation();

  useEffect(() => {
    if (isTextInView) {
      textControls.start("visible");
    } else {
      textControls.start("hidden");
    }
  }, [isTextInView, textControls]);

  // Ref para a imagem
  const imageRef = useRef(null);
  const isImageInView = useInView(imageRef, { once: false, amount: 0.5 });
  const imageControls = useAnimation();
  const [hasBeenVisible, setHasBeenVisible] = useState(false); // Garante que a imagem não desapareça ao scrollar para cima

  useEffect(() => {
    if (isImageInView) {
      imageControls.start("visible");
      setHasBeenVisible(true); // Marca como já visível para não sumir ao subir a página
    } else if (!hasBeenVisible) {
      imageControls.start("hidden"); // Apenas some se nunca foi visível
    }
  }, [isImageInView, imageControls, hasBeenVisible]);

  // Animações para os textos
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
  };

  // Animação da imagem ao entrar na tela (mas não desaparece depois)
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.4 } },
  };

  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#003dcc] py-24">
      <div className="container" ref={textRef}>
        {/* Título animado */}
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          animate={textControls}
          className="text-center text-5xl sm:text-6xl font-bold tracking-tighter"
        >
          Interface intuitiva
        </motion.h2>

        <div className="max-w-2xl mx-auto">
          {/* Descrição animada */}
          <motion.p
            variants={descriptionVariants}
            initial="hidden"
            animate={textControls}
            className="text-lg text-center text-white/70 mt-5"
          >
            Desfrute de uma experiência fluida e sem complicações com uma
            interface pensada para você.
          </motion.p>
        </div>

        <div className="flex justify-center items-center">
          {/* Imagem do produto animada */}
          <motion.div
            ref={imageRef}
            variants={imageVariants}
            initial="hidden"
            animate={imageControls}
            className="mt-14"
          >
            <Image src={ProductImage} alt="Imagem do produto" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
