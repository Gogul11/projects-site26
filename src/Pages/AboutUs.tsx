import { useState, useEffect } from 'react';
import Contact from '../components/Contact';
import { IoMdMail } from "react-icons/io";
import GlassCard from '../components/GlassCard';
import { FaCaretSquareRight } from "react-icons/fa";
import { contactData } from '../utils/contactData';
import Loader from '../components/Loader';
import { cards } from '../utils/aboutUsData';

const AboutUs = () => {


    const [activeCard, setActiveCard] = useState<number | null>(null);

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
        <div className='w-full h-screen flex flex-col justify-center items-center gap-4 md:flex-row
                        pt-16 px-14 max-sm:px-5 max-md:px-10 max-lg:px-12 ani'> 
            
            <div className='h-[50%] w-full md:h-full md:w-[50%] flex flex-col gap-5 justify-center items-center'> 
                <p
                    className='day-one text-3xl max-[420px]:text-2xl max-xs text-[#1b1212] font-semibold'
                >Meet our purpose</p>
                {cards.map((card, idx) => (
                    <div
                        key={idx}
                        className="px-6 py-3 bg-white/10 rounded-lg border border-[#1b1212]/10
                                    backdrop-blur-sm cursor-pointer
                                    flex items-center gap-5 max-w-[350px] w-[300px] max-[350px]:w-fit"
                        onClick={() => setActiveCard(idx)}
                    >
                        <FaCaretSquareRight size={20} />
                        {card.title}
                    </div>
                ))}
            </div> 
            
            <div className='h-[50%] w-full flex flex-col justify-center items-center gap-4 md:h-full md:w-[50%] mb-4'> 
                <a 
                    className='flex justify-center items-center w-fit gap-1 bg-black/10 border border-[#1b1212]/10 rounded-lg px-2 py-1' 
                    href='mailto:projecct@cegtechforum.in' 
                > 
                    <IoMdMail size={20} color='yellow' /> 
                    <p>projects@cegtechforum.in</p> 
                </a> 
                {contactData.map((c, idx) => (
                    <Contact 
                        key={idx}
                        name={c.name} 
                        number={c.number} 
                        url={c.url}
                    /> 
                ))}

                <p className='text-center day-one'>Designed & Developed by CTF Projects & Research</p>
                
            </div> 

            {activeCard !== null && (
                <GlassCard
                    title={cards[activeCard].title}
                    content={cards[activeCard].content}
                    image={cards[activeCard].image}
                    onClose={() => setActiveCard(null)}
                />
            )}
        </div>
    );
}

export default AboutUs;
