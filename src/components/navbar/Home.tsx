import { RiCompasses2Line } from "react-icons/ri";
import { GiPaintBrush } from "react-icons/gi";
import { IoMdArrowRoundForward } from "react-icons/io";
import { RiToolsFill } from "react-icons/ri";
import { GoMail } from "react-icons/go";
import { FaPhone } from "react-icons/fa6";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="max-w-screen-2xl mt-18 overflow-hidden">
      <Navbar />
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
      <div className="grid grid-cols-1 gap-12 xl:grid-cols-3 mt-[80px] xl:mt-[200px] relative z-20 pr-20 pl-20 font-playfair">
        <div className="container mx-auto">
          <div className="text-center text-xl font-semibold ">
            <div style={{ color: "#f59e0b" }} className="flex justify-center ">
              <RiCompasses2Line size={40} />
            </div>
            <h2 className="mb-5">Un Projet à plannifier ?</h2>
            <p className="mb-5 max-w-md mx-auto font-normal text-lg text-gray-700">
              Nous vous accompagnerons dans la réalisation du produit de vos
              rêves grâce à notre expertise.
            </p>
            <a
              href="#"
              className="text-xl font-normal flex justify-center gap-2 font-sans hover:text-gray-400"
            >
              A Propos
              <div style={{ color: "#f59e0b" }} className="flex items-center">
                <IoMdArrowRoundForward size={20} />
              </div>
            </a>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="text-center text-xl font-semibold text-gray-700">
            <div style={{ color: "#f59e0b" }} className="flex justify-center ">
              <GiPaintBrush size={40} />
            </div>
            <h2 className="mb-5">Notre savoir faire</h2>
            <p className="mb-5 max-w-md mx-auto font-normal text-lg">
              Découvrez les nombreuses réalisations que nous avons effectué pour
              les clients qui nous ont fait confiance
            </p>
            <a
              href="#"
              className="text-xl font-normal flex justify-center gap-2 font-sans hover:text-gray-400"
            >
              Galerie Photo
              <div style={{ color: "#f59e0b" }} className="flex items-center">
                <IoMdArrowRoundForward size={20} />
              </div>
            </a>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="text-center text-xl font-semibold">
            <div style={{ color: "#f59e0b" }} className="flex justify-center ">
              <RiToolsFill size={45} />
            </div>
            <h2 className="mb-5">Passer à L'action</h2>
            <p className="mb-5 max-w-md mx-auto font-normal text-lg text-gray-700">
              Prenez contact avec notre équipe afin que nous puissions vous
              accompagner.
            </p>
            <a
              href="#"
              className="text-xl font-normal flex justify-center gap-2 font-sans hover:text-gray-400"
            >
              Nous Contacter
              <div style={{ color: "#f59e0b" }} className="flex items-center">
                <GoMail size={25} />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-[80px] xl:mt-[200px] relative z-20">
        <div className="container mx-auto xl:px-0 mr-30 ml-30">
          <div className="flex flex-col xl:flex-row flex-wrap text-center xl:text-left justify-between items-center gap-8 xl:gap-[74px] ">
            <div className="flex-1 order-2 xl:order-none mt-10 pr-6 pl-6">
              <h2 className=" text-5xl text-black font-semibold drop-shadow-md font-playfair">
                Une fabrication sur mesure grâce à notre expertise de la matière
                polyester
              </h2>
              <p className="flex flex-wrap mt-14 pr-4 pl-4 text-xl text-black font-normal">
                Les domaines sont très variés , ce qui nous permet de répondre à
                toutes les demandes , du domaine design , de la décoration
                d'intérieur ou extérieur tout est possible!
              </p>
              <div className="flex justify-center items-center mt-10">
                <div
                  style={{ color: "#f59e0b" }}
                  className="flex justify-center items-center bg-orange-100 rounded-full w-[73px] h-[73px] mt-10"
                >
                  <FaPhone size={25} />
                </div>
                <div className="text-center mt-10 ml-4">
                  <div className="font-normal text-lg text-gray-700">
                    0670504090
                  </div>
                  <div className="font-normal text-lg text-gray-700">
                    Appelez nous
                  </div>
                </div>
              </div>
              <div className="mt-20 flex justify-center">
                <Link
                  className=" text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  to="/mailform"
                >
                  Envoyer un mail
                </Link>
              </div>
            </div>
            <div className="max-w-[453px] order-1 xl:order-none">
              <img
                src="../../../images/swimmingpool.jpg"
                alt=""
                className="rounded-tr-[200px] rounded-bl-[100px] rounded-br-2xl rounded-tl-2xl"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[3000px]"></div>
    </div>
  );
};

export default Home;
