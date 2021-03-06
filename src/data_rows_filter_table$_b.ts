import { be_ } from '@ctx-core/object'
import { maybe_key_r_ } from '@ctx-core/array'
import { derived$, Readable$ } from '@ctx-core/store'
import { data_rows_filter$_b } from './data_rows_filter$_b.js'
import type { Row } from './Row.js'
import type { table_Ctx } from './table_Ctx.js'
import type { data_rows_T } from './data_rows$_b'
const key = 'data_rows_filter_table$'
const row_id_key = 'row_id'
export function data_rows_filter_table$_b<Val extends unknown = unknown>(
	ctx:table_Ctx<Val>
) {
	return be_<table_Ctx<Val>, typeof key, data_rows_filter_table$_T>(key, ()=>
		derived$(
			data_rows_filter$_b<Val>(ctx),
			(data_rows_filter:data_rows_T<Val>|undefined)=>
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
