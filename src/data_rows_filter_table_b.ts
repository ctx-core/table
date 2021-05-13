import { _b } from '@ctx-core/object'
import { _maybe_key_hash } from '@ctx-core/array'
import { derived$ } from '@ctx-core/store'
import { data_rows_filter_b } from './data_rows_filter_b'
import type { row_type } from './row_type'
import type { $maybe_data_rows_type } from './data_rows_b'
export function rows_data_filter_table_b<Row extends row_type>(ctx?) {
	return _b('rows_data_filter_table', ctx=>
		derived$(
			data_rows_filter_b<Row>(ctx),
			($data_rows_filter:$maybe_data_rows_type<Row>)=>
				$data_rows_filter
				&& ($data_rows_filter as Row[][]).map((row_a1:Row[])=>{
					return _maybe_key_hash<Row, keyof Row>(
						row_a1, 'row_id'
					)
				})
		)
	)(ctx)
}
export {
	rows_data_filter_table_b as b__table__filter__rows__data
}
