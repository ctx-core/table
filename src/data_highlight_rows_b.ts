import { _b } from '@ctx-core/object'
import { writable$, Writable$ } from '@ctx-core/store'
import type { table_Ctx } from './table_Ctx'
const key = 'data_highlight_rows'
export function data_highlight_rows_b<Val extends unknown = unknown>(
	ctx:table_Ctx<Val>
) {
	return _b<table_Ctx<Val>, typeof key>(key, ()=>
		writable$(null) as data_highlight_rows_T<Val>
	)(ctx)
}
export type $data_highlight_rows_T<Val extends unknown = unknown> = Val[][]
export type $data_highlight_rows_maybe_T<Val extends unknown = unknown> =
	$data_highlight_rows_T<Val>|null
export interface data_highlight_rows_T<Val extends unknown = unknown>
	extends Writable$<$data_highlight_rows_maybe_T<Val>> {}
export {
	data_highlight_rows_b as b__highlight__rows__data
}
