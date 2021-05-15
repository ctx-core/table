import type { maybe_null } from '@ctx-core/function';
import { Writable } from '@ctx-core/store';
export declare function table_data_highlight_rows_b<I extends unknown>(ctx: {
    table_data_highlight_rows?: $table_data_highlight_rows_maybe_type<I>;
}): table_data_highlight_rows_maybe_type<I>;
export interface $table_data_highlight_rows_type<I extends unknown> extends Record<string, I[]> {
}
export declare type $table_data_highlight_rows_maybe_type<I extends unknown> = maybe_null<$table_data_highlight_rows_type<I>>;
export interface table_data_highlight_rows_maybe_type<I extends unknown> extends Writable<$table_data_highlight_rows_maybe_type<I>> {
}
export { table_data_highlight_rows_b as b__table__highlight__rows__data };
