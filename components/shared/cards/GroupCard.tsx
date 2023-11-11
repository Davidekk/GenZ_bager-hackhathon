import Link from "next/link";
import Image from "next/image";

interface Props {
  title: string;
  owner: string;
  tags: [];
  id: string;
}

const CardGroups = ({ title, owner, tags, id }: Props) => {
  return (
    <div className="shadow-light100_darknone w-full max-xs:min-w-full xs:w-[260px]">
      <article className="background-light900_dark200 light-border flex w-full flex-col items-center justify-center rounded-2xl border p-8">
        <Image
          src="/assets/images/empty.png"
          alt="user profile picture"
          width={100}
          height={100}
          className="rounded-full"
        />

        <Link href={`/groups/${id}`} className="mt-4 text-center">
          <h3 className="h3-bold  line-clamp-1">{title}</h3>
          <p className=" mt-2">@{owner}</p>
        </Link>
      </article>
    </div>
  );
};

export default CardGroups;
