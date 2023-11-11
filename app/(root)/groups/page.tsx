import NoResult from "@/components/shared/NoResult";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CardGroups from "@/components/forms/Groups";
import { getGroups } from "@/lib/action/groups.action";
import GroupCard from "@/components/shared/cards/GroupCard";
import Image from "next/image";
import { getUser } from "@/lib/action/user.action";

const page = async () => {
  const { id }: any = await getUser();
  const result = await getGroups({ ownerId: id });

  return (
    <div>
      <h1 className="h1-bold">Skupiny</h1>

      <div className="shadow-light100_darknone flex-start max-h-[260px] w-full max-w-3xl flex-row gap-10 max-xs:min-w-full">
        <>
          {" "}
          {result.length === 0 ? (
            <NoResult
              title={"Nemáte vytvorenú skupinu"}
              description={"Prosím, vytvorte skupinu"}
            />
          ) : (
            <section className="mt-12 flex flex-wrap gap-4">
              {result.map((group) => (
                <GroupCard
                  key={group.id}
                  owner={group.ownerId}
                  title={group.title}
                  tags={group.tags}
                  id={group.id}
                />
              ))}
            </section>
          )}
        </>
        <Dialog>
          <DialogTrigger>
            <article className="background-light900_dark200 light-border flex h-full w-max cursor-pointer flex-col items-center justify-center rounded-2xl border p-8">
              <Image
                src="/assets/icons/plus-icon.svg"
                alt="plus-icon"
                width="48"
                height="48"
              />
              Pridaj skupinu
            </article>
          </DialogTrigger>
          <DialogContent className="background-light850_dark100">
            <DialogHeader>
              <DialogTitle>Vytvorte skupinu</DialogTitle>
              <CardGroups id={id} />
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default page;
