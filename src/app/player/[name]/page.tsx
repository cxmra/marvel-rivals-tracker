import { HeroData } from "@/types/heroStats";
import HeroCard from "@/components/heroCard";

interface PlayerPageProps {
  params: {
    name: string;
  };
}

export default async function Player({ params }: PlayerPageProps) {
  const { name } = await params;

  const res = await fetch(`https://marvelrivalsapi.com/api/v1/player/${name}`, {
    cache: "no-store",
    headers: {
      "x-api-key": process.env.RIVALS_API_KEY!,
    },
  });

  if (!res.ok) {
    return <div className="p-4 text-red-600">Player not found.</div>;
  }

  const data = await res.json();
  // const heroes: HeroData[] = data.data.segments.slice(2, -3);

  return (
    <div className="p-8 min-h-screen bg-gray-800">
      <div className="flex w-3/5 mx-auto mb-6 bg-gray-800 p-4 rounded-lg border items-center space-x-6">
        {/* Player Image */}
        <div className="relative w-20 h-20">
          <img src={`https://marvelrivalsapi.com/rivals/${data.player.icon.player_icon}`} className="w-20 h-20 rounded-md" />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-blue-700 text-white text-xs text-center font-semibold px-2 rounded-full">{data.player.level}</div>
        </div>

        {/* Name and Stats stacked vertically */}
        <div className="flex flex-col justify-center text-white">
          <h1 className="text-2xl font-bold">{data.name}</h1>
          <div className="mt-2">
            <div>Matches: {data.overall_stats.total_matches}</div>
            <div>Wins: {data.overall_stats.total_wins}</div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">{/* Hero cards go here */}</div>
    </div>
  );
}
