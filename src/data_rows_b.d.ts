import type { falsy } from '@ctx-core/function';
import { Readable$ } from '@ctx-core/store';
import { rows_ctx_I } from './rows_b';
import { columns_ctx_I } from './columns_b';
import { column_offsets_ctx_I } from './column_offsets_b';
export declare function data_rows_b<Val extends unknown = unknown>(ctx: data_rows_ctx_I): data_rows_T<Val>;
export interface data_rows_ctx_I<Val extends unknown = unknown> extends rows_ctx_I<Val>, columns_ctx_I<Val>, column_offsets_ctx_I<Val> {
    data_rows?: data_rows_T;
}
export declare type $data_rows_T<Val extends unknown = unknown> = Val[][];
export declare type $maybe_data_rows_T<Val extends unknown = unknown> = $data_rows_T<Val> | falsy;
export interface data_rows_T<Val extends unknown = unknown> extends Readable$<$maybe_data_rows_T<Val>> {
}
export { data_rows_b as b__rows__data };
