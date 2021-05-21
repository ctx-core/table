import { _b } from '@ctx-core/object'
import { writable$, Writable$ } from '@ctx-core/store'
const key = 'data_highlight_rows'
export interface data_highlight_rows_Ctx<Val extends unknown = unknown> {
	data_highlight_rows?:data_highlight_rows_T<Val>
}
export function data_highlight_rows_b<Val extends unknown = unknown>(
	ctx:data_highlight_rows_Ctx<Val>
) {
	return _b<data_highlight_rows_Ctx<Val>, typeof key>(key, ()=>
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
