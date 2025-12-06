import React, { useEffect, useState } from "react";

interface CardProps {
  title: string;
  content: string;
  image: string;
}

const GlassCard: React.FC<CardProps> = ({ title, content, image }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);

  return (
    <div
			className={`
				relative z-0
				h-[650px]
				rounded-3xl overflow-hidden shadow-2xl shadow-black/30
				transition-all duration-700 mx-auto

				${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
			`}
			style={{
				backgroundImage: `url(${image})`, //TODO : Add new images
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
		{/* Glass Layer */}
			<div className="
				absolute inset-0  z-0
				bg-white/10 
				backdrop-blur-sm 
				border border-white/20
				rounded-3xl
				p-6 flex flex-col justify-center
			">
				<h2 className="text-3xl font-bold text-white drop-shadow-lg">
					{title}
				</h2>

				<p className="text-blue-500 font-extrabold mt-3 leading-relaxed">
					{content}
				</p>
			</div>
    </div>
  );
};

export default GlassCard;
