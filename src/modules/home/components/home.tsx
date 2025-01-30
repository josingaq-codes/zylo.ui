"use client";

import { Header } from "@/layouts/header";

import { useTrendingMovies } from "@/modules/home/api/use-trending-movies";
import { useTrendingShows } from "@/modules/home/api/use-trending-shows";

import { MediaCard } from "@/modules/home/components/media-card";
import { ListSkeletonCard } from "@/modules/home/components/list-skeleton-card";

export const Home = () => {
  const { data: movies, isLoading: loadingMovies } = useTrendingMovies();
  const { data: shows, isLoading: loadingShows } = useTrendingShows();

  return (
    <main>
      <Header />
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 py-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {loadingMovies && <ListSkeletonCard quantity={20} />}

          {movies?.map((movie) => (
            <MediaCard
              key={movie.id}
              name={movie.title}
              type={movie.media_type}
              date={new Date(movie.release_date).getFullYear().toString()}
              img={movie.poster_path}
            />
          ))}

          {loadingShows && <ListSkeletonCard quantity={20} />}

          {shows?.map((show) => (
            <MediaCard
              key={show.id}
              name={show.name}
              type={show.media_type}
              date={new Date(show.first_air_date).getFullYear().toString()}
              img={show.poster_path}
            />
          ))}
        </div>
      </section>
    </main>
  );
};
