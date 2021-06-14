import { Readable$ } from '@ctx-core/store';
import type { table_T } from './table$_b';
import type { table_Ctx } from './table_Ctx';
export declare function rank_table$_b<Val extends unknown = unknown>(ctx: table_Ctx<Val>): rank_table$_T<Val>;
export declare type rank_table$_T<Val extends unknown = unknown> = Readable$<table_T<Val> | undefined>;
export { rank_table$_b as b__rank__table };
