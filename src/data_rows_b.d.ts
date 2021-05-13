import type { falsy } from '@ctx-core/function';
import { Readable$ } from '@ctx-core/store';
import type { row_type } from './row_type';
export declare function data_rows_b<I extends row_type, C extends object = object>(ctx: C): data_rows_type<I>;
export declare type $data_rows_type<Row extends row_type> = Row[][];
export declare type $maybe_data_rows_type<Row extends row_type> = $data_rows_type<Row> | falsy;
export interface data_rows_type<Row extends row_type> extends Readable$<$maybe_data_rows_type<Row>> {
}
export { data_rows_b as b__rows__data };
