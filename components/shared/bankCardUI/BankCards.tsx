import React from 'react';
import Image from "next/image";
import Link from "next/link";
import BankCard from "@/components/shared/bankCardUI/BankCard";
import AddAccount from "@/components/shared/bankCardUI/AddAccount";
import NoResult from "@/components/shared/NoResult";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
// import CardGroups from "@/components/forms/Groups";

function BankCards({data}) {

  return (
    <div className="shadow-light100_darknone w-full max-xs:min-w-full max-w-3xl gap-10 flex flex-row">
      {data.map((accountData:any, index:any) => (
            <BankCard accountData={accountData} key={index}/>
      ))}


      <Dialog>
        <DialogTrigger><AddAccount/></DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Vytvorte skupinu</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )



}

export default BankCards;