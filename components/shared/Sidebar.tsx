"use client";

import { usePathname } from "next/navigation";
import { sidebarLinks } from "@/constants/constants";
import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <section className="background-light900_dark200  light-border border-r max-sm:hidden lg:w-[266px]">
      <div className="flex w-full flex-col pt-36">
        {sidebarLinks.map((link) => {
          const { imgURL, route, label } = link;

          return (
            <Link
              href={route}
              key={route}
              className={`${
                pathname === route ? "primary-gradient" : ""
              } mx-6 flex flex-row gap-4 rounded-md p-4`}
            >
              <Image
                src={imgURL}
                width={20}
                height={20}
                alt={label}
                className=""
              />
              <p
                className={` ${
                  pathname === route ? "base-bold" : ""
                } text-dark100_light900 max-lg:hidden`}
              >
                {label}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Sidebar;
