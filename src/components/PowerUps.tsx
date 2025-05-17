
import { Gamepad, Star, Coins, Download } from "lucide-react";

const PowerUps = () => {
  const powerUps = [
    { title: "Code Kart Nitro",
    description: "Arduino & ESP32 coding for motors, sensors, gesture & wireless control",
    icon: (
      <span className="text-3xl" role="img" aria-label="light bulb and plug">
        💡🔌
      </span>
    ),
  },
  {
    title: "Grip Master Tires",
    description: "High-torque motor setups, traction techniques, and weight balancing for power bots",
    icon: (
      <span className="text-3xl" role="img" aria-label="bolt and tire">
        🔩🛞
      </span>
    ),
  },
  {
    title: "Solder Banana",
    description: "Circuit building, soldering motors, sensors, & power supply systems",
    icon: (
      <span className="text-3xl" role="img" aria-label="banana and fire">
        🍌🔥
      </span>
    ),
  },
  {
    title: "Sensor Seeker Shell",
    description: "IR/ultrasonic sensor integration for autonomous movement & obstacle handling",
    icon: (
      <span className="text-3xl" role="img" aria-label="turtle and eyes">
        🐢👀
      </span>
    ),
    }
  ];

  return (
    <section id="powerups" className="py-16">
      <h2 className="text-2xl font-bold text-center mb-8 text-red-600 border-b-4 border-yellow-400 pb-2 inline-block mario-font">POWER-UPS</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {powerUps.map((powerUp, index) => (
          <div key={index} className="question-block p-6 rounded-lg shadow-lg power-up-card">
            <div className="flex justify-center mb-4">
              {powerUp.icon}
            </div>
            <h3 className="text-lg font-bold mb-2 text-black mario-font">{powerUp.title}</h3>
            <p className="text-gray-700 text-sm">{powerUp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PowerUps;
