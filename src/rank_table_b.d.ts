import type { $table_T } from './table_b';
import type { table_Ctx } from './table_Ctx';
export declare function rank_table_b<Val extends unknown = unknown>(ctx: table_Ctx<Val>): import("@ctx-core/store").Readable$<$table_T<Val> | undefined>;
export { rank_table_b as b__rank__table };
