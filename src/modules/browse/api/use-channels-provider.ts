import { useMutation } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";

import { client } from "@/lib/rpc";

type ResponseType = InferResponseType<
  (typeof client.api.browse.channels.provider)["$post"]
>;
type RequestType = InferRequestType<
  (typeof client.api.browse.channels.provider)["$post"]
>;

export const useChannelsProvider = () => {
  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async ({ json }) => {
      const response = await client.api.browse.channels.provider["$post"]({
        json: json,
      });

      return await response.json();
    },
  });

  return mutation;
};
