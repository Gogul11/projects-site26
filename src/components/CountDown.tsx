import { useEffect, useState } from "react";

const Countdown = ({ targetDate }: { targetDate: string }) => {
  	const [time, setTime] = useState({ d: "00", h: "00", m: "00", s: "00" });

  	useEffect(() => {
		const update = () => {
			const diff = new Date(targetDate).getTime() - Date.now();
			if (diff <= 0) return setTime({ d: "00", h: "00", m: "00", s: "00" });

			const d = String(Math.floor(diff / 86400000)).padStart(2, "0");
			const h = String(Math.floor((diff / 3600000) % 24)).padStart(2, "0");
			const m = String(Math.floor((diff / 60000) % 60)).padStart(2, "0");
			const s = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");

			setTime({ d, h, m, s });
		};

		update();
		const id = setInterval(update, 1000);
		return () => clearInterval(id);

	}, [targetDate]);

	return (
		<div className="flex justify-center items-center select-none py-6">
			<div className="w-full h-full flex flex-col justify-center items-center relative">

				<img
					src="/images/gear.png"
					className="w-40 h-40 
								sm:w-48 sm:h-48 
								md:w-56 md:h-56 
								lg:w-72 lg:h-72 
								animate-spin-slow brightness-110
								absolute "
				/>


				
				<div className="flex flex-col justify-center items-center 
								bg-black/30 p-4 rounded-2xl backdrop-blur-xs
								z-30"
				>
				
				{/* Numbers */}
					<span 
							className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider"
							style={{ color: "#dd1818", textShadow: "0 0 15px #dd1818" }}
					>
						{time.d}:{time.h}:{time.m}:{time.s}
					</span>

					{/* Labels */}
					<span className="w-full text-center text-xs sm:text-sm md:text-lg lg:text-xl uppercase tracking-wide mt-1"
							style={{ color: "#fff" }}>
						Days : Hours : Minutes : Seconds
					</span>

				</div>
			</div>
		</div>
	);
};

export default Countdown;
