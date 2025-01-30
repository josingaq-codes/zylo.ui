import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { PlayIcon } from "lucide-react";

interface CardProps {
  className?: string;
  name?: string;
  type?: string;
  date?: string;
  img?: string;
}

export const MediaCard = ({ className, name, type, date, img }: CardProps) => {
  const NEXT_PUBLIC_TMDB_IMG_URL = process.env.NEXT_PUBLIC_TMDB_IMG_URL;

  return (
    <Card
      className={className}
      style={{
        backgroundImage: `url(${NEXT_PUBLIC_TMDB_IMG_URL}/t/p/original${img})`,
      }}
    >
      <CardHeader className="px-4 pt-4 pb-0">
        <CardTitle className="text-white">{name}</CardTitle>
        <CardDescription className="text-white uppercase">
          {type} - {date}
        </CardDescription>
      </CardHeader>
      <CardContent className="relative flex items-center justify-center cursor-pointer group px-2 py-2">
        <img
          src={`${NEXT_PUBLIC_TMDB_IMG_URL}/t/p/original${img}`}
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
      </CardContent>
    </Card>
  );
};
