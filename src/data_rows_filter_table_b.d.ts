import type { table_Ctx } from './table_Ctx';
export declare function rows_data_filter_table_b<Val extends Record<string, any>>(ctx: table_Ctx<Val>): import("@ctx-core/store").Readable$<import("@ctx-core/function").falsy | Record<string, Val>[]>;
export { rows_data_filter_table_b as b__table__filter__rows__data };
