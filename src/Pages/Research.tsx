import { useEffect, useState } from 'react';
import Year from '../components/Year';
import {yearWiseResearch} from '../utils/projectsdata.ts'
import { BiLinkExternal } from "react-icons/bi";
import Contact from '../components/Contact.tsx';

const Projects = () => {

    const [year, setYear] = useState<number>(2025)

    const researches = yearWiseResearch.find((y) => y.year === year)?.researches || []

    const [researchId, setResearchId] = useState<number>(-1)

    useEffect(() => {
        const timer = setTimeout(() => setResearchId(-1), 0);
        return () => clearTimeout(timer);
    }, [year]);


    return (
        <div
            className='pt-16 px-14 max-sm:px-5 max-md:px-10 max-lg:px-12'
        >
            <div className='h-14 w-full my-8'>
                <Year year={year} setYear={setYear}/>
            </div>

            {
            year < 2025 
                ? 
                    <div className='flex flex-col justify-center m-6 items-center gap-4'>
                        <p className='text-2xl day-one text-center'>CTF Research weren't unlocked in this timeline.</p>

                        <img
                            src="/images/gear.png"
                            className="w-40 h-40 
                                        sm:w-48 sm:h-48 
                                        md:w-56 md:h-56 
                                        lg:w-72 lg:h-72 
                                        animate-spin-slow brightness-110"
                        />
                    </div>
                :
            year > new Date().getFullYear() 
                ?
                    <div className='flex flex-col justify-center m-6 items-center gap-4'>
                        <p className='text-2xl day-one text-center'>Loading… something cool is on its way</p>

                        <img
                            src="/images/gear.png"
                            className="w-40 h-40 
                                        sm:w-48 sm:h-48 
                                        md:w-56 md:h-56 
                                        lg:w-72 lg:h-72 
                                        animate-spin-slow brightness-110"
                        />
                    </div> 
                :
            researches.length === 0 
                ?
                    <div className='w-full flex flex-col gap-10 justify-center items-center h-full my-10'>
                        <p className='text-2xl day-one text-center'>This year's researches are coming soon</p>
                        
                        <img
                            src="/images/gear.png"
                            className="w-40 h-40 
                                        sm:w-48 sm:h-48 
                                        md:w-56 md:h-56 
                                        lg:w-72 lg:h-72 
                                        animate-spin-slow brightness-110"
                        />
                    </div>
                :
                    <div className='flex flex-col md:flex-row md:justify-evenly'>
                        <div className='flex max-md:overflow-x-scroll gap-4 min p-1 w-full 
                                        md:flex-col md:w-[200px] md:overflow-y-auto md:h-[700px] my-10 md:p-2'
                        >
                            {researches.map((project, idx) => (
                                <div
                                    key={idx}
                                    className='bg-white/5 px-2 py-1 rounded-md max-md:whitespace-nowrap border border-[#1b1212]/10
                                                text-white cursor-pointer
                                                hover:bg-white/10 backdrop-blur-2xl shadow-2xl w-[180px] h-8 overflow-clip'
                                    onClick={() => setResearchId(idx)}
                                >
                                    {project.name}
                                </div>
                            ))}
                        </div>
                        
                        <div className='w-full md:w-[80%]'>
                            {researchId === -1 ? 
                                <div className='flex flex-col gap-10 justify-center items-center my-10'>
                                    <p className='text-2xl day-one text-center'>Choose a research to decode its details</p>

                                    <img
                                        src="/images/gear.png"
                                        className="w-40 h-40 
                                                    sm:w-48 sm:h-48 
                                                    md:w-56 md:h-56 
                                                    lg:w-72 lg:h-72 
                                                    animate-spin-slow brightness-110"
                                    />
                                </div>
                                :
                                // Content of the project
                                <div className='flex flex-col justify-center p-6 w-full 
                                                gap-10 bg-white/10 mb-4 rounded-2xl
                                                backdrop-blur-2xl shadow-2xl'>
                                    <div className='flex flex-col w-full justify-center items-center gap-10 p-1
                                                    lg:flex-row-reverse lg:p-2'>
                                        <img 
                                            src={researches[researchId].imgUrl ? researches[researchId].imgUrl : '/images/ctf-logo.png'}
                                            className='rounded-2xl w-[400px] h-[400px]
                                                        md:w-[500px] md:h-[300px]' 
                                            alt="" />
                                        <p className='text-[#1b1212] text-2xl md:text-3xl font-bold flex flex-col gap-2 underline'>
                                                <span className='day-one'>{researches[researchId]?.name}</span>
                                                {researches[researchId]?.link && 
                                                    <a
                                                        className='text-sm flex gap-1 items-center md:text-md text-[#dd1818]'
                                                        href={researches[researchId].link}
                                                        target='_blank'
                                                    >
                                                                More Details <BiLinkExternal/>
                                                    </a>
                                                }
                                        </p>
                                    </div>
                                    <hr className="-my-8 border-0 h-px bg-white/40 backdrop-blur-md" />
                                    <div className='lg:p-6 md:p-4'>
                                        <p className='text-lg'>{researches[researchId]?.description}</p>                                                
                                    </div>
                                    {/* //Members */}
                                    {researches[researchId].teamMembers && 
                                        <div className='flex flex-col justify-center items-center gap-4'>
                                            <p className='text-2xl underline'>Team Members</p>
                                            {researches[researchId].teamMembers.map((member, idx) => (
                                                <Contact 
                                                    key={idx}
                                                    name={member.name}
                                                    role={member.role}
                                                    url={member.link}
                                                    extraClass='w-full bg-black/50 backdrop-blur-2xl shadow-2xl text-sm md:text-md
                                                                h-20 rounded-2xl p-1 flex items-center md:w-[70%] lg:w-[50%]'
                                                />
                                            ))}
                                        </div>
                                    }
                                </div>
                            }   
                        </div>
                    </div>
            }


        </div>
    );
}

export default Projects;
