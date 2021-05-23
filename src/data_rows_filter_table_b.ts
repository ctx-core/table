import { _b } from '@ctx-core/object'
import { _maybe_key_hash } from '@ctx-core/array'
import { derived$ } from '@ctx-core/store'
import { data_rows_filter_b } from './data_rows_filter_b'
import type { $maybe_data_rows_T } from './data_rows_b'
import type { Row } from './Row'
import type { table_Ctx } from './table_Ctx'
const key = 'rows_data_filter_table'
export function rows_data_filter_table_b<Val extends Record<string, any>>(
	ctx:table_Ctx<Val>
) {
	return _b<table_Ctx<Val>, typeof key>(key, ()=>
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
export {
	rows_data_filter_table_b as b__table__filter__rows__data
}
