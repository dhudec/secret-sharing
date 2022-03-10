import type { IncomingMessage } from 'http';
import type { PaginatedList } from '@/globals';

interface IdPayload {
  id: string;
}

type GetAll<T, Q> = (
  query?: Q,
  req?: IncomingMessage
) => Promise<{ data: PaginatedList<T>; status: number }>;

type GetById<T> = (
  id: string,
  req?: IncomingMessage
) => Promise<{ data: T; status: number }>;

type UpdateById<T, U> = (
  update: U,
  req?: IncomingMessage
) => Promise<{ data: T; status: number }>;

type DeleteById = (
  id: string,
  req?: IncomingMessage
) => Promise<{ status: number }>;

type Create<T, R> = (
  resource: R,
  req?: IncomingMessage
) => Promise<{ data: T; status: number }>;

interface CRUD<T, Q, U, C> {
  getAll: GetAll<T, Q>;
  getById: GetById<T>;
  updateById: UpdateById<T, U>;
  deleteById: DeleteById;
  create: Create<T, C>;
}

export type {
  IdPayload,
  GetAll,
  GetById,
  UpdateById,
  DeleteById,
  Create,
  CRUD,
};
