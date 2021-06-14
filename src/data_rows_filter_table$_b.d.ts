import { Readable$ } from '@ctx-core/store';
import type { table_Ctx } from './table_Ctx';
export declare function data_rows_filter_table$_b<Val extends unknown = unknown>(ctx: table_Ctx<Val>): data_rows_filter_table$_T<unknown>;
export declare type data_rows_filter_table_T<Val extends unknown = unknown> = Record<string, Val> | null;
export declare type data_rows_filter_table$_T<Val extends unknown = unknown> = Readable$<data_rows_filter_table_T<Val>>;
export { data_rows_filter_table$_b as b__table__filter__rows__data };
