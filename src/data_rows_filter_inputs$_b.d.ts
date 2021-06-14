import { Writable } from '@ctx-core/store';
import type { table_Ctx } from './table_Ctx';
export declare function data_rows_filter_inputs$_b<Val extends unknown = unknown>(ctx: table_Ctx<Val>): data_rows_filter_inputs$_T<Val>;
export interface $data_row_filter_input<I> {
    column: number;
    value: I;
}
export declare type data_rows_filter_inputs_T<Val extends unknown = unknown> = $data_row_filter_input<Val>[];
export interface data_rows_filter_inputs$_T<Val extends unknown = unknown> extends Writable<data_rows_filter_inputs_T<Val> | undefined> {
}
export { data_rows_filter_inputs$_b as b__inputs__filter__rows__data };
