import React from "react";
import { api } from "./api";
import { useAction } from "@gadgetinc/react";

export const useCreateToken = (tokenId) => {
  const [{ data, fetching, error }, createToken] = useAction(api.test.create);

  // Generate the token immediately upon hook usage if shopId is available
  React.useEffect(() => {
    if (tokenId) {
      createToken({
        token: tokenId,
      });
    }
  }, [tokenId, createToken]);

  return { data, fetching, error };
};
