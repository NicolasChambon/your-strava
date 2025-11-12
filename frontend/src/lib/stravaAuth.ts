const STRAVA_URL = import.meta.env.VITE_STRAVA_URL;
const WEB_APP_URL = import.meta.env.VITE_WEB_APP_URL;
const SCOPES = "activity:read_all,profile:read_all";

export function generateStravaAuthUrl(clientId: string): string {
  const redirectUri = encodeURIComponent(`${WEB_APP_URL}/callback`);
  return `${STRAVA_URL}/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${SCOPES}`;
}
