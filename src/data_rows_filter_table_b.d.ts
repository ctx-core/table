import type { falsy } from '@ctx-core/function';
import { Readable$ } from '@ctx-core/store';
import { data_rows_filter_ctx_I } from './data_rows_filter_b';
export interface rows_data_filter_table_ctx_I<Val extends unknown = unknown> extends data_rows_filter_ctx_I<Val> {
    rows_data_filter_table?: Readable$<falsy | Record<string, Val>[]>;
}
export declare function rows_data_filter_table_b<Val extends Record<string, any>>(ctx: rows_data_filter_table_ctx_I<Val>): Readable$<falsy | Record<string, Val>[]>;
export { rows_data_filter_table_b as b__table__filter__rows__data };
