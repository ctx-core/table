import type { maybe_null } from '@ctx-core/function'
import { writable, Writable } from '@ctx-core/store'
import { _b } from '@ctx-core/object'
export function data_highlight_rows_b<I extends unknown>(ctx?) {
	return _b<data_highlight_rows_type<I>>('data_highlight_rows',
		()=>writable(null))(ctx)
}
export const b__highlight__rows__data = data_highlight_rows_b
export type $data_highlight_rows_type<I extends unknown> = I[][]
export type $data_highlight_rows_maybe_type<I extends unknown> =
	maybe_null<$data_highlight_rows_type<I>>
export type data_highlight_rows_type<I extends unknown> =
	Writable<$data_highlight_rows_maybe_type<I>>
