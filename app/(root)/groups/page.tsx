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

const page = async () => {
  const result = await getGroups();

  return (
    <div>
      <h1 className="h1-bold">Skupiny</h1>

      <div>
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
          <DialogTrigger>pridaj</DialogTrigger>
          <DialogContent className="background-light850_dark100">
            <DialogHeader>
              <DialogTitle>Vytvorte skupinu</DialogTitle>
              <CardGroups />
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default page;
