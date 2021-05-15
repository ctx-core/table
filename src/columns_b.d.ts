import { Readable } from '@ctx-core/store';
import { table_T } from './table_b';
export declare function columns_b<Val extends unknown = unknown>(ctx: columns_ctx_I<Val>): columns_T;
export interface columns_ctx_I<Val extends unknown = unknown> {
    table?: table_T<Val>;
    columns?: columns_T;
}
export declare type $columns_T = string[];
export interface columns_T extends Readable<$columns_T> {
}
export { columns_b as b__columns };
