import { HeroData } from "@/types/heroStats";
import Image from "next/image";

type Props = {
  hero: HeroData;
};

export default function HeroCard({ hero }: Props) {
  const { metadata, stats } = hero;

  return (
    <div className="bg-white border rounded-xl p-4 shadow-sm" style={{ borderColor: metadata.color }}>
      <div className="flex items-center gap-4 mb-2">
        <Image src={metadata.imageUrl} alt={metadata.name} width={64} height={64} />
        <div>
          <h2 className="font-bold text-lg">{metadata.name}</h2>
          <p className="text-sm text-gray-500">{metadata.roleName}</p>
          <p className="text-md">{stats.timePlayed.displayValue}</p>
        </div>
      </div>
    </div>
  );
}
