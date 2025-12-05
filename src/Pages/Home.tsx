
const Home = () => {
    return (
        <div 
            className="h-auto w-full flex flex-col-reverse py-10 justify-center items-center 
                       md:h-screen md:flex-row"
        >
            <div 
                className="w-full h-auto flex flex-col justify-center items-center gap-4 mt-6
                           md:w-[50%] md:h-full md:mt-0" 
            >
                <p 
                    className="text-[40px]
                               bg-linear-to-r from-red-300 to-orange-600
                               bg-clip-text text-transparent 
                               bruno-ace-sc-regular
                               sm:text-[50px]
                               md:text-[65px]
                               lg:text-[70px]
                               xl:text-[90px]" 
                >
                    CTF
                </p>

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
            </div>

            <div 
                className="w-full h-[50%] md:w-[50%] md:h-full"
            >
            </div>
        </div>
    );
}

export default Home;