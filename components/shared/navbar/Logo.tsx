"use client";

import { useTheme } from "@/context/ThemeProvider";
import Image from "next/image";

const Logo = () => {
  const { mode } = useTheme();
  return (
    <Image
      src={`/assets/logo/logo${mode === "dark" ? "Dark" : ""}.png`}
      alt="genZ_bager"
      width={64}
      height={64}
    />
  );
};

export default Logo;
