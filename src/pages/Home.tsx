import { HomeDialogStack } from "@/components/Home/HomeDialogStack";
import { Button } from "@/components/ui/button";
import { TypographyH2 } from "@/components/ui/typographyH2";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-7">
      <TypographyH2>
        En quelques clics, connectez votre compte Strava et retrouvez toutes vos
        photos.
      </TypographyH2>

      <div className="flex gap-4">
        <HomeDialogStack />

        <a
          href="https://www.strava.com/register"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Button variant="outline">Je crée un compte Strava</Button>
        </a>
      </div>
    </div>
  );
}
