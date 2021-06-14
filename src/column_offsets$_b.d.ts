import { Readable$ } from '@ctx-core/store';
import type { table_Ctx } from './table_Ctx';
import type { column_offsets_I } from './column_offsets_I';
export declare function column_offsets$_b<Val extends unknown = unknown>(ctx: table_Ctx<Val>): column_offsets$_T;
export declare type column_offsets$_T = Readable$<column_offsets_I>;
export { column_offsets$_b as b__offsets__column };
