import { Button } from "@/components/ui/button";
import {
  DialogStack,
  DialogStackBody,
  DialogStackContent,
  DialogStackDescription,
  DialogStackFooter,
  DialogStackHeader,
  DialogStackNext,
  DialogStackOverlay,
  DialogStackTitle,
  DialogStackTrigger,
} from "@/components/ui/shadcn-io/dialog-stack";
import { TypographyH2 } from "@/components/ui/typographyH2";

export default function Home() {
  return (
    <div>
      <TypographyH2>
        En quelques clics, connectez votre compte Strava et retrouvez toutes vos
        photos.
      </TypographyH2>

      <DialogStack clickable>
        <DialogStackTrigger asChild>
          <Button>J'ai déjà un compte Strava</Button>
        </DialogStackTrigger>
        <DialogStackOverlay />

        <DialogStackBody>
          <DialogStackContent>
            <DialogStackHeader>
              <DialogStackTitle>Application API</DialogStackTitle>
              <DialogStackDescription className="mb-4">
                Pour autoriser l&apos;accès à vos photos, Strava demande de
                créer une petite 'Application API'. Cela prend 1 minute et
                c&apos;est gratuit.
              </DialogStackDescription>
              <DialogStackDescription className="mb-4">
                Si vous n&apos;avez pas encore créé d&apos;Application API,
                cliquez sur le bouton ci-dessous pour être redirigé vers la page
                de création d&apos;application Strava (sinon cliquez sur le
                bouton en bas
                <Button variant="link" className="p-0 m-0">
                  J'ai déjà créé une Application API
                </Button>
                ).
              </DialogStackDescription>
              <DialogStackDescription className="mb-4">
                Vous pourrez ensuite remplir les champs comme suit :
                <ul className="list-disc pl-6 mt-2">
                  <li>Nom de l&apos;application : My Pictures</li>
                  <li>Catégorie : Outil d'importation de données</li>
                  <li>Club : [None]</li>
                  {/* TODO: update URL */}
                  <li>Site web : https://your-strava.vercel.app/</li>
                  <li>
                    Description de l'application : Application pour visualiser
                    mes photos Strava.
                  </li>
                  {/* TODO: update URL */}
                  <li>
                    Domaine du rappel pour l'autorisation :
                    your-strava.vercel.app/
                  </li>
                </ul>
              </DialogStackDescription>
              <a
                href="https://www.strava.com/settings/api"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>Créer mon Application API</Button>
              </a>
            </DialogStackHeader>
            <DialogStackFooter>
              <DialogStackNext>
                <Button variant="outline">
                  J&apos;ai déjà créé une Application API
                </Button>
              </DialogStackNext>
            </DialogStackFooter>
          </DialogStackContent>
        </DialogStackBody>
      </DialogStack>

      <a
        href="https://www.strava.com/register"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="outline">Je crée un compte Strava</Button>
      </a>
    </div>
  );
}
