import { _b } from '@ctx-core/object'
import { Readable$, derived$ } from '@ctx-core/store'
import { _data_rows } from './_data_rows'
import { rows_b } from './rows_b'
import { columns_b } from './columns_b'
import { column_offsets_b } from './column_offsets_b'
import type { table_Ctx } from './table_Ctx'
const key = 'data_rows'
export function data_rows_b<Val extends unknown = unknown>(ctx:table_Ctx<Val>) {
	return _b<table_Ctx<Val>, typeof key>(key, ()=>
		derived$([
				rows_b<Val>(ctx),
				columns_b<Val>(ctx),
				column_offsets_b<Val>(ctx),
			],
			([$rows, $columns, $column_offsets])=>
				_data_rows($rows, $columns, $column_offsets)
		) as data_rows_T<Val>
	)(ctx)
}
export type $data_rows_T<Val extends unknown = unknown> = Val[][]
export interface data_rows_T<Val extends unknown = unknown>
	extends Readable$<$data_rows_T<Val>|undefined> {}
export { data_rows_b as b__rows__data }
