import React from 'react';
import Image from "next/image";
import Link from "next/link";

const handleAddAccount = () => {
  return "null";
}

function AddAccount(props) {
  return (
    <article className="background-light900_dark200 light-border flex w-full flex-col items-center justify-center rounded-2xl w-max h-full border p-8 cursor-pointer">
      <Image src="/assets/icons/plus-icon.svg" alt="plus-icon" width="48" height="48"/>
      Pridaj účet
    </article>
  );
}



export default AddAccount;