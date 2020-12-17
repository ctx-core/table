import type { maybe_null } from '@ctx-core/function'
import { writable, Writable } from '@ctx-core/store'
import { _b } from '@ctx-core/object'
export function table_data_highlight_rows_b<I extends unknown>(ctx?) {
	return _b<table_data_highlight_rows_maybe_type<I>>('table_data_highlight_rows', ()=>
		writable(null) as table_data_highlight_rows_maybe_type<I>
	)(ctx)
}
export interface $table_data_highlight_rows_type<I extends unknown> extends Record<string, I[]> {}
export type $table_data_highlight_rows_maybe_type<I extends unknown> =
	maybe_null<$table_data_highlight_rows_type<I>>
export interface table_data_highlight_rows_maybe_type<I extends unknown>
	extends Writable<$table_data_highlight_rows_maybe_type<I>> {}
export {
	table_data_highlight_rows_b as b__table__highlight__rows__data
}
