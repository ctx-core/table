import type { falsy } from '@ctx-core/function'
import { _b } from '@ctx-core/object'
import { Readable$, derived$ } from '@ctx-core/store'
import { _data_rows } from './_data_rows'
import { rows_b, rows_Ctx } from './rows_b'
import { columns_b, columns_Ctx } from './columns_b'
import { column_offsets_b, column_offsets_Ctx } from './column_offsets_b'
const key = 'data_rows'
export interface data_rows_Ctx<Val extends unknown = unknown>
	extends rows_Ctx<Val>,
		columns_Ctx<Val>,
		column_offsets_Ctx<Val> {
	data_rows?:data_rows_T<Val>
}
export function data_rows_b<Val extends unknown = unknown>(ctx:data_rows_Ctx<Val>) {
	return _b<data_rows_Ctx<Val>, typeof key>(key, ()=>
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
export type $maybe_data_rows_T<Val extends unknown = unknown> =
	$data_rows_T<Val>|falsy
export interface data_rows_T<Val extends unknown = unknown>
	extends Readable$<$maybe_data_rows_T<Val>> {}
export { data_rows_b as b__rows__data }
