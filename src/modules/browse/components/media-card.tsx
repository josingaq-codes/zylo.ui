import { Card, CardContent } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { PlayIcon } from "lucide-react";

interface CardProps {
  className?: string;
  name?: string;
  type?: string;
  date?: string;
  backdrop?: string;
  poster?: string;
}

export const MediaCard = ({ className, name, backdrop, poster }: CardProps) => {
  const NEXT_PUBLIC_TMDB_IMG_URL = process.env.NEXT_PUBLIC_TMDB_IMG_URL;

  return (
    <Card
      className={className}
      style={{
        backgroundImage: `url(${NEXT_PUBLIC_TMDB_IMG_URL}/t/p/original${backdrop})`,
        backgroundSize: "cover",
      }}
    >
      <CardContent className="relative flex items-center justify-center cursor-pointer group px-2 py-2 md:min-h-[350px]">
        <img
          src={`${NEXT_PUBLIC_TMDB_IMG_URL}/t/p/original${poster}`}
          alt={name}
          className="object-cover rounded-xl"
        />
        <Button
          variant="secondary"
          size="icon"
          className="absolute rounded-full p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <PlayIcon size={24} />
        </Button>
        <Badge
          variant="secondary"
          className="absolute bottom-4 w-[90%] flex justify-center rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <p className="text-xs text-center font-bold">{name}</p>
        </Badge>
      </CardContent>
    </Card>
  );
};
