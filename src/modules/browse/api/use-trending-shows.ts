import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/rpc";

export const useTrendingShows = () => {
  const query = useQuery({
    queryKey: ["trending-shows"],
    queryFn: async () => {
      const response = await client.api.browse.trending.shows.$get();

      const { shows } = await response.json();

      return shows;
    },
  });

  return query;
};
