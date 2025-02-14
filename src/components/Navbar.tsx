"use client";

import { motion } from "framer-motion";
import logoImage from "../assets/images/logo.png";
import Image from "next/image";
import MenuIcon from "../assets/icons/menu.svg";

export const Navbar = () => {
  return (
    // Container da navbar animado (fade e slide do topo)
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black"
    >
      <div className="px-4">
        <div className="py-4 flex items-center justify-between">
          {/* Logo animado (slide da esquerda) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={logoImage}
              alt="Logo"
              className="h-12 w-12 hover:scale-105 transition cursor-pointer active:scale-95 duration-300 ease-in-out"
            />
          </motion.div>

          {/* Ícone do menu (apenas em mobile) animado (slide da direita) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border border-white border-opacity-20 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden"
          >
            <MenuIcon className="h-6 w-6" />
          </motion.div>

          {/* Navegação e botão (apenas em desktop) com animação de stagger */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="hidden sm:flex flex-grow items-center justify-center gap-6"
          >
            <nav className="gap-6 items-center flex">
              {["Sobre", "Serviços", "Atualizações", "Ajuda", "Clientes"].map(
                (item, index) => (
                  <motion.a
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: -10 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.3 },
                      },
                    }}
                    href="#"
                    className="text-opacity-70 text-white hover:text-opacity-100 transition"
                  >
                    {item}
                  </motion.a>
                )
              )}
            </nav>
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="bg-white py-2 px-4 rounded-lg font-bold transition-all duration-300 ease-in-out active:scale-95"
            >
              Adquira já!
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
