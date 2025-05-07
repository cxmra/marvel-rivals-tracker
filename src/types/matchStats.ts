export interface Match {
  match_uid: string;
  map_id: number;
  map_thumbnail: string;
  duration: number;
  season: number;
  winner_side: number;
  mvp_uid: number;
  svp_uid: number;
  match_time_stamp: number;
  play_mode_id: number;
  game_mode_id: number;
  score_info: {
    [key: string]: number;
  };
  player_performance: {
    player_uid: number;
    hero_id: number;
    hero_name: string;
    hero_type: string;
    kills: number;
    deaths: number;
    assists: number;
    is_win: {
      score: number;
      is_win: boolean;
    };
    disconnected: boolean;
    camp: number;
    score_change: number;
    level: number;
    new_level: number;
    new_score: number;
  };
}
