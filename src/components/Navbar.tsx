import logoImage from "../assets/images/logo.png";
import Image from "next/image";
import MenuIcon from "../assets/icons/menu.svg";

export const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="py-4 flex items-center justify-between">
          <Image src={logoImage} alt="Logo" className="h-12 w-12" />
          <div className="border border-white border-opacity-20 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
            <MenuIcon className="h-6 w-6" />
          </div>
          <nav className="gap-6 items-center hidden sm:flex flex-grow justify-center">
            <a
              href="#"
              className="text-opacity-70 text-white hover:text-opacity-100 transition"
            >
              Sobre
            </a>
            <a
              href="#"
              className="text-opacity-70 text-white hover:text-opacity-100 transition"
            >
              Serviços
            </a>
            <a
              href="#"
              className="text-opacity-70 text-white hover:text-opacity-100 transition"
            >
              Atualizações
            </a>
            <a
              href="#"
              className="text-opacity-70 text-white hover:text-opacity-100 transition"
            >
              Ajuda
            </a>
            <a
              href="#"
              className="text-opacity-70 text-white hover:text-opacity-100 transition"
            >
              Clientes
            </a>
          </nav>
          <button className="bg-white py-2 px-4 rounded-lg font-bold ml-auto hidden sm:block">
            Adquira já!
          </button>
        </div>
      </div>
    </div>
  );
};
