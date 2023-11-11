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
import Banks from "@/components/forms/Banks";
import { getBankById } from "@/lib/action/bank.action";
import { getUser } from "@/lib/action/user.action";

async function BankCards() {
  const { id }: any = await getUser();
  const result = await getBankById({ id });
  return (
    <div className="shadow-light100_darknone flex w-full max-w-3xl flex-row gap-10 max-xs:min-w-full">
      {result.map((accountData: any, index: any) => (
        <BankCard
          icon={accountData.icon}
          title={accountData.title}
          key={index}
        />
      ))}

      <Dialog>
        <DialogTrigger>
          <AddAccount />
        </DialogTrigger>
        <DialogContent className="background-light900_dark200">
          <DialogHeader>
            <DialogTitle>Vytvorte skupinu</DialogTitle>
            <Banks id={id} />
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default BankCards;
