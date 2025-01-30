import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const list = [
  {
    id: "1",
    name: "Silo",
    image: "n5FPNMJ0eRoiQrKGfUQQRAZeaxg.jpg",
  },
  {
    id: "2",
    name: "From",
    image: "6gN8DYnIEln8v7OhRy61c57w0Xy.jpg",
  },
  {
    id: "3",
    name: "Squid Game",
    image: "2meX1nMdScFOoV4370rqHWKmXhY.jpg",
  },
  {
    id: "4",
    name: "Sonic the Hedgehog 3",
    image: "zOpe0eHsq0A2NvNyBbtT6sj53qV.jpg",
  },
  {
    id: "5",
    name: "Moana 2",
    image: "vYqt6kb4lcF8wwqsMMaULkP9OEn.jpg",
  },
  {
    id: "6",
    name: "Kraven the Hunter",
    image: "v9Du2HC3hlknAvGlWhquRbeifwW.jpg",
  },
];

export const MediaCarousel = () => {
  const NEXT_PUBLIC_TMDB_IMG_URL = process.env.NEXT_PUBLIC_TMDB_IMG_URL;

  return (
    <Carousel
      className="w-full"
      opts={{ loop: true }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        {list.map((item) => (
          <CarouselItem key={item.id}>
            <Card>
              <CardContent className="p-0">
                <img
                  src={`${NEXT_PUBLIC_TMDB_IMG_URL}/t/p/w1920_and_h800_multi_faces/${item.image}`}
                  alt=""
                  className="rounded-xl"
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
