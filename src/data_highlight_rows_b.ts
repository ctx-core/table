import { _b } from '@ctx-core/object'
import type { maybe_null } from '@ctx-core/function'
import { writable, Writable } from '@ctx-core/store'
export function data_highlight_rows_b<I extends unknown>(ctx?) {
	return _b('data_highlight_rows',
		()=>writable(null) as data_highlight_rows_type<I>
	)(ctx)
}
export type $data_highlight_rows_type<I extends unknown> = I[][]
export type $data_highlight_rows_maybe_type<I extends unknown> =
	maybe_null<$data_highlight_rows_type<I>>
export interface data_highlight_rows_type<I extends unknown>
	extends Writable<$data_highlight_rows_maybe_type<I>> {}
export {
	data_highlight_rows_b as b__highlight__rows__data
}
