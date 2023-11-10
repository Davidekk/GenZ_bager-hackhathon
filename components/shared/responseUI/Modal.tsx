"use client";

import { Button } from "@/components/ui/button";
import {useEffect, useState} from "react";
import UniversalChart from "./UniversalChart";


const CreateHeader = ({ headerData, setDataKey }: any) => {
  const headers: string[] = Object?.keys(headerData[0]);

  // loading first graph on initialization so no NULL data shows up
  useEffect(() => {
    setDataKey(Object?.keys(headerData[0]).at(0))
  }, []);
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

export default function Modal({ data, closeModal, selectedButton, setSelectedButton }: any) {
  const [dataKey, setDataKey] = useState("");

  const handleEscKey = (event: KeyboardEvent) => {
    if (event.key === "Escape")
      closeModal();
  };

  const handleClickOutside = (event: MouseEvent) => {
    const modalContent = document.querySelector("#graph-modal");
    if (modalContent && !modalContent.contains(event.target as Node)) {
      closeModal();
    }
  };

  useEffect(() => {
    if(selectedButton !== 0) {
      document.addEventListener("keydown", handleEscKey);
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
      document.removeEventListener("click", handleClickOutside);

    }
  }, [selectedButton, closeModal]);



  const renderContent = () => {

    switch (selectedButton) {
      case 1:
        return (
          <>
            <UniversalChart
              data={data}
              dataKey={dataKey}
              chartType={"ColumnChart"}
            />
          </>
        );

      case 2:
        return (
          <>
            <UniversalChart
              data={data}
              dataKey={dataKey}
              chartType={"LineChart"}
            />
          </>
        );

      case 3:
        return (
          <>
            <UniversalChart
              data={data}
              dataKey={dataKey}
              chartType={"BarChart"}
            />
          </>
        );
      case 4:
        return (
          <>
            <UniversalChart
              data={data}
              dataKey={dataKey}
              chartType={"PieChart"}
            />
          </>
        );
    }
  };

  return (
    <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
      <div id="graph-modal" className="background-light900_dark200 flex h-3/4 w-1/2 flex-col items-center justify-center gap-5 rounded-lg shadow-md">
        <CreateHeader headerData={...data} setDataKey={setDataKey} />
        <h1 className="dark:text-white">Tu by mohol byt nazov promptu alebo tak</h1>
        {renderContent()}
        <Button
          className="primary-gradient rounded-3xl text-white"
          onClick={closeModal}
        >
          Close
        </Button>
      </div>
    </div>
  );
}
