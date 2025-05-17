const Schedule = () => {
  const events = [
    {
      day: "DAY 1 - MAY 31",
      events: [
        { time: "Coming Soon", title: "TBD", description: "Details will be revealed soon..." }
      ]
    },
    {
      day: "DAY 2 - JUNE 7",
      events: [
        { time: "Coming Soon", title: "TBD", description: "Details will be revealed soon..." }
      ]
    },
    {
      day: "DAY 3 - JUNE 14",
      events: [
        { time: "Coming Soon", title: "TBD", description: "Details will be revealed soon..." }
      ]
    },
    {
      day: "DAY 4 - JUNE 21",
      events: [
        { time: "Coming Soon", title: "TBD", description: "Details will be revealed soon..." }
      ]
    },
  ];

  return (
    <section id="schedule" className="py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4 text-green-600 border-b-4 border-yellow-400 pb-2 inline-block mario-font">
        SCHEDULE
      </h2>
      <div className="text-center text-sm font-semibold text-red-600 bg-yellow-100 border border-yellow-400 px-4 py-2 rounded-full w-fit mx-auto mb-10 animate-bounce">
        🚨 REGISTRATION OPEN NOW! 🚨
      </div>

      <div className="flex flex-col gap-8">
        {events.map((day, dayIndex) => (
          <div key={dayIndex} className="mario-pipe rounded-lg overflow-hidden shadow-lg">
            <div className="bg-green-500 text-white text-center p-4">
              <h3 className="text-xl font-bold mario-font">{day.day}</h3>
            </div>
            <div className="p-4 bg-white">
              {day.events.map((event, eventIndex) => (
                <div
                  key={eventIndex}
                  className="mb-4 pb-4 border-b border-gray-200 last:border-b-0 last:pb-0 last:mb-0"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-green-700 mario-font text-xs">{event.time}</span>
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full mario-font">{event.title}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Schedule;
