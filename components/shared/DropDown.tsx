"use client";

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
import UniversalChart from "./responseUI/UniversalChart";
import { useEffect, useState } from "react";

const CreateHeader = ({ headerData, setDataKey }: any) => {
  const headers = Object?.keys(headerData[0]);

  useEffect(() => {
    setDataKey(Object?.keys(headerData[0]).at(0));
  }, []);

  const handleHeaderClick = (header: any) => {
    setDataKey(header);
  };

  return (
    <div>
      <Dialog>
        <DropdownMenu>
          <DropdownMenuTrigger className="primary-gradient flex flex-row gap-2 rounded p-2 px-4 outline-none">
            <span className="text-light-900 ">Filter</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="background-light900_dark200">
            {headers.map((header) => (
              <DropdownMenuItem key={header}>
                <DialogTrigger
                  className="flex-center flex gap-2"
                  onClick={() => handleHeaderClick(header)}
                >
                  <span className="text-dark100_light900">{header}</span>
                </DialogTrigger>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </Dialog>
    </div>
  );
};

const Dropdown = ({ data }: any) => {
  const [chartType, setChartType] = useState("");
  const [dataKey, setDataKey] = useState("");

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
          <span className="text-light-900 ">Graph</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="background-light900_dark200">
          {graphTypes.map((graphType) => (
            <DropdownMenuItem key={graphType.label}>
              <DialogTrigger
                className="flex-center flex gap-2"
                onClick={() => setChartType(graphType.label)}
              >
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
          <CreateHeader headerData={data} setDataKey={setDataKey} />
          <DialogTitle>{chartType}</DialogTitle>
          <DialogDescription>
            <UniversalChart
              data={data}
              dataKey={dataKey}
              chartType={chartType}
            />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Dropdown;
