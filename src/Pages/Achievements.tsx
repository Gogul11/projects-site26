import { useState } from "react";
import AchievementCard from "../components/AchievementCard";
import AchievementDetailCard from "../components/AchievementDetailCard";
import { achievementData } from "../utils/achievenmentsData";
import Loader from "../components/Loader";



const Achievements = () => {
    
    const [achieveIdx, setAchieveIdx] = useState<number>(-1)

    return (
        <div             
            className='pt-18 px-14 max-sm:px-5 max-md:px-10 max-lg:px-12 overflow-y-auto w-full'
        >
            <Loader></Loader>
            {/* <div
                className="my-8 flex flex-wrap gap-4 justify-center"
            >
                {achievementData.map((a, idx) => (
                        <AchievementCard 
                            onClick={() => setAchieveIdx(idx)}
                            key={idx}
                            name={a.name} 
                            imgUrl='/images/ctf-logo.png'/>
                ))}
            </div>
            
            {achieveIdx >= 0 && 
                <AchievementDetailCard 
                    imgUrl={achievementData[achieveIdx].imgUrl}
                    name={achievementData[achieveIdx].name}
                    description={achievementData[achieveIdx].content}
                    onClose={() => setAchieveIdx(-1)}
                />
            } */}
        </div>
    );
}

export default Achievements;
