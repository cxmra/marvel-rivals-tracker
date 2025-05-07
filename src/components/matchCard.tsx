import { Match } from "@/types/matchStats"; // adjust the import path

export default function MatchCard({ match }: { match: Match }) {
  const perf = match.player_performance;
  const date = new Date(match.match_time_stamp * 1000).toLocaleString();
  const win = perf.is_win.is_win;

  return (
    <div className="bg-white p-4 rounded-md border w-full">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-4">
          <img src={`https://marvelrivalsapi.com/rivals/${perf.hero_type}`} alt="map" className="w-16 h-16 rounded" />
          <div>
            <h2 className="text-lg font-bold">{perf.hero_name}</h2>
            <p className="text-sm text-gray-500">{date}</p>
            <p className={`text-sm font-semibold ${win ? "text-green-600" : "text-red-600"}`}>{win ? "Victory" : "Defeat"}</p>
          </div>
        </div>
        <div className="text-right text-sm text-gray-700">
          <p>Kills: {perf.kills}</p>
          <p>Deaths: {perf.deaths}</p>
          <p>Assists: {perf.assists}</p>
        </div>
      </div>
    </div>
  );
}
