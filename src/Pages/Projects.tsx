import React, { useEffect, useState } from 'react';
import Year from '../components/Year';
import {yearWiseProjects} from '../utils/projectsdata.ts'

const Projects = () => {

    const [year, setYear] = useState<number>(2025)

    const projects = yearWiseProjects.find((y) => y.year === year)?.projects || []

    const [projectId, setProjectId] = useState<number>(-1)

    useEffect(() => {
        const timer = setTimeout(() => setProjectId(-1), 0);
        return () => clearTimeout(timer);
    }, [year]);


    return (
        <div
            className='pt-16 px-14 max-sm:px-5 max-md:px-10 max-lg:px-12'
        >
            <div className='h-14 w-full mt-8'>
                <Year year={year} setYear={setYear}/>
            </div>

            {
            year < 2011 
                ? 
                    <div className='flex flex-col justify-center m-6 items-center gap-4'>
                        <p className='text-2xl rock-salt'>CTF Projects weren’t unlocked in this timeline.</p>
                    </div>
                :
            year > new Date().getFullYear() 
                ?
                    <div className='flex flex-col justify-center m-6 items-center gap-4'>
                        <p className='text-2xl rock-salt'>Loading… something cool is on its way</p>

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
            projects.length === 0 
                ?
                    <div className='w-full flex justify-center items-center h-full my-10'>
                        <p className='text-xl rock-salt'>This year's projects are coming soon</p>
                        
                    </div>
                :
                    <div className='flex flex-col md:flex-row '>
                        <div className='flex max-md:overflow-x-scroll gap-4 min p-1 w-full
                                        md:flex-col md:w-[200px] md:overflow-y-auto md:h-[700px] my-10 md:p-2'
                        >
                            {projects.map((project, idx) => (
                                <div
                                    key={idx}
                                    className='bg-white px-2 py-1 rounded-md max-md:whitespace-nowrap 
                                                text-black cursor-pointer
                                                hover:bg-white/50'
                                    onClick={() => setProjectId(idx)}
                                >
                                    {project.name}
                                </div>
                            ))}
                        </div>
                        
                        <div className='w-full md:w-[80%]'>
                            {projectId === -1 ? 
                                <div className='flex flex-row justify-center my-10'>
                                    <p className='text-xl rock-salt text-center'>Choose a project to decode its details</p>
                                </div>
                                :
                                <div className='flex flex-col justify-center p-6'>
                                    <p className='text-2xl'>{projects[projectId]?.name}</p>
                                    <p>{projects[projectId]?.description}</p>
                                </div>
                            }   
                        </div>
                    </div>
            }


        </div>
    );
}

export default Projects;
