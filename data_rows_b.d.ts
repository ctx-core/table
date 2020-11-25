import type { maybe } from '@ctx-core/function';
import { Readable } from '@ctx-core/store';
import type { row_type } from './row_type';
export declare function data_rows_b<I extends row_type, C extends object = object>(ctx: C): data_rows_type<I>;
export declare type $data_rows_type<I> = I[][];
export declare type $maybe__data_rows_type<I> = maybe<$data_rows_type<I>>;
export declare type data_rows_type<I> = Readable<$maybe__data_rows_type<I>>;
export { data_rows_b as b__rows__data };
