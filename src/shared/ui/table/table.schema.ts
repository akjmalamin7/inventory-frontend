export interface DataSource<T extends Record<string, unknown> = Record<string, unknown>> {
  _id: string;
  [_id: string]: T[keyof T] | string; 
}
export type ViewFunction<D> = (value: D) => React.ReactNode;

export interface Columns<D extends DataSource = DataSource> {
  _id: string;
  title: string;
  dataIndex: keyof D; 
  align?: "start" | "center" | "end";
  width?: number;
  view?: ViewFunction<D>;
}


export interface Columns<D extends DataSource = DataSource> {
  _id: string;
  title: string;
  dataIndex: keyof D;
  align?: "start" | "center" | "end";
  width?: number;
  view?: ViewFunction<D>;
}

export interface TableProps{
  size?: "sm" | "md" | "lg" | "xlg";
  width?: string;
  columns: Columns[];
  dataSource?: DataSource[];
  hover?: boolean;
  transparent?: boolean;
  loading?: boolean;
  scroll?: "scroll" | "unset";
  onRow?: (value: DataSource) => void;
}