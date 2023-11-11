import CreateTable from "@/components/shared/responseUI/ResponseTable";
import { Suspense } from "react";
import Dropdown from "@/components/shared/DropDown";
import { SearchParamsProps, URLProps } from "@/types";
import Search from "@/components/shared/Search";
import { getQuestion } from "@/lib/action/openai.action";
import NoResult from "@/components/shared/NoResult";
import Pagination from "@/components/Pagination";
import Loading from "./loading";
import { getGroupById } from "@/lib/action/groups.action";

type QuestionResult = {
  sqlResponse?: any[];
  isNext: boolean;
  error?: string;
  historyId?: string;
};

export default async function NameChangesPageWrapper({
  searchParams,
  params,
}: URLProps) {
  const key = JSON.stringify({
    searchParams,
    dialog: undefined,
  });

  const getGroupsId = await getGroupById({ id: params.id });
  if (!getGroupsId) {
    return (
      <NoResult
        title={"There is nothing to show"}
        description={"Ask a questions"}
      />
    );
  }

  return (
    <>
      <div className="flex-center flex w-full ">
        <Search route={`/groups/${params.id}`} />
      </div>
      <Suspense key={key} fallback={<Loading />}>
        <NameChangesPage
          searchParams={searchParams}
          getGroupsId={getGroupsId}
          user={params.id}
        />
      </Suspense>
    </>
  );
}

async function NameChangesPage({
  searchParams,
  getGroupsId,
}: SearchParamsProps) {
  let result: QuestionResult = { sqlResponse: [], isNext: false };
  const pagination: any[][] = [];
  if (searchParams.q) {
    result = (await getQuestion({
      question: searchParams.q,
      page: searchParams.page ? +searchParams.page : 1,
      pageSize: 2,
      groupId: getGroupsId,
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
