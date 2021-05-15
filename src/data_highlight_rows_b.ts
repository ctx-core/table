import { _b } from '@ctx-core/object'
import { writable$, Writable$ } from '@ctx-core/store'
export function data_highlight_rows_b<Val extends unknown = unknown>(
	ctx:{ data_highlight_rows?:data_highlight_rows_type<Val> }
) {
	return _b('data_highlight_rows',
		()=>writable$(null) as data_highlight_rows_type<Val>
	)(ctx)
}
export type $data_highlight_rows_type<Val extends unknown = unknown> = Val[][]
export type $data_highlight_rows_maybe_type<Val extends unknown = unknown> =
	$data_highlight_rows_type<Val>|null
export interface data_highlight_rows_type<Val extends unknown = unknown>
	extends Writable$<$data_highlight_rows_maybe_type<Val>> {}
export {
	data_highlight_rows_b as b__highlight__rows__data
}
