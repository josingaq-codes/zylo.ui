import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/rpc";

export const useTrendingMovies = () => {
  const query = useQuery({
    queryKey: ["trending-movies"],
    queryFn: async () => {
      const response = await client.api.browse.trending.movies.$get();

      const { movies } = await response.json();

      return movies;
    },
  });

  return query;
};
