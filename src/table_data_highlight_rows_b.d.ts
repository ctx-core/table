import { Writable$ } from '@ctx-core/store';
import type { table_Ctx } from './table_Ctx';
export declare function table_data_highlight_rows_b<Val extends unknown = unknown>(ctx: table_Ctx<Val>): table_data_highlight_rows_maybe_T<Val>;
export interface $table_data_highlight_rows_T<Val extends unknown = unknown> extends Record<string, Val[]> {
}
export declare type $table_data_highlight_rows_maybe_T<Val extends unknown = unknown> = $table_data_highlight_rows_T<Val> | undefined;
export interface table_data_highlight_rows_maybe_T<Val extends unknown = unknown> extends Writable$<$table_data_highlight_rows_maybe_T<Val>> {
}
export { table_data_highlight_rows_b as b__table__highlight__rows__data };
