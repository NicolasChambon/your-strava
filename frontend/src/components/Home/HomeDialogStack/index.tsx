import { Button } from "@/components/ui/button";
import {
  DialogStack,
  DialogStackBody,
  DialogStackContent,
  DialogStackOverlay,
  DialogStackTrigger,
} from "@/components/ui/shadcn-io/dialog-stack";
import { ApiAppStep } from "./ApiAppStep";
import { ClientIdentifierStep } from "./ClientIdentifierStep";

export function HomeDialogStack() {
  return (
    <DialogStack clickable>
      <DialogStackTrigger asChild>
        <Button>J'ai déjà un compte Strava</Button>
      </DialogStackTrigger>

      <DialogStackOverlay />

      <DialogStackBody>
        <DialogStackContent>
          <ApiAppStep />
        </DialogStackContent>

        <DialogStackContent>
          <ClientIdentifierStep />
        </DialogStackContent>
      </DialogStackBody>
    </DialogStack>
  );
}
