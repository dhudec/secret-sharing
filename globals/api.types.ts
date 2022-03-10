interface PaginatedList<T> {
  pagination: {
    totalItems: number;
    pageNumber: number;
    pageSize: number;
    totalPages: number;
  };
  data: T[];
}

interface Response<T> {
  data: T;
  status: number;
}

interface Query {
  [key: string]: string;
}

export type { PaginatedList, Response, Query };
