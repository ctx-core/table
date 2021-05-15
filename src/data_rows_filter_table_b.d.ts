import type { falsy } from '@ctx-core/function';
import { Readable$ } from '@ctx-core/store';
export declare function rows_data_filter_table_b<Val extends Record<string, any>>(ctx: {
    rows_data_filter_table?: Readable$<falsy | Record<string, Val>[]>;
}): Readable$<false | "" | 0 | Record<keyof Val, Val>[] | null | undefined>;
export interface rows_data_filter_table_ctx_I<Val extends unknown = unknown> {
    rows_data_filter_table?: Readable$<falsy | Record<string, Val>[]>;
}
export { rows_data_filter_table_b as b__table__filter__rows__data };
