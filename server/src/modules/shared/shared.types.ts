/**
 * Recursively converts all Date types to strings in a type.
 * Use this for DTOs to reflect JSON serialization behavior.
 */
export type Serialized<T> = T extends Date
  ? string
  : T extends Array<infer U>
    ? Serialized<U>[]
    : T extends object
      ? { [K in keyof T]: Serialized<T[K]> }
      : T;

export interface Page {
  num: number;
  size: number;
  shard?: number;
}

export interface Filters {
  name?: string;
}

export interface PaginatedData<T> {
  data: T[];
  nextPage?: Page;
}
