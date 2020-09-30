import type { maybe_null } from '@ctx-core/function';
import { Writable } from '@ctx-core/store';
export declare function table_data_highlight_rows_b<I extends unknown>(ctx?: any): table_data_highlight_rows_maybe_type<I>;
export declare const b__table__highlight__rows__data: typeof table_data_highlight_rows_b;
export declare type $table_data_highlight_rows_type<I extends unknown> = Record<string, I[]>;
export declare type $table_data_highlight_rows_maybe_type<I extends unknown> = maybe_null<$table_data_highlight_rows_type<I>>;
export declare type table_data_highlight_rows_maybe_type<I extends unknown> = Writable<$table_data_highlight_rows_maybe_type<I>>;
