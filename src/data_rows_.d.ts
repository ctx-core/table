import type { falsy } from '@ctx-core/function';
import type { Row } from './Row';
export declare function data_rows_<I extends Row, O extends unknown = unknown>(maybe_rows: I[] | falsy, data_columns: string[], column_offsets: Record<string, number>): O[] | undefined;
export { data_rows_ as _data_rows, data_rows_ as _rows__data, };
