import React from 'react';

interface props{
    name : string;
    imgUrl ?: string;
    onClick ?: () => void
}

const AchievementCard : React.FC<props> = (props) => {
    return (
        <div className='h-64 w-60 border bg-black/50 p-3 
                        flex flex-col justify-center items-center
                        rounded-lg cursor-pointer backdrop-blur-2xl
                        hover:bg-white/20'
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
