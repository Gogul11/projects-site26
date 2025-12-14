import { useState } from "react";
import { FaGear } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from 'react-router';


const MobileViewNavbar = () => {

    const[isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    const items : Array<string> = ['Home', 'Projects', 'Research', 'Technovation', 'Achivements', 'About Us']

    const navigate = useNavigate()
    const location = useLocation()

    const getPath =  (item : string) : string => {
        if(item === 'home') return '/'
        return '/' + item.replace(' ', '-')
    }

    return (
        <>
            <div className='w-[95%] h-14 bg-white/10 border border-[#c53102]
                            backdrop-blur-md fixed top-2 left-1/2 
                            -translate-x-1/2 shadow-lg rounded-2xl 
                            flex justify-center items-center px-2 z-50'
                            >
                <div className="w-[10%] flex justify-center items-center">
                    <FaGear 
                        size={24}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}    
                    />
                </div>

                <div className='w-[90%] flex justify-center items-center'>
                    <img 
                        src="/images/ctf.png" 
                        className='h-28 cursor-pointer'
                        onClick={() => navigate('https://www.cegtechforum.in/')} 
                        alt="ctf-image" />
                </div>
                
            </div>
            {isMenuOpen && 
                <div className={`fixed top-1/2 left-1/2
                                -translate-x-1/2 -translate-y-1/2 h-[50%] 
                                w-[60%] max-sm:w-[90%] max-md:w[70%]
                                bg-white/10 backdrop-blur-xl mx-auto border border-[#c53102]
                                rounded-2xl shadow-lg p-1
                                flex flex-col justify-center
                                items-center gap-5
                                transform transition-all duration-300 z-50 text-lg
                                ${isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                >
                    {items.map((item, idx) => (
                        <Link 
                            key={idx}
                            to={item === 'Home' ? '/' : item.toLowerCase().replace(' ', '-')}
                            className={location.pathname === getPath(item.toLowerCase()) ? 
                                        'text-[#c53102] underline font-extrabold' : 'text-white'}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >{item}</Link>
                    ))}
                </div>
            }
        </>
    );
}

export default MobileViewNavbar;
