import PaperPlane from "../assets/icons/paper-plane.svg";

export const CallToAction = () => {
  return (
    <div className="bg-black text-white py-[72px] text-center">
      <div className="container">
        <h2 className="font-bold text-5xl tracking-tighter sm:text-6xl">
          Entre em contato
        </h2>
        <p className="text-xl text-white/70 mt-5">
          Preencha o formulário abaixo para entrar em contato conosco
        </p>
        <form className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row sm:max-w-md">
          <input
            type="email"
            placeholder="your@email.com"
            className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-white/70 placeholder:text-opacity-70 w-full"
          />
          <button className="bg-white text-black py-3 px-5 rounded-lg font-bold active:scale-95 transition-all duration-300 ease-in-out flex items-center justify-center gap-x-2">
            <PaperPlane className="h-4 w-4" />
            <span>Enviar</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default CallToAction;