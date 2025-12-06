import React, { useEffect, useState } from 'react';
import Contact from '../components/Contact';
import { IoMdMail } from "react-icons/io";
import GlassCard from '../components/GlassCard';

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

    const [activeId, setActiveId] = useState<number>(0)

    useEffect(() => {
        const id = setInterval(() => {
            setActiveId(prev => (prev + 1) % cards.length)
        }, 5000)

        return () => clearInterval(id)
    }, [])

    return (
        <div className='w-full h-screen flex flex-col gap-4
                        md:flex-row'>
           
           <div className='w-full md:h-full md:w-[50%] flex flex-col justify-center gap-6 py-4'>
                <div>
                    <GlassCard
                        title={cards[activeId].title}
                        content={cards[activeId].content}
                        image={cards[activeId].image}
                    />
                </div>

                <div className="flex gap-2 mt-3 w-full justify-center">
                    {cards.map((_, idx) => (
                        <div
                            key={idx}
                            onClick={() => setActiveId(idx)}
                            className={`cursor-pointer transition-all duration-300 ${
                                activeId === idx
                                    ? "w-6 h-2 bg-white/70 rounded-full"
                                    : "w-2 h-2 bg-white/40 rounded-full"
                            }`}
                        ></div>
                    ))}
                </div>


            </div>
            <div className=' w-full flex flex-col justify-center items-center gap-4
                            md:h-full md:w-[50%] pb-4'>
                <a 
                    className='flex justify-center items-center w-fit gap-1 bg-black/20 rounded-lg px-2 py-1'
                    href='mailto:projecct@cegtechforum.in'
                >
                    <IoMdMail size={20} color='yellow' />
                    <p>projects@cegtechforum.in</p>
                </a>
                <Contact name='Gogul' number='9943638746' url='https://google.com'/>
                <Contact name='Gogul' number='9943638746' url='h.com'/>
                <Contact name='Gogul' number='9943638746' url='h.com'/>
                <Contact name='Gogul' number='9943638746' url='h.com'/>
            </div>
        </div>
    );
}

export default AboutUs;
