import { Readable$ } from '@ctx-core/store';
import type { table_Ctx } from './table_Ctx';
export declare function columns_b<Val extends unknown = unknown>(ctx: table_Ctx<Val>): columns_T;
export declare type $columns_T = string[];
export interface columns_T extends Readable$<$columns_T> {
}
export { columns_b as b__columns };
