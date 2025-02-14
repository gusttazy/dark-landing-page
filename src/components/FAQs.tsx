'use client';

import PlusIcon from "../assets/icons/plus.svg";
import React, { useRef } from "react";
import { motion, AnimatePresence, useAnimation, useInView } from "framer-motion";

const items = [
  {
    question: "Quais métodos de pagamento são aceitos?",
    answer: "Aceitamos cartões de crédito, débito e PIX.",
  },
  {
    question: "Como funciona o preço para empresas?",
    answer:
      "O preço para empresas é escalonado conforme o número de usuários, com descontos progressivos para mais integrantes.",
  },
  {
    question: "Posso cancelar meu plano a hora que quiser?",
    answer:
      "Sim, você pode cancelar ou alterar o seu plano a qualquer momento diretamente na sua conta.",
  },
  {
    question: "Meus dados estão seguros?",
    answer:
      "Sim, utilizamos criptografia avançada e seguimos rigorosos protocolos de segurança para proteger seus dados.",
  },
];

const AccordionItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="py-4 border-b border-white/30"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center w-full text-left focus:outline-none"
      >
        <span className="flex-1 text-lg font-semibold">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <PlusIcon className="h-4 w-4" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, maxHeight: 0 }}
            animate={{ opacity: 1, maxHeight: 150 }}
            exit={{ opacity: 0, maxHeight: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="mt-2 overflow-hidden text-white/70"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const FAQs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="bg-black text-white bg-gradient-to-b from-[#003dcc] to-black py-[72px]">
      <div className="container" ref={ref}>
        <motion.h2
          variants={textVariants}
          initial="hidden"
          animate={controls}
          className="text-center text-5xl sm:text-6xl font-bold tracking-tighter"
        >
          Perguntas frequentes
        </motion.h2>
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate={controls}
          className="mt-8 max-w-xl mx-auto"
        >
          {items.map(({ question, answer }, index) => (
            <AccordionItem key={index} question={question} answer={answer} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};
