"use client";

import { useNowShows } from "@/modules/browse/api/use-now-shows";

import { MediaCard } from "@/modules/browse/components/media-card";
import { ListSkeletonCard } from "@/modules/browse/components/list-skeleton-card";

export const Shows = () => {
  const { data, isLoading: loadingShows } = useNowShows();

  return (
    <section className="max-w-screen-xl mx-auto px-2 sm:px-6 py-2">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {loadingShows && <ListSkeletonCard quantity={20} />}

        {data?.shows.map((show) => (
          <MediaCard
            key={show.id}
            name={show.name}
            type="tv"
            date={new Date(show.first_air_date).getFullYear().toString()}
            backdrop={show.backdrop_path}
            poster={show.poster_path}
          />
        ))}
      </div>
    </section>
  );
};
