import { Mechanism } from "@/types/mechanism";
import { useSearchParams } from "next/navigation";
import { useInfiniteQuery } from "react-query";

type Response = {
  offset?: string;
  mechanisms: Mechanism[];
};

export default function useMechanismQuery() {
  const urlSearchParams = useSearchParams()!;

  return useInfiniteQuery<Response, Error>(
    ["mechanisms", urlSearchParams.toString()],
    async ({ pageParam: offset }) => {
      const params = new URLSearchParams(urlSearchParams.toString());

      if (offset) {
        params.set("offset", offset);
      }

      const request = await fetch(`api?${params.toString()}`);

      if (!request.ok) {
        throw new Error("Error searching mechanisms");
      }

      return (await request.json()) as Response;
    },
    {
      getNextPageParam: (lastPage) => lastPage.offset ?? undefined,
    },
  );
}
