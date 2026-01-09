import React from "react";
import { FaGear } from "react-icons/fa6";

interface CardProps {
  title: string;
  content: string;
  image: string;
  onClose: () => void;
}

const GlassCard: React.FC<CardProps> = ({ title, content, image, onClose }) => {

  return (
    <div 
		className="bg-black/5 fixed inset-0 z-50 p-4 overflow-y-auto backdrop-blur-md flex sm:justify-center sm:items-center "
		onClick={onClose}
	>
       	
		<button className="absolute top-8 right-8 text-white hover:text-[#1b1212]/50 z-10 cursor-pointer" onClick={onClose}>
         	<FaGear size={24} />
        </button>

		<div 
			className="bg-white/10 h-fit rounded-3xl md:w-[50%] lg:w-[40%] border border-[#1b1212]/10"
			onClick={(e) => e.stopPropagation()}
		>
	    	<img src={image} alt={title} className="w-full h-64 object-cover rounded-t-3xl" />

			<div className="p-6 flex flex-col">
    	       <h2 className="text-3xl font-bold text-[#1b1212] my-1 day-one">{title}</h2>
        	   <p className="text-white/90 mt-4 text-lg leading-relaxed">{content}</p>
         	</div>
		</div>

    </div>
  );
};

export default GlassCard;
