import type { falsy } from '@ctx-core/function';
import { Readable$ } from '@ctx-core/store';
import type { table_Ctx } from './table_Ctx';
export declare function data_rows_b<Val extends unknown = unknown>(ctx: table_Ctx<Val>): data_rows_T<Val>;
export declare type $data_rows_T<Val extends unknown = unknown> = Val[][];
export declare type $maybe_data_rows_T<Val extends unknown = unknown> = $data_rows_T<Val> | falsy;
export interface data_rows_T<Val extends unknown = unknown> extends Readable$<$maybe_data_rows_T<Val>> {
}
export { data_rows_b as b__rows__data };
