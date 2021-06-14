import type { table_T } from './table$_b';
import type { column_offsets_I } from './column_offsets_I';
import type { Row } from './Row';
export declare function rows_<I extends unknown, O extends Row = Row>(table: table_T<I>, column_offsets: column_offsets_I): O[] | undefined;
export { rows_ as _rows, };
