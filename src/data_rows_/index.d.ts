import type { Row } from '../_types'
export declare function data_rows_<
	I extends Row, O extends unknown = unknown
>(
	maybe_rows:I[]|undefined,
	data_columns:string[],
	column_offsets:Record<string, number>
):O[]|undefined
export {
	data_rows_ as _data_rows,
	data_rows_ as _rows__data,
}
