"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery, removeKeyFromQuery } from "@/lib/utils";

interface Params {
  route: string;
}

const Search = ({ route }: Params) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const query = searchParams.get("q");

  const [searchQuery, setSearchQuery] = useState(query || "");

  const handleQuestion = async () => {
    if (searchQuery) {
      const newURL = formUrlQuery({
        params: searchParams.toString(),
        key: "q",
        value: searchQuery,
      });
      router.refresh();
      router.push(newURL, { scroll: true });
    } else {
      if (pathname === route) {
        const newUrl = removeKeyFromQuery({
          params: searchParams.toString(),
          keys: ["q"],
        });
        router.refresh();
        router.push(newUrl, { scroll: true });
      }
    }
  };

  return (
    <div className="relative w-full max-w-[600px]">
      <div className="relative flex min-h-[56px] items-center gap-2 px-4">
        <Input
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          placeholder="Search..."
          value={searchQuery}
          className=" background-light900_dark200 text-light900_dark100 text-dark100_light900 mb-2 w-full resize-y  overflow-hidden rounded-xl border p-2 outline-fuchsia-500 dark:border-gray-700"
        />
      </div>
      <div className="w-full px-4">
        <Button
          onClick={handleQuestion}
          className="primary-gradient w-full rounded-xl text-white"
        >
          Generate SQL from prompt!
        </Button>
      </div>
    </div>
  );
};

export default Search;
