import React from "react";
import Image from "next/image";

function AddAccount(props: any) {
  return (
    <article className="background-light900_dark200 light-border flex h-full w-max cursor-pointer flex-col items-center justify-center rounded-2xl border p-8">
      <Image
        src="/assets/icons/plus-icon.svg"
        alt="plus-icon"
        width="48"
        height="48"
      />
      Pridaj účet
    </article>
  );
}

export default AddAccount;
