import type { column_offsets_T, Row } from '../_types'
import type { table_T } from '../table__'
export declare function rows_<
	I extends unknown,
	O extends Row = Row
>(table:table_T<I>, column_offsets:column_offsets_T):O[]|undefined
export { rows_ as _rows, }
