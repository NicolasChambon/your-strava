import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DialogStackDescription,
  DialogStackFooter,
  DialogStackHeader,
  DialogStackPrevious,
  DialogStackTitle,
} from "@/components/ui/shadcn-io/dialog-stack";
import { generateStravaAuthUrl } from "@/lib/stravaAuth";
import { usePasteClipboard } from "@/lib/usePasteClipboard";
import { ClientField } from "./ClientField";

export function ClientIdentifierStep() {
  const [clientIdInput, setClientIdInput] = useState("");
  const [clientSecretInput, setClientSecretInput] = useState("");

  const isClientIdInputValid = /^\d{5,}$/.test(clientIdInput);
  const isClientSecretInputValid = /^[a-zA-Z0-9]{40}$/.test(clientSecretInput);

  console.log({ isClientIdInputValid, isClientSecretInputValid });

  const handlePaste = usePasteClipboard();

  const handleConnect = (clientId: string) => {
    const OAuthUrl = generateStravaAuthUrl(clientId);
    window.location.href = OAuthUrl;
  };

  return (
    <>
      <DialogStackHeader className="mb-4">
        <DialogStackTitle>Identifiant Client</DialogStackTitle>
      </DialogStackHeader>

      <DialogStackDescription className="mb-8">
        Une fois votre Application API créée, vous obtiendrez un &quot;ID du
        Client&quot; (Client ID) et un &quot;Secret du Client&quot; (Client
        Secret). Copiez-collez ces deux informations dans les champs ci-dessous
        pour connecter votre compte Strava.
      </DialogStackDescription>

      <DialogStackDescription className="mb-4">
        <ClientField
          className="mb-8"
          id="clientId"
          isValid={isClientIdInputValid}
          label="ID du client (Client ID)"
          placeholder="e.g. 12345"
          value={clientIdInput}
          onChange={(e) => setClientIdInput(e.target.value)}
          onPaste={() => handlePaste(setClientIdInput)}
        />
        <ClientField
          id="clientSecret"
          isValid={isClientSecretInputValid}
          label="Secret du Client (Client Secret)"
          placeholder="e.g. abcd1234efgh5678ijkl9012mnop3456qrst7890"
          value={clientSecretInput}
          onChange={(e) => setClientSecretInput(e.target.value)}
          onPaste={() => handlePaste(setClientSecretInput)}
        />
      </DialogStackDescription>

      <DialogStackFooter className="flex justify-between mt-8">
        <DialogStackPrevious>
          <Button variant="outline">
            <ArrowLeft />
            Retour
          </Button>
        </DialogStackPrevious>

        <Button
          disabled={
            isClientIdInputValid && isClientSecretInputValid ? false : true
          }
          onClick={() => handleConnect(clientIdInput)}
        >
          Connecter mon compte Strava
          <ArrowRight />
        </Button>
      </DialogStackFooter>
    </>
  );
}
