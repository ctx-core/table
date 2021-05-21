import { Readable$ } from '@ctx-core/store';
import { rows_ctx_I } from './rows_b';
import { column_offsets_ctx_I } from './column_offsets_b';
import type { $table_T } from './table_b';
import { columns_ctx_I } from './columns_b';
export interface rank_table_ctx_I<Val extends unknown = unknown> extends columns_ctx_I<Val>, rows_ctx_I<Val>, column_offsets_ctx_I<Val> {
    rank_table?: Readable$<$table_T<Val> | undefined>;
}
export declare function rank_table_b<Val extends unknown = unknown>(ctx: rank_table_ctx_I<Val>): Readable$<$table_T<Val> | undefined>;
export { rank_table_b as b__rank__table };
