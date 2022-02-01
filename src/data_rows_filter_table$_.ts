import { maybe_key_r_ } from '@ctx-core/array'
import { computed$, ReadableAtom$ } from '@ctx-core/nanostores'
import { be_, Ctx } from '@ctx-core/object'
import { data_rows_filter$_ } from './data_rows_filter$_.js'
import type { Row } from './Row.js'
const row_id_key = 'row_id'
export function data_rows_filter_table$_<Val extends unknown = unknown>(ctx:Ctx) {
	return data_rows_filter_table$_b(ctx) as data_rows_filter_table$_T<Val>
}
const data_rows_filter_table$_b = be_<data_rows_filter_table$_T>('data_rows_filter_table$', ctx=>
	computed$(
		data_rows_filter$_(ctx),
		(data_rows_filter:unknown[][]|undefined)=>
			data_rows_filter
			? maybe_key_r_<typeof row_id_key, Row>(
				data_rows_filter as Row[], row_id_key
			)
			: null
	)
)
export type data_rows_filter_table_T<Val extends unknown = unknown> = Record<string, Val>|null
export type data_rows_filter_table$_T<Val extends unknown = unknown> = ReadableAtom$<data_rows_filter_table_T<Val>>
