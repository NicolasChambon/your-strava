import { CheckCircle2 } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel, FieldDescription } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

interface ClientFieldProps {
  className?: string;
  id: string;
  isValid: boolean;
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPaste: () => void;
}

export function ClientField({
  className,
  id,
  isValid,
  label,
  placeholder,
  value,
  onChange,
  onPaste,
}: ClientFieldProps) {
  return (
    <Field className={className}>
      <div className="flex gap-2 items-center">
        <FieldLabel htmlFor={id}>{label}</FieldLabel>
        {isValid && <CheckCircle2 className="size-5 text-green-600" />}
      </div>
      <div className="flex gap-2 items-center">
        <Input
          id={id}
          placeholder={placeholder}
          type="text"
          value={value}
          onChange={onChange}
        />
        <Button type="button" variant="outline" onClick={onPaste}>
          Coller
        </Button>
      </div>
      <FieldDescription>
        Vous le trouverez sur la page de votre{" "}
        <a
          href="https://www.strava.com/settings/api"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Button className="p-0" variant="link">
            Application API Strava.
          </Button>
        </a>
      </FieldDescription>
    </Field>
  );
}
