import { Writable$ } from '@ctx-core/store';
import type { table_Ctx } from './table_Ctx';
export declare function data_highlight_rows$_b<Val extends unknown = unknown>(ctx: table_Ctx<Val>): data_highlight_rows$_T<Val>;
export declare type data_highlight_rows_T<Val extends unknown = unknown> = Val[][];
export interface data_highlight_rows$_T<Val extends unknown = unknown> extends Writable$<data_highlight_rows_T<Val> | undefined> {
}
export { data_highlight_rows$_b as b__highlight__rows__data };
