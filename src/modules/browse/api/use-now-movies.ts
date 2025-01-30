import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/rpc";

export const useNowMovies = () => {
  const query = useQuery({
    queryKey: ["now-movies"],
    queryFn: async () => {
      const response = await client.api.browse.now.movies.$get();

      const { movies } = await response.json();

      return movies;
    },
  });

  return query;
};
