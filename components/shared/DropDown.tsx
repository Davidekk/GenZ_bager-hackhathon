import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import Image from "next/image";
import { graphTypes } from "@/constants/constants";

const Dropdown = () => {
  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger className="primary-gradient flex flex-row gap-2 rounded p-2 px-4 outline-none">
          <Image
            src="/assets/icons/pie.svg"
            height={24}
            width={24}
            alt="graph icon"
            className="invert"
          />
          <span className="text-light-900 ">Graph </span>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="background-light900_dark200">
          {graphTypes.map((graphType) => (
            <DropdownMenuItem key={graphType.label}>
              <DialogTrigger className="flex-center flex gap-2">
                <Image
                  src={graphType.icon}
                  height={24}
                  width={24}
                  alt="graph icon"
                />
                <span className="text-dark100_light900">{graphType.title}</span>
              </DialogTrigger>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Dropdown;
