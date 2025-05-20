import { useState, useEffect } from "react";
import { Star } from "lucide-react";

const Hero = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const eventDate = new Date("2025-05-31T00:00:00");

    const updateCountdown = () => {
      const now = new Date();
      const difference = eventDate.getTime() - now.getTime();

      if (difference < 0) {
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        return;
      }

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      setDays(d);
      setHours(h);
      setMinutes(m);
      setSeconds(s);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
   <section
  className="relative pt-20 pb-16 text-center bg-gradient-to-b from-blue-600 to-blue-800 text-white rounded-lg my-6 mario-font overflow-hidden"
  style={{ minHeight: "400px" }}
>
  {/* Background SVG */}
  <div className="absolute inset-0 opacity-10 pointer-events-none">
    <div
      className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImNsb3VkcyIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNMCAwIEwxMCAxMCBMMjAgMCBMMzAgMTAgTDQwIDAgTDQwIDIwIEwzMCAzMCBMMjAgMjAgTDEwIDMwIEwwIDIwIEwwIDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2Nsb3VkcykiIC8+PC9zdmc+')]"
      style={{ backgroundSize: "35px 35px" }}
    ></div>
  </div>

  {/* Content Wrapper with padding and no negative margins */}
  <div className="relative max-w-5xl mx-auto px-6 flex flex-col items-center gap-6">
    <h1 className="text-4xl md:text-5xl font-bold tracking-widest mario-font">
      <span className="text-yellow-300">Summer of</span>
      <span className="text-white"> Projects</span>
      <span className="text-green-400"> 25</span>
    </h1>

    <div className="flex items-center gap-1 text-xl text-yellow-300">
      <Star />
      <Star />
      <p className="text-white mx-3">IT'S-A ME, THE ULTIMATE LEARNING EVENT!</p>
      <Star />
      <Star />
    </div>

    {/* Countdown Blocks */}
    <div className="flex gap-3">
      {[days, hours, minutes, seconds].map((value, idx) => {
        const labels = ["DAYS", "HRS", "MINS", "SECS"];
        return (
          <div
            key={idx}
            className="question-block p-3 rounded w-15 flex flex-col items-center bg-black/20"
            style={{ minWidth: "70px" }}
          >
            <div className="text-3xl font-bold">{value}</div>
            <div className="text-xs tracking-widest">{labels[idx]}</div>
          </div>
        );
      })}
    </div>

    <div className="flex gap-5">
      <a
        href="https://forms.gle/WCaBa7tV343sGfPN8"
        target="_blank"
        rel="noopener noreferrer"
        className="mario-button hover:scale-105 transition-transform"
      >
    REGISTER NOW
  </a>
      
{/*       <button href="https://forms.gle/WCaBa7tV343sGfPN8"  className="mario-button hover:scale-105 transition-transform">REGISTER NOW</button> */}
      <a
        href="/Brochure.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mario-button hover:scale-105 transition-transform"
      >
        BROCHURE
      </a>
    </div>
  </div>
</section>
  );
};

export default Hero;

