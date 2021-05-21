import { rows_data_filter_inputs_Ctx } from './rows_data_filter_inputs_b';
import { data_rows_Ctx, data_rows_T } from './data_rows_b';
declare const key = "data_rows_filter";
export interface data_rows_filter_Ctx<Val extends unknown = unknown> extends rows_data_filter_inputs_Ctx<Val>, data_rows_Ctx<Val> {
    [key]?: data_rows_T<Val>;
}
export declare function data_rows_filter_b<Val extends unknown = unknown>(ctx: data_rows_filter_Ctx<Val>): data_rows_T<Val>;
export { data_rows_filter_b as b__filter__rows__data };
