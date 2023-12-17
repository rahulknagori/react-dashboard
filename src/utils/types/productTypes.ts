export type pageMetaDataT = {
    totalRecords: number;
    totalPages: number;
    currentPage: number;
    pageSize: number;
}

export type ProductT = {
  _id: number;
  code: string;
  store: string;
  country: string;
  region: string;
  date: string;
  item: string;
  salesPerson: string;
  listPrice: number;
  actualPrice: number;
  discount: string;
  itemsLeft: number;
};
