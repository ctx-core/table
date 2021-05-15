import type { $table_T } from './table_b';
import type { column_offsets_T } from './column_offsets_T';
import type { Row } from './Row';
export declare function _rows<I extends unknown, O extends Row = Row>(table: $table_T<I>, column_offsets: column_offsets_T): O[] | undefined;
