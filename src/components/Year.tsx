import type React from "react";
import { IoMdArrowDropleftCircle,  IoMdArrowDroprightCircle } from "react-icons/io";

interface yearProps {
    year : number,
    setYear : React.Dispatch<React.SetStateAction<number>>
}
const Year:React.FC<yearProps> = (props) => {
    return (
        <div className="flex gap-4 h-full justify-center items-center py-2 day-one">
            <IoMdArrowDropleftCircle 
                onClick={() => props.setYear(prev => prev - 1)}
                className="cursor-pointer"
                color="#1b1212"
                size={40}
            />

            <p className="text-5xl">{props.year}</p>

            <IoMdArrowDroprightCircle 
                onClick={() => props.setYear(prev => prev + 1)}
                className="cursor-pointer"
                color="#1b1212"
                size={40}
            />
        </div>
    );
}

export default Year;
