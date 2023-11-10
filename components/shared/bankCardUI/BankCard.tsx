import React from 'react';
import Image from "next/image";
import Link from "next/link";

function BankCard({accountData}) {
  return (
    <article className="background-light900_dark200 light-border flex flex-col w-full items-center justify-center rounded-2xl border px-5 py-3">
      <Image
        src="/assets/images/empty.png"
        alt="user profile picture"
        width={100}
        height={100}
        className="rounded-full"
      />

      <Link href={`/profile/`} className="mt-4 w-fit text-center">
        <h3 className="h3-bold">{accountData?.bank}</h3>
        <p className=" mt-2">{accountData?.owner}</p>
      </Link>
    </article>
  );
}

export default BankCard;