import {Rate} from "./rate";

export interface Nbp{
  table: string;
  no: string;
  tradingDate: string;
  effectiveDate: string;
  rates: Rate[];
}
