import { CopyrightIcon } from "lucide-react";

export const FooterHome = async () => {
  return (
    <footer className="absolute w-full bottom-2 z-10 px-2">
      <div className="max-w-screen-xl mx-auto px-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 rounded-xl">
        <div className="flex h-16 justify-between items-center gap-2">
          <div className="flex justify-between items-center gap-2">
            <CopyrightIcon />
            <span className="text-xs font-bold">
              Casi todos los derechos reservados
            </span>
          </div>
          <span className="text-xs text-center font-bold">
            Zylo UI {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
};
