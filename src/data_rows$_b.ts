import { _b } from '@ctx-core/object'
import { Readable$, derived$ } from '@ctx-core/store'
import { data_rows_ } from './data_rows_'
import { rows$_b } from './rows$_b'
import { columns$_b } from './columns$_b'
import { column_offsets$_b } from './column_offsets$_b'
import type { table_Ctx } from './table_Ctx'
const key = 'data_rows$'
export function data_rows$_b<Val extends unknown = unknown>(ctx:table_Ctx<Val>) {
	return _b<table_Ctx<Val>, typeof key>(key, ()=>
		derived$([
				rows$_b<Val>(ctx),
				columns$_b<Val>(ctx),
				column_offsets$_b<Val>(ctx),
			],
			([$rows, $columns, $column_offsets])=>
				data_rows_($rows, $columns, $column_offsets)
		) as data_rows$_T<Val>
	)(ctx)
}
export type data_rows_T<Val extends unknown = unknown> = Val[][]
export interface data_rows$_T<Val extends unknown = unknown>
	extends Readable$<data_rows_T<Val>|undefined> {}
export { data_rows$_b as b__rows__data }
