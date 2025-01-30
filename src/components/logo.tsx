import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo = ({ className, size = 20 }: LogoProps) => {
  return (
    <div
      className={cn(
        "flex size-10 shrink-0 items-center justify-center rounded-full border border-border",
        className
      )}
    >
      <svg
        className="stroke-zinc-800 dark:stroke-zinc-100"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 32 32"
        aria-hidden="true"
      >
        <circle cx="16" cy="16" r="12" fill="none" strokeWidth="8" />
      </svg>
    </div>
  );
};
