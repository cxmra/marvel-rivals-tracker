export interface HeroAttributes {
  heroId: number;
  season: number;
  mode: string;
  role: string;
}

export interface HeroMetadata {
  name: string;
  imageUrl: string;
  roleName: string;
  color: string;
}

export interface HeroStat {
  displayName: string;
  displayCategory: string;
  category: string;
  metadata: Record<string, unknown>;
  value: number;
  displayValue: string;
  displayType: string;
}

export interface HeroStats {
  timePlayed: HeroStat;
  timePlayedWon: HeroStat;
  // Add more stat fields here if needed
}

export interface HeroData {
  type: string;
  attributes: HeroAttributes;
  metadata: HeroMetadata;
  expiryDate: string;
  stats: HeroStats;
}
