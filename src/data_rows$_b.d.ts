import { Readable$ } from '@ctx-core/store';
import type { table_Ctx } from './table_Ctx';
export declare function data_rows$_b<Val extends unknown = unknown>(ctx: table_Ctx<Val>): data_rows$_T<Val>;
export declare type data_rows_T<Val extends unknown = unknown> = Val[][];
export interface data_rows$_T<Val extends unknown = unknown> extends Readable$<data_rows_T<Val> | undefined> {
}
export { data_rows$_b as b__rows__data };
