import { _b } from '@ctx-core/object'
import { Readable, spread_derived } from '@ctx-core/store'
import { _data_rows } from './_data_rows'
import type { maybe } from '@ctx-core/function'
import { rows_b } from './rows_b'
import { columns_b } from './columns_b'
import { column_offsets_b } from './column_offsets_b'
import type { row_type } from './row_type'
export function data_rows_b<I extends row_type>(ctx?:object) {
	return _b('__rows__data', ctx=>
		spread_derived([
				rows_b<I>(ctx),
				columns_b(ctx),
				column_offsets_b(ctx),
			],
			_data_rows
		) as data_rows_type<I>
	)(ctx)
}
export const b__rows__data = data_rows_b
export type $data_rows_type<I> = I[][]
export type $maybe__data_rows_type<I> = maybe<$data_rows_type<I>>
export type data_rows_type<I> = Readable<$maybe__data_rows_type<I>>
