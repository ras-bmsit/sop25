import { Trophy, Coins } from "lucide-react";

const Leaderboard = () => {
  // Updated data: Teams with 2 points each
  const topTeams = [
    { teamNumber: "Team 5", points: 2 },
    { teamNumber: "Team 21", points: 2 },
    { teamNumber: "Team 31", points: 2 },
  ];

  return (
    <section id="leaderboard" className="py-16">
      <h2 className="text-2xl font-bold text-center mb-8 text-red-600 border-b-4 border-yellow-400 pb-2 inline-block mario-font">
        LEADERBOARD
      </h2>

      <div className="bg-blue-900 border-4 border-yellow-400 rounded-lg overflow-hidden shadow-lg">
        <div className="bg-red-600 text-white p-4 flex items-center justify-center">
          <Trophy className="text-yellow-300 h-6 w-6 mr-2" />
          <h3 className="text-xl font-bold text-center mario-font">TOP TEAMS</h3>
          <Trophy className="text-yellow-300 h-6 w-6 ml-2" />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-blue-800">
                <th className="py-3 px-4 text-left text-white mario-font text-xs">RANK</th>
                <th className="py-3 px-4 text-left text-white mario-font text-xs">TEAM NUMBER</th>
                <th className="py-3 px-4 text-left text-white mario-font text-xs">POINTS</th>
              </tr>
            </thead>
            <tbody>
              {topTeams.length > 0 ? (
                topTeams.map((team, index) => (
                  <tr key={index} className="hover:bg-blue-700 transition-colors">
                    <td className="py-3 px-4 text-white mario-font">{index + 1}</td>
                    <td className="py-3 px-4 text-white mario-font">{team.teamNumber}</td>
                    <td className="py-3 px-4 text-white mario-font flex items-center gap-2">
                      <Coins className="text-yellow-400 w-4 h-4" />
                      {team.points}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="text-center py-6 text-white mario-font">
                    No teams yet. Stay tuned!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;

export default Leaderboard;
