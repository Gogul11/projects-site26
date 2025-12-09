import React, { useEffect, useState } from 'react';
import Year from '../components/Year';
import { yearWiseProjects as yearWiseResearch } from '../utils/projectsdata.ts';

const Research = () => {

    const [year, setYear] = useState<number>(2025);

    const research = yearWiseResearch.find((y) => y.year === year)?.projects || [];

    const [researchId, setResearchId] = useState<number>(-1);

    useEffect(() => {
        const timer = setTimeout(() => setResearchId(-1), 0);
        return () => clearTimeout(timer);
    }, [year]);

    return (
        <div className='pt-16 px-14 max-sm:px-5 max-md:px-10 max-lg:px-12'>
            <div className='h-14 w-full mt-8'>
                <Year year={year} setYear={setYear}/>
            </div>

            {year < 2025 
                ? 
                <div className='flex flex-col justify-center m-6 items-center gap-4'>
                    <p className='text-2xl rock-salt'>CTF Research wasn't unlocked in this timeline.</p>

                    <img
                        src="/images/gear.png"
                        className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 animate-spin-slow brightness-110"
                    />
                </div>
                :
                year > new Date().getFullYear()
                ?
                <div className='flex flex-col justify-center m-6 items-center gap-4'>
                    <p className='text-2xl rock-salt'>Loading… new research is on its way</p>

                    <img
                        src="/images/gear.png"
                        className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 animate-spin-slow brightness-110"
                    />
                </div>
                :
                research.length === 0
                ?
                <div className='w-full flex flex-col gap-10 justify-center items-center h-full my-10'>
                    <p className='text-xl rock-salt'>This year’s research will be added soon</p>

                    <img
                        src="/images/gear.png"
                        className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 animate-spin-slow brightness-110"
                    />
                </div>
                :
                <div className='flex flex-col md:flex-row md:justify-evenly'>
                    <div className='flex max-md:overflow-x-scroll gap-4 min p-1 w-full 
                                    md:flex-col md:w-[200px] md:overflow-y-auto md:h-[700px] my-10 md:p-2'
                    >
                        {research.map((item, idx) => (
                            <div
                                key={idx}
                                className='bg-white px-2 py-1 rounded-md max-md:whitespace-nowrap 
                                           text-black cursor-pointer hover:bg-white/50'
                                onClick={() => setResearchId(idx)}
                            >
                                {item.name}
                            </div>
                        ))}
                    </div>

                    <div className='w-full md:w-[80%]'>
                        {researchId === -1 ?
                            <div className='flex flex-col gap-10 justify-center items-center my-10'>
                                <p className='text-xl rock-salt text-center'>Choose a research topic to explore its details</p>

                                <img
                                    src="/images/gear.png"
                                    className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 animate-spin-slow brightness-110"
                                />
                            </div>
                            :
                            <div className='flex flex-col justify-center p-6 w-full gap-10'>
                                <div className='flex flex-col w-full justify-center items-center gap-10 p-1
                                                lg:flex-row-reverse lg:p-2'>
                                    <img 
                                        src="/images/legacy.png" 
                                        className='rounded-2xl w-[400px] h-[400px]
                                                    md:w-[500px] md:h-[300px]' 
                                        alt="" />
                                    <p className='text-2xl md:text-3xl font-bold'>
                                        {research[researchId]?.name}
                                    </p>
                                </div>

                                <hr className="-my-8 border-0 h-px bg-white/40 backdrop-blur-md" />

                                <div className='lg:p-6 md:p-4 p-2'>
                                    <p className='text-lg'>{research[researchId]?.description}</p>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default Research;
