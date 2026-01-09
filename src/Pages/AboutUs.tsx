import { useState } from 'react';
import Contact from '../components/Contact';
import { IoMdMail } from "react-icons/io";
import GlassCard from '../components/GlassCard';
import { FaCaretSquareRight } from "react-icons/fa";
import { contactData } from '../utils/contactData';

const AboutUs = () => {

    const cards = [
        {
            title: "Vision",
            content: "Giving life to ideas, acting as catalysts to enable students to turn their ideas into reality, and pushing these ideas forward to make them successful entrepreneurs.",
            image: "/images/vision.png"
        },
        {
            title: "Mission",
            content: "Here at CTF PROJECTS, our mission is all about bringing ideas to life in a cool and tech-savvy way. We're like the dream team for innovation! We want to create an awesome space where ideas not only survive but also thrive. We're not just brainstorming; we're all about making things happen. By giving your brilliant ideas the right tools, support, and a bit of tech magic, we're turning them into real, game-changing solutions. Our goal is to keep things fresh and exciting, making sure we're always on the cutting edge of what's possible at CTF PROJECTS.",
            image: "/images/mission.png"
        },
        {
            title: "Legacy",
            content: "CTF Projects has had a rich legacy since 2007, giving life to ideas and enabling students to embark on their technical journey, fueling their ideas into reality. Many innovative projects have been set sail by CTF projects, and a few projects have been pushed to enroll as startups. CTF projects always strive to achieve better projects and provide technical knowledge and support to students.",
            image: "/images/legacy.png"
        }
    ];

    const [activeCard, setActiveCard] = useState<number | null>(null);

    return (
        <div className='w-full h-screen flex flex-col justify-center items-center gap-4 md:flex-row
                        pt-16 px-14 max-sm:px-5 max-md:px-10 max-lg:px-12'> 
            
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
