import type { maybe } from '@ctx-core/function';
import type { row_type } from './row_type';
export declare function _data_rows<I extends row_type, O extends unknown = unknown>(maybe_rows: maybe<I[]>, data_columns: string[], column_offsets: Record<string, number>): O[] | undefined;
export { _data_rows as _rows__data };
