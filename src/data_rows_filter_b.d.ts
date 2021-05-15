import { rows_data_filter_inputs_ctx_I } from './rows_data_filter_inputs_b';
import { data_rows_ctx_I, data_rows_T } from './data_rows_b';
export declare function data_rows_filter_b<Val extends unknown = unknown>(ctx: data_rows_filter_ctx_I<Val>): data_rows_T<Val>;
export interface data_rows_filter_ctx_I<Val extends unknown = unknown> extends rows_data_filter_inputs_ctx_I<Val>, data_rows_ctx_I<Val> {
    data_rows_filter?: data_rows_T<Val>;
}
export { data_rows_filter_b as b__filter__rows__data };
