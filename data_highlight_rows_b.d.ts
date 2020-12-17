import type { maybe_null } from '@ctx-core/function';
import { Writable } from '@ctx-core/store';
export declare function data_highlight_rows_b<I extends unknown>(ctx?: any): data_highlight_rows_type<I>;
export declare type $data_highlight_rows_type<I extends unknown> = I[][];
export declare type $data_highlight_rows_maybe_type<I extends unknown> = maybe_null<$data_highlight_rows_type<I>>;
export interface data_highlight_rows_type<I extends unknown> extends Writable<$data_highlight_rows_maybe_type<I>> {
}
export { data_highlight_rows_b as b__highlight__rows__data };
