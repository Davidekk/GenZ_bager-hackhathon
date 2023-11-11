import { getUser, getUserName } from "@/lib/action/user.action";
import Logo from "./Logo";
import Theme from "./Theme";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const Navbar = async () => {
  const result: any = await getUser();
  let result2: any = [];
  if (result) {
    result2 = await getUserName({ id: result?.id });
  }

  console.log(result2);

  return (
    <nav className="flex-between background-light900_dark200 light-border w-full border-b py-2 pl-8 pr-4 shadow-light-300 dark:shadow-none max-lg:pl-4">
      <div className="flex items-center gap-1">
        <div className="flex-center flex flex-row pt-2">
          <Logo />
          <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-lg:hidden max-sm:hidden">
            Gen<span className="text-primary-purple">Z_bager</span>
          </p>
        </div>
      </div>
      <div className="flex-center flex">
        <DropdownMenu>
          <DropdownMenuTrigger className=" flex flex-row gap-2 rounded p-2 px-4 outline-none ">
            <span>{result2?.email}</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className="flex-center background-light800_dark300">
              <Link href="/sign-up">Odhlásiť</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Theme />
      </div>
    </nav>
  );
};

export default Navbar;
