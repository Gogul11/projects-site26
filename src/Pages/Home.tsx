import { useEffect, useState } from "react";
import Drone from "../components/Drone";
import Loader from "../components/Loader";

const Home = () => {

    const[loader, setLoader] = useState<boolean>(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoader(false), 2500)

        return () => clearTimeout(timer)
    }, [])

    if(loader){
        return (
            <div
                className='pt-18 px-14 max-sm:px-5 max-md:px-10 max-lg:px-12'
            >
                <Loader/>
            </div>
        )
    }

    return (
        <div 
            className="h-screen w-full flex flex-col ani
                        md:flex-row pt-16 px-14 max-sm:px-5 max-md:px-10 max-lg:px-12"
        >
            <div 
                className="w-full h-[40%] flex flex-col justify-center items-center max-md:items-center gap-4
                           md:w-[50%] md:h-full " 
            >
                <a 
                    className="text-[44px]
                    bg-clip-text
                               text-transparent
                               font-bold
                               gradient
                               day-one
                               sm:text-[54px]
                               md:text-[69px]
                               lg:text-[74px]
                               xl:text-[94px]" 
                    href="https://cegtechforum.in/"
                    target="_blank"
                >
                    CTF
                </a>

                <p 
                    className="day-one
                               text-[40px]
                               min-[350px]:text-[50px]
                               sm:text-[65px]
                               md:text-[70px]
                               lg:text-[90px]"
                >
                    Projects
                </p>

                <p 
                    className="text-sm max-md:text-center day-one
                               sm:text-base
                               md:text-xl
                               lg:text-2xl
                               xl:text-3xl"
                >
                    "Giving Life to ideas !"
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