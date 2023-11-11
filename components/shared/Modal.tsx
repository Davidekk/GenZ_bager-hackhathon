"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import UniversalChart from "./responseUI/ResponseTable";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const CreateHeader = ({ headerData, setDataKey }: any) => {
  const headers = Object?.keys(headerData[0]);

  const handleHeaderClick = (header: any) => {
    setDataKey(header);
  };

  return (
    <div>
      {headers.map((header) => (
        <Button
          key={header}
          className="primary-gradient mx-3 rounded-3xl text-white"
          onClick={() => handleHeaderClick(header)}
        >
          {header}
        </Button>
      ))}
    </div>
  );
};

const Modal = ({ data }: any) => {
  const [chartType, setChartType] = useState("");
  const [dataKey, setDataKey] = useState("");

  const showOptions = (chartType: string) => {
    setChartType(chartType);
  };

  return (
    <Dialog>
      <DialogTrigger className="primary-gradient flex flex-row gap-2 rounded p-2 px-4">
        <Image
          src="/assets/icons/pie.svg"
          height={24}
          width={24}
          alt="graph icon"
          className="invert"
        />
        <span
          className="text-light-900"
          onClick={() => showOptions("ColumnChart")}
        >
          Graph 1
        </span>
      </DialogTrigger>
      <DialogTrigger className="primary-gradient flex flex-row gap-2 rounded p-2 px-4">
        <Image
          src="/assets/icons/pie.svg"
          height={24}
          width={24}
          alt="graph icon"
          className="invert"
        />
        <span
          className="text-light-900"
          onClick={() => showOptions("LineChart")}
        >
          Graph 2
        </span>
      </DialogTrigger>
      <DialogTrigger className="primary-gradient flex flex-row gap-2 rounded p-2 px-4">
        <Image
          src="/assets/icons/pie.svg"
          height={24}
          width={24}
          alt="graph icon"
          className="invert"
        />
        <span
          className="text-light-900"
          onClick={() => showOptions("BarChart")}
        >
          Graph 3
        </span>
      </DialogTrigger>
      <DialogTrigger className="primary-gradient flex flex-row gap-2 rounded p-2 px-4">
        <Image
          src="/assets/icons/pie.svg"
          height={24}
          width={24}
          alt="graph icon"
          className="invert"
        />
        <span
          className="text-light-900"
          onClick={() => showOptions("PieChart")}
        >
          Graph 4
        </span>
      </DialogTrigger>
      <DialogContent className="background-light850_dark100">
        <DialogHeader>
          <DialogTitle>{chartType}</DialogTitle>
          <CreateHeader headerData={data} setDataKey={setDataKey} />
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

export default Modal;
