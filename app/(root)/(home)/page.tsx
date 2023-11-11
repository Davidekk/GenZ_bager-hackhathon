import CreateTable from "@/components/shared/responseUI/ResponseTable";
import { Suspense } from "react";
import Loading from "./loading";
import Dropdown from "@/components/shared/DropDown";
import Search from "@/components/shared/Search";
import { getQuestion } from "@/lib/action/openai.action";
import NoResult from "@/components/shared/NoResult";
import Pagination from "@/components/Pagination";

type QuestionResult = {
  sqlResponse?: any[];
  isNext: boolean;
  error?: string;
  historyId?: string;
};

export default async function NameChangesPageWrapper({
  searchParams,
  getGroupsId,
  userId,
}: any) {
  const key = JSON.stringify({
    searchParams,
    dialog: undefined,
  });

  return (
    <>
      <div className="flex-center flex w-full ">
        <Search route="/" />
      </div>
      <Suspense key={key} fallback={<Loading />}>
        <NameChangesPage searchParams={searchParams} />
      </Suspense>
    </>
  );
}

async function NameChangesPage({ searchParams }: any) {
  let result: QuestionResult = { sqlResponse: [], isNext: false };
  const pagination: any[][] = [];
  if (searchParams.q) {
    result = (await getQuestion({
      question: searchParams.q,
      page: searchParams.page ? +searchParams.page : 1,
      pageSize: 2,
    })) || { sqlResponse: [], isNext: false };
    if (result?.sqlResponse?.length) {
      if (result?.sqlResponse) {
        for (let i = 0; i < result.sqlResponse.length; i += 10) {
          pagination.push(result.sqlResponse.slice(i, i + 10));
        }
      }
    }
  }
  const page = searchParams?.page ? +searchParams.page : 1;

  return (
    <>
      <div className="flex-between my-5 flex gap-1">
        <Dropdown />
      </div>
      {result?.sqlResponse?.length === 0 ? (
        <>
          <NoResult
            title={"There is nothing to show"}
            description={"Ask a questions"}
          />
        </>
      ) : (
        <>
          <CreateTable data={pagination[page === 1 ? 0 : page - 1]} />

          <Pagination
            pageNumber={page}
            isNext={page ? page < pagination.length : false}
          />
        </>
      )}
    </>
  );
}
