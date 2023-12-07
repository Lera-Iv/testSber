export type TCurrency = {
  id: string;
  name: string;
  min_size: number;
};

export interface ICurrencyData {
  data: TCurrency[];
}