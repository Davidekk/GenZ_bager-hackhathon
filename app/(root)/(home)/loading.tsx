import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Loading = () => {
  return (
    <>
      <div className="flex-between mx-5 flex gap-1">
        <Skeleton className="mt-10 h-[35px] w-[120px]" />
        <Skeleton className="mt-10 h-[35px] w-[120px]" />
      </div>
      <Table className="shadow-light100_darknone light-border mt-16  items-center rounded-md">
        <TableHeader>
          <TableRow className="base-bold">
            <TableCell>
              <Skeleton className=" h-[35px] w-[120px]" />
            </TableCell>
            <TableCell>
              <Skeleton className=" h-[35px] w-[220px]" />
            </TableCell>
            <TableCell className="flex-center">
              <Skeleton className="h-[35px] w-[120px]" />
            </TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 2, 3, 4, 5].map((item) => {
            return (
              <TableRow key={item}>
                <TableCell>
                  <Skeleton className=" h-[35px] w-[120px]" />
                </TableCell>
                <TableCell>
                  <Skeleton className=" h-[35px] w-[220px]" />
                </TableCell>
                <TableCell className="flex-center">
                  <Skeleton className="h-[35px] w-[120px]" />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};

export default Loading;
