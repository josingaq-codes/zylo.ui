"use client";

import { useNowMovies } from "@/modules/browse/api/use-now-movies";

import { MediaCard } from "@/modules/browse/components/media-card";
import { ListSkeletonCard } from "@/modules/browse/components/list-skeleton-card";

export const Movies = () => {
  const { data, isLoading: loadingMovies } = useNowMovies();

  return (
    <section className="max-w-screen-xl mx-auto px-2 sm:px-6 py-2">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {loadingMovies && <ListSkeletonCard quantity={20} />}

        {data?.movies.map((movie) => (
          <MediaCard
            key={movie.id}
            name={movie.title}
            type="movie"
            date={new Date(movie.release_date).getFullYear().toString()}
            backdrop={movie.backdrop_path}
            poster={movie.poster_path}
          />
        ))}
      </div>
    </section>
  );
};
