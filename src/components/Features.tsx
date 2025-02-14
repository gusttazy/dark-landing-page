"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import EcoIcon from "../assets/icons/plug.svg";
import DefIcon from "../assets/icons/check-square.svg";
import CryptoIcon from "../assets/icons/lock.svg";

const features = [
  {
    title: "Ecossistema de integração",
    description:
      "Aumente sua produtividade conectando-se com suas ferramentas favoritas, mantendo todos os seus itens essenciais em um só lugar.",
    icon: EcoIcon,
  },
  {
    title: "Definição e acompanhamento de metas",
    description:
      "Defina e acompanhe suas metas, dividindo objetivos em tarefas alcançáveis para manter seus alvos sempre em mente.",
    icon: DefIcon,
  },
  {
    title: "Criptografia de dados segura",
    description:
      "Com criptografia de ponta a ponta, seus dados são armazenados de forma segura e protegidos contra acessos não autorizados.",
    icon: CryptoIcon,
  },
];

export const Features = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  // Usando o ref no container que engloba tanto o título quanto as cards
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  // Variantes para o título e descrição
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Variantes para os cards de features
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container" ref={ref}>
        {/* Título animado */}
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          animate={controls}
          className="text-center font-bold text-5xl sm:text-6xl tracking-tighter"
        >
          Temos tudo que você precisa
        </motion.h2>

        <div className="max-w-xl mx-auto">
          {/* Descrição animada */}
          <motion.p
            variants={titleVariants}
            initial="hidden"
            animate={controls}
            className="text-center mt-5 text-xl text-white/70"
          >
            Acesse listas personalizáveis, ferramentas de colaboração e
            monitoramento inteligente em um único lugar.
          </motion.p>
        </div>

        <div className="mt-16 flex flex-col gap-4 sm:flex-row">
          {features.map(({ title, description, icon: Icon }, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="border border-white/30 px-5 py-10 text-center rounded-xl sm:flex-1"
            >
              <div className="inline-flex h-14 w-14 bg-white justify-center items-center rounded-lg">
                <Icon className="h-10 w-10" />
              </div>
              <h3 className="mt-6 font-bold text-lg">{title}</h3>
              <p className="mt-2 text-white/70">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
