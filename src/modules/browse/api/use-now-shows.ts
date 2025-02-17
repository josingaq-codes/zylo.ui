import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/rpc";

export const useNowShows = () => {
  const query = useQuery({
    queryKey: ["now-shows"],
    queryFn: async () => {
      const response = await client.api.browse.now.shows.$get();

      return await response.json();
    },
  });

  return query;
};
