import type { maybe_null } from '@ctx-core/function'
import { writable, Writable } from '@ctx-core/store'
import { _b } from '@ctx-core/object'
export function table_data_highlight_rows_b<I extends unknown>(ctx?) {
	return _b<table_data_highlight_rows_maybe_type<I>>('table_data_highlight_rows', ()=>
		writable(null)
	)(ctx)
}
export const b__table__highlight__rows__data = table_data_highlight_rows_b
export type $table_data_highlight_rows_type<I extends unknown> = Record<string, I[]>
export type $table_data_highlight_rows_maybe_type<I extends unknown> =
	maybe_null<$table_data_highlight_rows_type<I>>
export type table_data_highlight_rows_maybe_type<I extends unknown> =
	Writable<$table_data_highlight_rows_maybe_type<I>>
