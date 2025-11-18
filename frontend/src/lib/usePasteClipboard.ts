import { useCallback } from "react";

export function usePasteClipboard() {
  const handlePaste = useCallback(
    async (
      target: React.RefObject<HTMLInputElement> | ((text: string) => void)
    ) => {
      try {
        const text = await navigator.clipboard.readText();
        if (typeof target === "function") {
          target(text); // controlled input
        } else if (target && "current" in target && target.current) {
          target.current.value = text; // uncontrolled input
        }
      } catch {
        alert("Impossible d'accéder au presse-papiers.");
      }
    },
    []
  );

  return handlePaste;
}
