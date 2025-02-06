"use client";

import { useTrendingMovies } from "@/modules/browse/api/use-trending-movies";
import { useTrendingShows } from "@/modules/browse/api/use-trending-shows";

import { MediaCarousel } from "@/modules/browse/components/media-carousel";
import { MediaCard } from "@/modules/browse/components/media-card";
import { ListSkeletonCard } from "@/modules/browse/components/list-skeleton-card";

export const Browse = () => {
  const { data: moviesData, isLoading: loadingMovies } = useTrendingMovies();
  const { data: showsData, isLoading: loadingShows } = useTrendingShows();

  return (
    <section className="max-w-screen-xl mx-auto px-2 sm:px-0 py-2 space-y-4">
      <div className="flex justify-center">
        <MediaCarousel />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {loadingMovies && <ListSkeletonCard quantity={20} />}

        {moviesData?.movies.map((movie) => (
          <MediaCard
            key={movie.id}
            name={movie.title}
            type={movie.media_type}
            date={new Date(movie.release_date).getFullYear().toString()}
            backdrop={movie.backdrop_path}
            poster={movie.poster_path}
          />
        ))}

        {loadingShows && <ListSkeletonCard quantity={20} />}

        {showsData?.shows.map((show) => (
          <MediaCard
            key={show.id}
            name={show.name}
            type={show.media_type}
            date={new Date(show.first_air_date).getFullYear().toString()}
            backdrop={show.backdrop_path}
            poster={show.poster_path}
          />
        ))}
      </div>
    </section>
  );
};
