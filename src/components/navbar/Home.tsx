const Home = () => {
  return (
    <div className="max-w-screen-2xl mt-28 overflow-hidden">
      <div className="hero h-[540px] xl:h-[640px] w-full bg-hero  bg-cover bg-fixed bg-no-repeat  xl:rounded-bl-[290px] relative z-20">
        <div className="flex flex-col justify-between items-center gap-10 text-center">
          <div>
            <h2 className="text-4xl text-white font-semibold drop-shadow-md font-playfair">
              Donnez vie à vos idées
            </h2>
            <p className="text-xl text-white font-normal drop-shadow-md">
              présentation de l'activité, du savoir faire de l'entrprise.
            </p>
            <div>
              <button>Commencer</button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-rows-4 grid-flow-col gap-4">
        <div>01</div>
        <div>02</div>
        <div>03</div>
        <div>04</div>
        <div>05</div>
        <div>06</div>
        <div>07</div>
        <div>08</div>
      </div>
      <div className="h-[3000px]"></div>
    </div>
  );
};

export default Home;
