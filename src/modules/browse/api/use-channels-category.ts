import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/rpc";

export const useChannelsCategory = () => {
  const query = useQuery({
    queryKey: ["now-movies"],
    queryFn: async () => {
      const response = await client.api.browse.channels.category.$get();

      return await response.json();
    },
  });

  return query;
};
