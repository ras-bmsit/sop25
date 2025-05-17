
const Sponsors = () => {
  const sponsors = [
    { name: "Sponsor 1", level: "Gold Star" },
    { name: "Sponsor 2", level: "Gold Star" },
    { name: "Sponsor 3", level: "Silver Coin" },
    { name: "Sponsor 4", level: "Silver Coin" },
    { name: "Sponsor 5", level: "Bronze Shell" },
    { name: "Sponsor 6", level: "Bronze Shell" }
  ];

  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold text-center mb-8 text-green-600 border-b-4 border-yellow-400 pb-2 inline-block mario-font">KINGDOM ALLIES</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
        {sponsors.map((sponsor, index) => {
          let bgColor, textColor, borderColor;
          switch (sponsor.level) {
            case "Gold Star": 
              bgColor = "bg-yellow-100"; 
              borderColor = "border-yellow-400";
              textColor = "text-yellow-800";
              break;
            case "Silver Coin": 
              bgColor = "bg-gray-100"; 
              borderColor = "border-gray-400";
              textColor = "text-gray-700";
              break;
            case "Bronze Shell": 
              bgColor = "bg-amber-50"; 
              borderColor = "border-amber-400";
              textColor = "text-amber-800";
              break;
            default: 
              bgColor = "bg-white";
              borderColor = "border-gray-300";
              textColor = "text-gray-600";
          }
          
          return (
            <div key={index} className={`${bgColor} p-4 rounded-lg border-2 ${borderColor} question-block`}>
              <div className="font-bold mb-1 mario-font text-xs">{sponsor.name}</div>
              <div className={`text-xs ${textColor}`}>{sponsor.level}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Sponsors;
