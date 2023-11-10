"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";

interface CustomInputProps {
  route?: string;
  imgSrc: string;
  iconPosition: string;
  placeholder: string;
  otherClasses?: string;
  handleChange: (value: string) => void;
}

const LocalSearchbar = ({
  route,
  iconPosition,
  imgSrc,
  placeholder,
  otherClasses,
  handleChange,
}: CustomInputProps) => {
  return (
    <div
      className={`background-light800_darkgradient flex min-h-[56px] grow items-center rounded-[10px] px-4 ${otherClasses}`}
    >
      {iconPosition === "left" && (
        <Image
          src={imgSrc}
          alt="search icon"
          width={24}
          height={24}
          className="mr-4"
        />
      )}
      <Input
        type="text"
        placeholder={placeholder}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        className="paragraph-regular no-focus placeholder background-light800_darkgradient background-light800_dark300 text-dark100_light900 border-none shadow-none outline-none"
      />
      {iconPosition === "right" && (
        <Image
          src={imgSrc}
          alt="search icon"
          width={24}
          height={24}
          className="mr-4 dark:invert"
        />
      )}
    </div>
  );
};

export default LocalSearchbar;
