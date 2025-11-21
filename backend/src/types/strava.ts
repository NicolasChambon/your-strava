import { SportType } from "@/generated/prisma";

export type StravaTokenResponse = {
  access_token: string;
  refresh_token: string;
  expires_at: number;
  athlete: SummaryAthlete;
};

export interface SummaryActivity {
  id: number;
  external_id: string;
  upload_id: number;
  athlete: MetaAthlete;
  name: string;
  distance: number;
  moving_time: number;
  elapsed_time: number;
  total_elevation_gain: number;
  elev_high: number;
  elev_low: number;
  sport_type: SportType;
  start_date: string;
  start_date_local: string;
  timezone: string;
  start_latlng: LatLng;
  end_latlng: LatLng;
  achievement_count: number;
  kudos_count: number;
  comment_count: number;
  athlete_count: number;
  photo_count: number;
  total_photo_count: number;
  map: PolylineMap;
  device_name: string;
  trainer: boolean;
  commute: boolean;
  manual: boolean;
  private: boolean;
  flagged: boolean;
  workout_type: number;
  upload_id_str: string;
  average_speed: number;
  max_speed: number;
  has_kudoed: boolean;
  hide_from_home: boolean;
  gear_id: string;
  kilojoules: number;
  average_watts: number;
  device_watts: boolean;
  max_watts: number;
  weighted_average_watts: number;
}

export interface SummaryAthlete extends MetaAthlete {
  username: string;
  firstname: string;
  lastname: string;
  bio: string;
  city: string;
  state: string;
  country: string;
  sex: "M" | "F" | "O" | null;
  premium: boolean;
  summit: boolean;
  created_at: string;
  updated_at: string;
  badge_type_id: number;
  weight: number;
  profile_medium: string;
  profile: string;
  friend: number | null;
  follower: number | null;
}

export interface MetaAthlete {
  id: number;
  resource_state: number;
}

export type LatLng = [number, number];

export type PolylineMap = {
  id: string;
  polyline: string;
  summary_polyline: string;
};
