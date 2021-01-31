import { _b } from '@ctx-core/object'
import { derived } from '@ctx-core/store'
import { _maybe_key_hash } from '@ctx-core/array'
import { data_rows_filter_b } from './data_rows_filter_b'
import type { $data_rows_type } from './data_rows_b'
import type { row_type } from './row_type'
export function rows_data_filter_table_b<I extends row_type>(ctx?) {
	return _b('rows_data_filter_table', ctx=>
		derived(
			data_rows_filter_b<I>(ctx),
			$filter__rows__data=>_maybe_key_hash<$data_rows_type<I>>($filter__rows__data, 'row_id')
		)
	)(ctx)
}
export {
	rows_data_filter_table_b as b__table__filter__rows__data
}
