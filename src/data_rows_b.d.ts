import type { falsy } from '@ctx-core/function';
import { Readable$ } from '@ctx-core/store';
import { rows_Ctx } from './rows_b';
import { columns_Ctx } from './columns_b';
import { column_offsets_Ctx } from './column_offsets_b';
export interface data_rows_Ctx<Val extends unknown = unknown> extends rows_Ctx<Val>, columns_Ctx<Val>, column_offsets_Ctx<Val> {
    data_rows?: data_rows_T<Val>;
}
export declare function data_rows_b<Val extends unknown = unknown>(ctx: data_rows_Ctx<Val>): data_rows_T<Val>;
export declare type $data_rows_T<Val extends unknown = unknown> = Val[][];
export declare type $maybe_data_rows_T<Val extends unknown = unknown> = $data_rows_T<Val> | falsy;
export interface data_rows_T<Val extends unknown = unknown> extends Readable$<$maybe_data_rows_T<Val>> {
}
export { data_rows_b as b__rows__data };
