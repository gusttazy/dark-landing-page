import Image from "next/image";
import ProductImage from "../assets/images/app-screen.png";

export const ProductShowcase = () => {
  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#003dcc] py-24 ">
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">
          Interface intuitiva
        </h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-lg text-center text-white/70 mt-5">
            Desfrute de uma experiência fluida e sem complicações com uma
            interface pensada para você.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Image src={ProductImage} alt="Imagem do produto" className="mt-14" />
        </div>
      </div>
    </div>
  );
};
