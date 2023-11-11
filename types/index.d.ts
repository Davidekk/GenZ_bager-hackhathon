export interface SearchParamsProps {
  searchParams: { [key: string]: string | undefined };
  getGroupsId?: any;
  userId?: any;
}

export interface URLProps {
  params: { id: string };
  searchParams: { [key: string]: string | undefined };
}
