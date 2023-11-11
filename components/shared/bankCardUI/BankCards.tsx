import React from "react";
import BankCard from "@/components/shared/bankCardUI/BankCard";
import AddAccount from "@/components/shared/bankCardUI/AddAccount";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
// import CardGroups from "@/components/forms/Groups";

function BankCards({ data }: any) {
  return (
    <div className="shadow-light100_darknone flex w-full max-w-3xl flex-row gap-10 max-xs:min-w-full">
      {data.map((accountData: any, index: any) => (
        <BankCard accountData={accountData} key={index} />
      ))}

      <Dialog>
        <DialogTrigger>
          <AddAccount />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Vytvorte skupinu</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default BankCards;
