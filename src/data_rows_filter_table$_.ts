import { maybe_key_r_ } from '@ctx-core/array'
import { computed_, ReadableAtom_ } from '@ctx-core/nanostores'
import { be_, Ctx } from '@ctx-core/object'
import { data_rows_filter$_ } from './data_rows_filter$_.js'
import type { Row } from './Row.js'
export function data_rows_filter_table$_<Val extends unknown = unknown>(ctx:Ctx) {
	return _data_rows_filter_table$_(ctx) as data_rows_filter_table$_T<Val>
}
const _data_rows_filter_table$_ = be_<data_rows_filter_table$_T>('data_rows_filter_table$', ctx=>
	computed_(
		data_rows_filter$_(ctx),
		(data_rows_filter:unknown[][]|undefined)=>
			data_rows_filter
			? maybe_key_r_<'row_id', Row>(
				data_rows_filter as Row[], 'row_id'
			)
			: null
	)
)
export type data_rows_filter_table_T<Val extends unknown = unknown> = Record<string, Val>|null
export type data_rows_filter_table$_T<Val extends unknown = unknown> = ReadableAtom_<data_rows_filter_table_T<Val>>
