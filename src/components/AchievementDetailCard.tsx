import React from 'react';
import { FaGear } from "react-icons/fa6";


interface props{
    imgUrl : string;
    name : string;
    description : string;
    onClose : () => void;
}

const AchievementDetailCard : React.FC<props> = (props) => {
    return (    
        <div className='fixed z-50 inset-0 bg-black/10 backdrop-blur-2xl p-10 overflow-y-auto'>
            <button className="absolute top-8 right-8 text-white hover:text-[#1b1212]/50 z-10 cursor-pointer" onClick={props.onClose}>
                    <FaGear size={24} />
            </button>

            <div className='mt-6'>
                <div className='flex flex-col w-full justify-center items-center gap-10 p-1
                                lg:flex-row-reverse lg:p-2'>
                    <img 
                        src={props.imgUrl}
                        className='rounded-2xl w-[400px] h-[400px]
                                    md:w-[500px] md:h-[300px] lg:h-[500px] lg:w-[600px]' 
                        alt="" />
                    <p className='text-2xl md:text-3xl font-bold underline text-[#1b1212]'>
                            {props.name}
                    </p>
                </div>
                <div 
                    className='flex justify-center mt-5'
                >
                    <div
                        dangerouslySetInnerHTML={{__html : props.description}}
                        className='text-xl flex flex-col gap-4 lg:w-[75%] md:w-[70%]'
                    ></div>
                </div>
            </div>
        </div>
    );
}

export default AchievementDetailCard;
