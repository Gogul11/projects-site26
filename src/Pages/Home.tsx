import { useNavigate } from "react-router";
import Drone from "../components/Drone";
import { FaExternalLinkAlt } from "react-icons/fa";

const Home = () => {

    const navigate = useNavigate()

    return (
        <div 
            className="h-screen w-full flex flex-col 
                        md:flex-row pt-16 px-14 max-sm:px-5 max-md:px-10 max-lg:px-12"
        >
            <div 
                className="w-full h-[40%] flex flex-col justify-center items-center gap-4
                           md:w-[50%] md:h-full " 
            >
                <a 
                    className="text-[40px]
                               text-[#dd1818] 
                               bruno-ace-sc-regular
                               sm:text-[50px]
                               md:text-[65px]
                               lg:text-[70px]
                               xl:text-[90px]" 
                    href="https://cegtechforum.in/"
                    target="_blank"
                >
                    CTF
                </a>

                <p 
                    className="bruno-ace-sc-regular 
                               text-[40px]
                               min-[350px]:text-[50px]
                               sm:text-[65px]
                               md:text-[70px]
                               lg:text-[90px]"
                >
                    Projects
                </p>

                <p 
                    className="text-sm rock-salt text-center
                               sm:text-base
                               md:text-xl
                               lg:text-2xl
                               xl:text-3xl"
                >
                    "Giving Life to ideas"
                </p>
                <p
                    className="text-xl my-2 cursor-pointer flex gap-2 items-center text-[#4286f4] md:text-2xl"
                    onClick={() => navigate("/technovation")}
                >
                    Technovation <FaExternalLinkAlt />
                </p>
            </div>

            <div 
                className="w-full h-[40%] md:w-[50%] md:h-full "
                    style={{
                        backgroundImage : "url('/images/ctf-logo.png')",
                        backgroundSize: "contain",       
                        backgroundRepeat: "no-repeat",  
                        backgroundPosition: "center",
                    }} 
            >
                {/* <div
                    className="relative left-1/2 -translate-x-1/2 h-2 z-50 animate-slideBar rounded-2xl bg-[#dd1818] w-[60%] backdrop-blur-2xl"
                /> */}
                <Drone></Drone>
            </div>
        </div>
    );
}

export default Home;