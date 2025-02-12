import ArrowRight from "../assets/icons/arrow-right.svg";

export const Hero = () => {
  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#091e3a,#1c2669,#2845c8,#003dcc)] py-[72px] sm:py-24 relative overflow-clip">
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2800px] lg:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border-[6px] border-[#1c2669] bg-[radial-gradient(closest-side,#000)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)] filter blur-[20px]"></div>
      <div className="container relative">
        <div className="flex items-center justify-center">
          <a
            href="#"
            className="inline-flex gap-3 border py-1 px-2 rounded-lg border-white/30"
          >
            <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,#53DBF2,#72CCF1,#91BDEF,#AFADEE,#CE9EEC)] [-webkit-background-clip:text]">
              A versão 2.0 já está disponível
            </span>
            <span className="inline-flex items-center gap-1">
              <span>Saiba mais</span>
              <ArrowRight className="h-3 w-3" />
            </span>
          </a>
        </div>
        <div className="flex justify-center">
          <h1 className="text-7xl sm:text-8xl font-bold tracking-tighter text-center mt-2 inline-flex">
            Concentre-se em <br /> uma tarefa de cada vez
          </h1>
        </div>
        <div className="flex justify-center">
          <p className="text-center text-lg mt-4 max-w-md">
            Celebre suas conquistas com um aplicativo para acompanhar seu
            progresso, motivar seus esforços e festejar seus sucessos
          </p>
        </div>
        <div className="flex items-center justify-center mt-8">
          <button className="bg-white text-black py-3 px-5 rounded-lg font-bold">
            Comece agora
          </button>
        </div>
      </div>
    </div>
  );
};
