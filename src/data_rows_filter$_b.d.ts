import { data_rows$_T } from './data_rows$_b';
import type { table_Ctx } from './table_Ctx';
declare const key = "data_rows_filter";
export interface data_rows_filter_Ctx<Val extends unknown = unknown> extends table_Ctx<Val> {
    [key]?: data_rows$_T<Val>;
}
export declare function data_rows_filter$_b<Val extends unknown = unknown>(ctx: table_Ctx<Val>): data_rows$_T<Val>;
export { data_rows_filter$_b as b__filter__rows__data };
