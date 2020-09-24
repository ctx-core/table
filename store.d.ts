import { Readable } from 'svelte/store';
import { Writable } from '@ctx-core/store';
import type { maybe, maybe_null } from '@ctx-core/function';
export declare function table_b<I extends unknown>(ctx?: object): table_type<I>;
export declare const b__table: typeof table_b;
export declare type $table_type<I extends unknown> = [string[]?, ...I[][]];
export declare type table_type<I extends unknown> = Writable<$table_type<I>>;
export declare function b__columns(ctx?: object): columns_type;
export declare type $columns_type = string[];
export declare type columns_type = Readable<$columns_type>;
export declare const b__columns__data: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => Readable<$columns_type>;
export declare const b__offsets__column: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => Readable<Record<string, number>>;
export declare type $type__domain__table = number[][];
export declare type type__domain__table = Writable<$type__domain__table>;
export declare const b__domain__table: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => Writable<number[][]>;
export declare const b__domain__ticks: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => Writable<number[]>;
export declare function b__rows<I>(ctx?: object): Readable<unknown>;
export declare function b__rows__data<I>(ctx?: object): data_rows_type<I>;
export declare type $data_rows_type<I> = I[][];
export declare type $maybe__data_rows_type<I> = maybe<$data_rows_type<I>>;
export declare type data_rows_type<I> = Readable<$maybe__data_rows_type<I>>;
export declare const b__reverse__columns: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => Readable<string[]>;
export declare const b__rank__table: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => Readable<unknown>;
export declare const b__row_id: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => Writable<null>;
export declare type $data_row_filter_input<I> = {
    column: number;
    value: I;
};
export declare type $type__inputs__filter__rows__data<I extends unknown> = $data_row_filter_input<I>[];
export declare type $maybe_type__inputs__filter__rows__data<I extends unknown> = maybe_null<$type__inputs__filter__rows__data<I>>;
export declare type type__inputs__filter__rows__data<I extends unknown> = Writable<$maybe_type__inputs__filter__rows__data<I>>;
export declare function b__inputs__filter__rows__data<I extends unknown>(ctx?: object): type__inputs__filter__rows__data<I>;
export declare function b__filter__rows__data<I>(ctx?: any): data_rows_type<I>;
export declare function table_b__filter__rows__data<I extends unknown>(ctx?: any): Readable<Record<string, I[]>>;
export declare type $type__highlight__rows__data<I extends unknown> = I[][];
export declare type $maybe_type__highlight__rows__data<I extends unknown> = maybe_null<$type__highlight__rows__data<I>>;
export declare type type__highlight__rows__data<I extends unknown> = Writable<$maybe_type__highlight__rows__data<I>>;
export declare function b__highlight__rows__data<I extends unknown>(ctx?: any): type__highlight__rows__data<I>;
export declare type $type__table__highlight__rows__data<I extends unknown> = Record<string, I[]>;
export declare type $maybe_type__table__highlight__rows__data<I extends unknown> = maybe_null<$type__table__highlight__rows__data<I>>;
export declare type type__table__highlight__rows__data<I extends unknown> = Writable<$maybe_type__table__highlight__rows__data<I>>;
export declare function table_b__highlight__rows__data<I extends unknown>(ctx?: any): type__table__highlight__rows__data<I>;
export declare function b__assign__highlight__rows<I extends unknown>(ctx?: any): () => void;
export declare const assign__highlight__rows: () => void;
export declare const b__row: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => Writable<null>;
export declare const b__set__row: (ctx?: object | undefined, opts?: import("@ctx-core/object")._be_opts_type | undefined) => () => void;
export declare const set__row: () => void;
