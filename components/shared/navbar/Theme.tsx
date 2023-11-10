"use client";

import Image from "next/image";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { themes } from "@/constants/constants";
import { useTheme } from "@/context/ThemeProvider";

const Theme = () => {
  const { setMode, mode } = useTheme();

  return (
    <Menubar className="border-none shadow-none">
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer ">
          <Image
            src={`/assets/icons/${mode === "dark" ? "moon" : "sun"}.svg`}
            height={20}
            width={20}
            alt="theme icon"
            className="active-theme"
          />
        </MenubarTrigger>
        <MenubarContent className="my-0.5 rounded border dark:border-dark-400 dark:bg-dark-300">
          {themes?.map((theme) => (
            <MenubarItem
              key={theme.value}
              className={`${
                mode === theme.value ? "primary-gradient " : ""
              }  m-2 flex cursor-pointer items-center gap-4 rounded-md p-2.5 py-2 focus:bg-light-700 dark:focus:bg-dark-100`}
              onClick={() => {
                setMode(theme.value);
                if (theme.value !== "system") {
                  localStorage.theme = theme.value;
                } else {
                  localStorage.removeItem("theme");
                }
              }}
            >
              <Image
                src={`${theme.icon}`}
                height={20}
                width={20}
                alt="theme icon"
              />
              <p className={`body-semibold text-dark100_light900`}>
                {theme.label}
              </p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default Theme;
