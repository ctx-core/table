import { Readable } from '@ctx-core/store';
import type { row_type } from './row_type';
export declare function columns_b<I extends row_type, C extends object = object>(ctx: C): columns_type;
export declare type $columns_type = string[];
export interface columns_type extends Readable<$columns_type> {
}
export { columns_b as b__columns };
