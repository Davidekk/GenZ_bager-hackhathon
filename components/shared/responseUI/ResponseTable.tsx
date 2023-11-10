import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";

const CreateTable = ({ data }: any) => {
  const headers = Object?.keys(data[0]);

  return (
    <div className="mx-4  min-w-full max-w-full overflow-hidden overflow-x-auto rounded-xl dark:bg-gray-800 max-sm:max-w-screen-sm lg:max-w-screen-lg ">
      {/* MAIN TABLE */}
      <Table className="shadow-light100_darknone background-light800_dark300 dark:text-gray-300 ">
        {/* TABLE HEADER */}
        <TableHeader>
          <TableRow className="bg-white dark:bg-gray-900">
            {headers.map((header) => (
              <TableHead
                className=" capitalize text-gray-500 dark:text-gray-200"
                key={header}
              >
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        {/* TABLE BODY (CONTENT) */}
        <TableBody className="">
          {data.map((item: any, index: any) => (
            // TABLE ROW
            <TableRow
              className={`even:bg-white dark:odd:bg-gray-800 dark:even:bg-gray-900`}
              key={index}
            >
              {headers.map((header) => {
                // IF THE DATA IS A DATE, FORMAT IT
                if (item[header] instanceof Date) {
                  const formattedDate = item[header].toLocaleString();
                  return (
                    <DataTableCell dataToPrint={formattedDate} key={header} />
                  );
                }

                // IF DATA IS A FUCKING ARRAY, TODO RECURSION
                if (Array.isArray(item[header]))
                  return item[header].map((itm) => (
                    <DataTableCell dataToPrint="TODO MODAL" key={header} />
                  ));
                // IF DATA IS NULL, PRINT NULL (THIS WILL BE REMOVED)
                else if (item[header] == null)
                  return <DataTableCell dataToPrint="NULL" key={header} />;
                // IF DATA IS BOOL PRINT ITS VALUE
                else if (typeof item[header] === "boolean")
                  return (
                    <DataTableCell
                      dataToPrint={item[header] ? "TRUE" : "FALSE"}
                      key={header}
                    />
                  );
                // IF DATA IS OBJECT, PRINT OBJECT (TODO RECURSION)
                else if (typeof item[header] === "object")
                  return <DataTableCell dataToPrint="OBJECT" key={header} />;

                // If it's not a Date object or an object, just render the value as is
                return (
                  <DataTableCell dataToPrint={item[header]} key={header} />
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

const DataTableCell = ({ dataToPrint }: any) => {
  return (
    <TableCell className="px-4 py-1.5 text-gray-500 dark:text-gray-200">
      {dataToPrint}
    </TableCell>
  );
};

export default CreateTable;
