import React from 'react';

const Loader = () => {
    return (
        <div className='h-full w-full flex flex-col gap-4 items-start'>
            <div className='w-[70%] h-20 md:h-32 
                            animate-pulse 
                            bg-white/20 rounded-2xl border border-white/10' />
            <div className='w-full flex gap-4 h-[500px]'>
                <div className='w-full md:w-[60%] lg:w-[50%] h-full animate-pulse bg-white/20 rounded-4xl border border-white/10' />
                <div className='w-0 md:w-[40%] lg:w-[50%] h-full flex flex-col gap-6 justify-center items-center'>
                    {Array.from({length : 9}).map((_,idx) => (
                        <div
                            key={idx} 
                            className='max-md:opacity-0 w-[80%] h-8 md:animate-pulse bg-white/20 rounded-md border border-white/10'/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Loader;
