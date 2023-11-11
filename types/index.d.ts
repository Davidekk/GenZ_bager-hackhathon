export interface SearchParamsProps {
  searchParams: { [key: string]: string | undefined };
  getGroupsId: any;
}

export interface URLProps {
  params: { id: string };
  searchParams: { [key: string]: string | undefined };
}
