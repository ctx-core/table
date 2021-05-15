import type { falsy } from '@ctx-core/function';
import type { Row } from './Row';
export declare function _data_rows<I extends Row, O extends unknown = unknown>(maybe_rows: I[] | falsy, data_columns: string[], column_offsets: Record<string, number>): O[] | undefined;
export { _data_rows as _rows__data };
