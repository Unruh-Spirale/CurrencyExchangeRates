import {Currency} from "./currency";

export interface Table{
  table: string;
  currency: string;
  code: string;
  rates: Currency[];
}
