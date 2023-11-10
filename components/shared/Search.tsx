"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { formUrlQuery, removeKeyFromQuery } from "@/lib/utils";
import { Dialog, DialogTrigger } from "../ui/dialog";
import Keyboard from "react-simple-keyboard";
import Image from "next/image";
import "react-simple-keyboard/build/css/index.css";

interface Params {
  route: string;
}

const Search = ({ route }: Params) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const query = searchParams.get("q");

  const [searchQuery, setSearchQuery] = useState(query || "");
  const [openKeyboard, setOpenKeyboard] = useState(false);

  const showKeyboard = () => {
    setOpenKeyboard(!openKeyboard);
  };

  const handleChange = (searchQuery: any) => {
    setSearchQuery(searchQuery);
  };

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
        <Dialog>
          <DialogTrigger
            className="primary-gradient flex flex-row gap-2 rounded p-2 px-4"
            onClick={() => showKeyboard()}
          >
            <Image
              src="../../public/assets/icons/keyboard.svg"
              height={24}
              width={24}
              alt="keyboard icon"
              className="invert"
            />
          </DialogTrigger>
        </Dialog>
      </div>
      <div className="w-full px-4">
        <Button
          onClick={handleQuestion}
          className="primary-gradient w-full rounded-xl text-white"
        >
          Generate SQL from prompt!
        </Button>
      </div>
      {openKeyboard && (
        <Keyboard
          onChange={handleChange}
          onKeyPress={(button) => console.log("Button pressed", button)}
        />
      )}
    </div>
  );
};

export default Search;
