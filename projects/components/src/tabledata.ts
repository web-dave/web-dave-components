export interface ITableResponse {
  settings: ITableSettings;
  data: ITabledata[];
}
export interface ITabledata {
  icon: string;
  label: string;
  data: string;
}
export interface ITableColumn {
  column: string;
  type: string;
}
export interface ITableSettings {
  order: ITableColumn[];
  title: string;
}
