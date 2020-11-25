import { _b } from '@ctx-core/object'
import type { maybe } from '@ctx-core/function'
import { Readable, spread_derived } from '@ctx-core/store'
import { _data_rows } from './_data_rows'
import { rows_b } from './rows_b'
import { columns_b } from './columns_b'
import { column_offsets_b } from './column_offsets_b'
import type { row_type } from './row_type'
export function data_rows_b<I extends row_type, C extends object = object>(ctx:C) {
	return _b('data_rows', ctx=>
		spread_derived([
				rows_b<I>(ctx),
				columns_b(ctx),
				column_offsets_b(ctx),
			],
			_data_rows
		) as data_rows_type<I>
	)(ctx)
}
export type $data_rows_type<I> = I[][]
export type $maybe__data_rows_type<I> = maybe<$data_rows_type<I>>
export type data_rows_type<I> = Readable<$maybe__data_rows_type<I>>
export { data_rows_b as b__rows__data }
