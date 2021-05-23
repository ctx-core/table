import { Writable$ } from '@ctx-core/store';
import type { table_Ctx } from './table_Ctx';
export declare function data_highlight_rows_b<Val extends unknown = unknown>(ctx: table_Ctx<Val>): data_highlight_rows_T<Val>;
export declare type $data_highlight_rows_T<Val extends unknown = unknown> = Val[][];
export declare type $data_highlight_rows_maybe_T<Val extends unknown = unknown> = $data_highlight_rows_T<Val> | null;
export interface data_highlight_rows_T<Val extends unknown = unknown> extends Writable$<$data_highlight_rows_maybe_T<Val>> {
}
export { data_highlight_rows_b as b__highlight__rows__data };
