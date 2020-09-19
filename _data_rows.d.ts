import type { maybe } from '@ctx-core/function';
export declare function _data_rows<I, O = unknown>(maybe_rows: maybe<I[][]>, data_columns: string[], offsets__column: Record<string, number>): O[] | undefined;
export declare const _rows__data: typeof _data_rows;
