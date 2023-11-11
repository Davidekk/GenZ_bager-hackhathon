"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { CreateGroups } from "@/lib/validation";
import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Badge } from "../ui/badge";
import { createGroup } from "@/lib/action/groups.action";

const Question = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<z.infer<typeof CreateGroups>>({
    resolver: zodResolver(CreateGroups),
    defaultValues: {
      title: "",
      tags: [],
    },
  });

  const handleInputKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    field: any
  ) => {
    if (e.key === "Enter" && field.name === "tags") {
      e.preventDefault();
      const tagInput = e.target as HTMLInputElement;
      const tagValue = tagInput.value.trim();
      if (tagValue !== "") {
        if (tagValue.length > 15) {
          return form.setError("tags", {
            type: "required",
            message: "Tag must be less than 15 characters. ",
          });
        }
        if (!field.value.includes(tagValue as never)) {
          form.setValue("tags", [...field.value, tagValue]);
          tagInput.value = "";
          form.clearErrors("tags");
        } else {
          form.trigger();
        }
      }
    }
  };

  const handleTagRemove = (tag: string, field: any) => {
    const newTags = field.value.filter((val: string) => val !== tag);
    form.setValue("tags", newTags);
  };

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof CreateGroups>) {
    setIsSubmitting(true);

    try {
      await createGroup({
        title: values.title,
        groupIds: values.tags,
        ownerId: "1",
        path: pathname,
      });
    } catch (error) {
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" flex w-full flex-col gap-10 "
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="mt-10 flex w-full  flex-col">
              <FormLabel className="text-dark400_light800 paragraph-semibold ">
                Názov skupiny <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl className="mt-4">
                <Input
                  className="no-focus paragraph-regular  background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border"
                  {...field}
                />
              </FormControl>
              <FormDescription className="body-regular mt-2.5 text-light-500">
                Zvoľte jednoduchý názov.
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="text-dark400_light800 paragraph-semibold ">
                Pridajte členov tejto skupiny{" "}
              </FormLabel>
              <FormControl className="mt-4">
                <>
                  <Input
                    placeholder="Add tags..."
                    className="no-focus paragraph-regular background-light900_dark300 light-border-2 text-dark300_light700 min-h-[56px] border"
                    onKeyDown={(e) => handleInputKeyDown(e, field)}
                  />
                  {field.value.length > 0 && (
                    <div className="flex-start mt-2 gap-2.5">
                      {field.value.map((val) => (
                        <Badge
                          key={val}
                          className="suble-medium background-light800_dark300 text-light400_dark500 flex items-center justify-center gap-2 rounded-md px-4 py-2"
                          onClick={() => {
                            handleTagRemove(val, field);
                          }}
                        >
                          {val} X
                        </Badge>
                      ))}
                    </div>
                  )}
                </>
              </FormControl>
              <FormDescription className="body-regular mt-2.5 text-light-500">
                Zadajte email používateľa, ktorého chcete pridať do skupiny.
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="primary-gradient  mx-auto w-fit !text-light-900"
          disabled={isSubmitting}
        >
          {isSubmitting ? <>Posting...</> : <>Vytvor skupinu</>}
        </Button>
      </form>
    </Form>
  );
};

export default Question;
