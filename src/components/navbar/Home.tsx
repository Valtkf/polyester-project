import { RiCompasses2Line } from "react-icons/ri";

const Home = () => {
  return (
    <div className="max-w-screen-2xl mt-18 overflow-hidden">
      <div className="hero h-[540px] xl:h-[640px] w-full bg-hero  bg-cover bg-fixed bg-no-repeat  xl:rounded-bl-[290px] relative z-10">
        <div className="flex flex-col justify-between items-center gap-10 text-center">
          <div>
            <h2 className="mt-40 pr-4 pl-4 text-5xl text-white font-semibold drop-shadow-md font-playfair">
              Donnez vie à vos idées
            </h2>
            <p className="flex flex-wrap mt-14 pr-4 pl-4 text-xl text-white font-normal drop-shadow-md">
              présentation de l'activité, du savoir faire de l'entreprise.
            </p>
            <button
              type="button"
              className="mt-20 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Commencer
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="mt-[80px] xl:mt-[200px] relative z-20 grid grid-cols-1 gap-12 xl:grid-cols-3">
          <div className="text-center bg-pink-200 text-xl font-semibold font-playfair">
            <div style={{ color: "orange" }} className="flex justify-center ">
              <RiCompasses2Line size={40} />
            </div>
            <h2>Un Projet à plannifier ?</h2>
          </div>
          <div className="text-center bg-pink-200">02</div>
          <div className="text-center bg-pink-200">03</div>
        </div>
      </div>
      <div className="h-[3000px]"></div>
    </div>
  );
};

export default Home;
