import type { falsy } from '@ctx-core/function'
import { _b } from '@ctx-core/object'
import { _maybe_key_hash } from '@ctx-core/array'
import { derived$, Readable$ } from '@ctx-core/store'
import { data_rows_filter_b } from './data_rows_filter_b'
import type { $maybe_data_rows_T } from './data_rows_b'
import type { Row } from './Row'
export function rows_data_filter_table_b<Val extends Record<string, any>>(
	ctx:{ rows_data_filter_table?:Readable$<falsy|Record<string, Val>[]> }
) {
	return _b('rows_data_filter_table', ctx=>
		derived$(
			data_rows_filter_b<Val>(ctx),
			($data_rows_filter:$maybe_data_rows_T<Val>)=>
				$data_rows_filter
				&& ($data_rows_filter as Row<Val>[]).map((row:Row<Val>)=>{
					return _maybe_key_hash<Val>(
						row, 'row_id'
					)
				})
		)
	)(ctx)
}
export interface rows_data_filter_table_ctx_I<Val extends unknown = unknown> {
	rows_data_filter_table?:Readable$<falsy|Record<string, Val>[]>
}
export {
	rows_data_filter_table_b as b__table__filter__rows__data
}
