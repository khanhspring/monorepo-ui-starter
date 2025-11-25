export type Response<T> = {
  page: number,
  per_page: number,
  total: number,
  total_pages: number,
  data: T
};

export type Page<T> = {
  page: number,
  per_page: number,
  total: number,
  total_pages: number,
  data: T[]
};
