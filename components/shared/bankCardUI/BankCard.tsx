import React from "react";
import Image from "next/image";
import Link from "next/link";

function BankCard({ icon, title }: any) {
  console.log(icon);
  return (
    <article className="background-light900_dark200 light-border flex w-full flex-col items-center justify-center rounded-2xl border px-5 py-3">
      <Image
        src={icon}
        alt="user profile picture"
        width={100}
        height={100}
        className="rounded-full"
      />

      <Link href={`/profile/`} className="mt-4 w-fit text-center">
        <h3 className="h3-bold">{title}</h3>
      </Link>
    </article>
  );
}

export default BankCard;
