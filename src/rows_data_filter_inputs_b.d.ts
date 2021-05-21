import type { maybe_null } from '@ctx-core/function';
import { Writable } from '@ctx-core/store';
import { table_ctx_I } from './table_b';
export interface rows_data_filter_inputs_ctx_I<Val extends unknown = unknown> extends table_ctx_I<Val> {
    rows_data_filter_inputs?: rows_data_filter_inputs_T<Val>;
}
export declare function rows_data_filter_inputs_b<Val extends unknown = unknown>(ctx: rows_data_filter_inputs_ctx_I<Val>): rows_data_filter_inputs_T<Val>;
export interface $data_row_filter_input<I> {
    column: number;
    value: I;
}
export declare type $rows_data_filter_inputs_T<Val extends unknown = unknown> = $data_row_filter_input<Val>[];
export declare type $rows_data_filter_inputs_maybe_T<Val extends unknown = unknown> = maybe_null<$rows_data_filter_inputs_T<Val>>;
export interface rows_data_filter_inputs_T<Val extends unknown = unknown> extends Writable<$rows_data_filter_inputs_maybe_T<Val>> {
}
export { rows_data_filter_inputs_b as b__inputs__filter__rows__data };
