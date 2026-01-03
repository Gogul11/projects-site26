import React from 'react';

interface props{
    name : string;
    imgUrl ?: string;
    onClick ?: () => void
}

const AchievementCard : React.FC<props> = (props) => {
    return (
        <div className='h-64 w-60 border bg-black/20 p-3 border-[#1b1212]/10
                        flex flex-col justify-center items-center
                        rounded-lg cursor-pointer backdrop-blur-2xl
                        hover:bg-[#1b1212]/20'
            onClick={props.onClick}
        >
            <img 
                src={props.imgUrl} 
                alt="Achievement-Image" 
                className='h-52'
            />
            <p
                className='text-xl'
            >{props.name}</p>
        </div>
    );
}

export default AchievementCard;
