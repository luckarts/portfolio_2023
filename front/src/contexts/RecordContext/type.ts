export interface RecordContextType<T> {
  [key: string]: T;
}
export interface RecordContextT<T> {
  [key: string]: T[] | undefined;
}
