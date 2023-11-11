"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { CreateBank } from "@/lib/validation";
import React, { useState } from "react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Label } from "@/components/ui/label";
import { banks } from "@/constants/constants";
import Image from "next/image";
import { createBank } from "@/lib/action/bank.action";
import { usePathname } from "next/navigation";

const Banks = ({ id }: any) => {
  const pathname = usePathname();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bank, setbank] = useState("");
  const [icon, setIcon] = useState("");
  const form = useForm<z.infer<typeof CreateBank>>({
    resolver: zodResolver(CreateBank),
    defaultValues: {
      title: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: any) {
    setIsSubmitting(true);

    try {
      await createBank({
        title: bank,
        ownerId: id,
        path: pathname,
        icon,
      });
    } catch (error) {
    } finally {
      setIsSubmitting(false);
    }
  }

  const handleChange = (e: any) => {
    setbank(e);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" flex w-full flex-col gap-2.5"
      >
        <Command>
          <Input
            value={bank}
            onChange={(e) => handleChange(e.target.value)}
            className="mb-1 mt-5"
          />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {banks.map((item: any) => (
                <div
                  key={item}
                  onClick={() => {
                    setbank(item.title);
                    setIcon(item.icon);
                  }}
                  className="flex-start flex"
                >
                  <Image src={item.icon} width={18} height={18} alt="icon" />
                  <CommandItem>{item.title}</CommandItem>
                </div>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>

        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="picture">Potvrdenie </Label>
          <Input id="picture" type="file" />
        </div>

        <Button
          type="submit"
          className="primary-gradient  mx-auto w-fit !text-light-900"
          disabled={isSubmitting}
          onClick={onSubmit}
        >
          {isSubmitting ? <>Posting...</> : <>Pridat banku</>}
        </Button>
      </form>
    </Form>
  );
};

export default Banks;
