import { _b } from '@ctx-core/object'
import { _maybe_key_hash } from '@ctx-core/array'
import { derived$, Readable$ } from '@ctx-core/store'
import { data_rows_filter_b } from './data_rows_filter_b'
import type { Row } from './Row'
import type { table_Ctx } from './table_Ctx'
import type { $data_rows_T } from './data_rows_b'
const key = 'rows_data_filter_table'
const row_id_key = 'row_id'
export function rows_data_filter_table_b<Val extends unknown = unknown>(
	ctx:table_Ctx<Val>
) {
	return _b<table_Ctx<Val>, typeof key, rows_data_filter_table_T>(key, ()=>
		derived$(
			data_rows_filter_b<Val>(ctx),
			($data_rows_filter:$data_rows_T<Val>|undefined)=>
				$data_rows_filter
				? _maybe_key_hash<typeof row_id_key, Row<Val>>(
					$data_rows_filter as Row<Val>[], row_id_key
				)
				: null
		)
	)(ctx)
}
export type $rows_data_filter_table_T<Val extends unknown = unknown> = Record<string, Val>|null
export type rows_data_filter_table_T<Val extends unknown = unknown> =
	Readable$<$rows_data_filter_table_T<Val>>
export {
	rows_data_filter_table_b as b__table__filter__rows__data
}
