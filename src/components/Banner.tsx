export const Banner = () => {
  return (
    <div className="py-3 text-center bg-[linear-gradient(to_right,#53DBF2,#72CCF1,#91BDEF,#AFADEE,#CE9EEC)]">
      <div className="container">
        <p className="font-semibold">
          <span className="hidden sm:inline">
            Confira a nova interface totalmente reformulada –{" "}
          </span>
          <a href="#" className="underline underline-offset-2 font-bold">
            Faça um teste
          </a>
        </p>
      </div>
    </div>
  );
};
