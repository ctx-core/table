import type { maybe_null } from '@ctx-core/function';
import { Writable } from '@ctx-core/store';
import type { row_type } from './row_type';
export declare function rows_data_filter_inputs_b<I extends row_type, C extends object = object>(ctx: C): rows_data_filter_inputs_type<I>;
export interface $data_row_filter_input<I> {
    column: number;
    value: I;
}
export declare type $rows_data_filter_inputs_type<I extends unknown> = $data_row_filter_input<I>[];
export declare type $rows_data_filter_inputs_maybe_type<I extends unknown> = maybe_null<$rows_data_filter_inputs_type<I>>;
export interface rows_data_filter_inputs_type<I extends unknown> extends Writable<$rows_data_filter_inputs_maybe_type<I>> {
}
export { rows_data_filter_inputs_b as b__inputs__filter__rows__data };
