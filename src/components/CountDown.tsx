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
    <div className="w-full flex justify-center items-center p-1">
      <div className="flex gap-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl px-4 py-2 shadow-xl">
        {[
          ["Days", time.d],
          ["Hours", time.h],
          ["Min", time.m],
          ["Sec", time.s]
        ].map(([label, val]) => (
          <div key={label} className="flex flex-col items-center">
            <span className="text-lg font-bold text-cyan-300 drop-shadow-md">{val}</span>
            <span className="text-white/80 text-xs uppercase tracking-widest">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;
