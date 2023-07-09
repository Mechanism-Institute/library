"use client";

import useMechanismQuery from "@/hooks/use-mechanism-query";
import MechanismCard from "@/components/mechanism-card";
import Typography from "@/components/ui/typography";
import { Fragment, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";

function Skeletons() {
  return (
    <div className="w-full flex-wrap gap-4">
      {Array.from({ length: 16 }).map((_, i) => (
        <div
          key={`skeleton_${i}`}
          className="flex flex-col p-6 rounded-2xl animate-pulse max-w-[342px] h-[578px]"
        />
      ))}
    </div>
  );
}

export default function MechanismsList() {
  const { ref, inView } = useInView();
  const { data, status, hasNextPage, fetchNextPage, isFetchingNextPage } = useMechanismQuery();
  const isEmpty = status === "success" && data.pages[0].mechanisms.length === 0;

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    if (inView) {
      fetchNextPage().then();
    }
  }, [inView, fetchNextPage]);

  return (
    <>
      <div className="w-full grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {status === "loading" ? (
          <Skeletons />
        ) : status === "error" ? (
          <div>Oops, there was something wrong</div>
        ) : (
          <>
            {isEmpty && <Typography className="mx-auto">No mechanisms yet</Typography>}
            {data?.pages.map((page, index) => (
              <Fragment key={`page_${index}`}>
                {page.mechanisms.map((mechanism) => (
                  <MechanismCard key={mechanism.id} mechanism={mechanism} />
                ))}
              </Fragment>
            ))}
          </>
        )}
      </div>
      <div className="mt-10 flex w-full justify-center">
        {hasNextPage ? (
          <Button
            ref={ref}
            variant="outline"
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
          >
            {isFetchingNextPage ? "Loading..." : "View More"}
          </Button>
        ) : (
          <>
            {!isEmpty && (
              <Button
                className="flex items-center"
                ref={ref}
                variant="outline"
                onClick={scrollToTop}
              >
                Back to top
              </Button>
            )}
          </>
        )}
      </div>
    </>
  );
}
