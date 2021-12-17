import { maybe_key_r_ } from '@ctx-core/array'
import { be_, Ctx } from '@ctx-core/object'
import { derived$, Readable$ } from '@ctx-core/store'
import { data_rows_filter$_b } from './data_rows_filter$_b.js'
import type { Row } from './Row.js'
const key = 'data_rows_filter_table$'
const row_id_key = 'row_id'
export function data_rows_filter_table$_b<Val extends unknown = unknown>(ctx:Ctx) {
	return be_<data_rows_filter_table$_T>(key, ()=>
		derived$(
			data_rows_filter$_b<Val>(ctx),
			(data_rows_filter:Val[][]|undefined)=>
				data_rows_filter
				? maybe_key_r_<typeof row_id_key, Row<Val>>(
					data_rows_filter as Row<Val>[], row_id_key
				)
				: null
		)
	)(ctx)
}
export type data_rows_filter_table_T<Val extends unknown = unknown> = Record<string, Val>|null
export type data_rows_filter_table$_T<Val extends unknown = unknown> =
	Readable$<data_rows_filter_table_T<Val>>
export {
	data_rows_filter_table$_b as b__table__filter__rows__data
}
