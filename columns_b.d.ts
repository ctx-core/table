import { Readable } from '@ctx-core/store';
import type { row_type } from './row_type';
export declare function columns_b<I extends row_type, C extends object = object>(ctx: C): columns_type;
export declare type $columns_type = string[];
export declare type columns_type = Readable<$columns_type>;
export declare const b__columns: typeof columns_b;
