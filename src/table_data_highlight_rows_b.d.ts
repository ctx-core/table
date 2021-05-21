import { Writable$ } from '@ctx-core/store';
export interface table_data_highlight_rows_Ctx<Val extends unknown = unknown> {
    table_data_highlight_rows?: table_data_highlight_rows_maybe_T<Val>;
}
export declare function table_data_highlight_rows_b<Val extends unknown = unknown>(ctx: table_data_highlight_rows_Ctx<Val>): table_data_highlight_rows_maybe_T<Val>;
export interface $table_data_highlight_rows_T<Val extends unknown = unknown> extends Record<string, Val[]> {
}
export declare type $table_data_highlight_rows_maybe_T<Val extends unknown = unknown> = $table_data_highlight_rows_T<Val> | undefined;
export interface table_data_highlight_rows_maybe_T<Val extends unknown = unknown> extends Writable$<$table_data_highlight_rows_maybe_T<Val>> {
}
export { table_data_highlight_rows_b as b__table__highlight__rows__data };
