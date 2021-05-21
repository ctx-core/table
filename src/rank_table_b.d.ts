import { Readable$ } from '@ctx-core/store';
import { rows_Ctx } from './rows_b';
import { column_offsets_Ctx } from './column_offsets_b';
import type { $table_T } from './table_b';
import { columns_Ctx } from './columns_b';
export interface rank_table_Ctx<Val extends unknown = unknown> extends columns_Ctx<Val>, rows_Ctx<Val>, column_offsets_Ctx<Val> {
    rank_table?: Readable$<$table_T<Val> | undefined>;
}
export declare function rank_table_b<Val extends unknown = unknown>(ctx: rank_table_Ctx<Val>): Readable$<$table_T<Val> | undefined>;
export { rank_table_b as b__rank__table };
