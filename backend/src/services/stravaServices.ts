import axios from "axios";
import dotenv from "dotenv";
import { BadRequestError } from "@/lib/errors";
import { SummaryActivity } from "@/types/strava";

dotenv.config({ path: ".env.development.local" });

interface StravaTokenResponse {
  access_token: string;
  refresh_token: string;
  expires_at: number;
  athlete: {
    id: number;
  };
}

export class StravaService {
  private clientId: string;
  private clientSecret: string;
  private stravaUrl: string;
  private apiUrl: string;

  constructor() {
    const clientId = process.env.STRAVA_CLIENT_ID;
    const clientSecret = process.env.STRAVA_CLIENT_SECRET;
    const stravaUrl = process.env.STRAVA_API_URL;
    const apiUrl = `${stravaUrl}/api/v3`;

    if (!clientId || !clientSecret) {
      throw new BadRequestError(
        "Missing required environment variables: STRAVA_CLIENT_ID or/and STRAVA_CLIENT_SECRET"
      );
    }

    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.stravaUrl = stravaUrl || "https://www.strava.com";
    this.apiUrl = apiUrl || "https://www.strava.com/api/v3";
  }

  async exchangeCodeForToken(code: string): Promise<StravaTokenResponse> {
    const response = await axios.post(`${this.apiUrl}/oauth/token`, {
      client_id: this.clientId,
      client_secret: this.clientSecret,
      code,
      grant_type: "authorization_code",
    });

    return response.data;
  }

  async getActivities({
    accessToken,
    page = 1,
    perPage = 200,
  }: {
    accessToken: string;
    page?: number;
    perPage?: number;
  }): Promise<SummaryActivity[]> {
    const response = await axios.get(`${this.stravaUrl}/athlete/activities`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        page,
        per_page: perPage,
      },
    });

    return response.data;
  }
}
