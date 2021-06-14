import { Readable$ } from '@ctx-core/store';
import type { table_Ctx } from './table_Ctx';
export declare function columns$_b<Val extends unknown = unknown>(ctx: table_Ctx<Val>): columns$_T;
export declare type columns_T = string[];
export interface columns$_T extends Readable$<columns_T> {
}
export { columns$_b as b__columns };
