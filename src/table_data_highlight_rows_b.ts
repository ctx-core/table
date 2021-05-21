import { writable$, Writable$ } from '@ctx-core/store'
import { _b } from '@ctx-core/object'
const key = 'table_data_highlight_rows'
export interface table_data_highlight_rows_ctx_I<Val extends unknown = unknown> {
	table_data_highlight_rows?:table_data_highlight_rows_maybe_T<Val>
}
export function table_data_highlight_rows_b<Val extends unknown = unknown>(
	ctx:table_data_highlight_rows_ctx_I<Val>
) {
	return _b<table_data_highlight_rows_ctx_I<Val>, typeof key>(key, ()=>
		writable$(undefined) as table_data_highlight_rows_maybe_T<Val>
	)(ctx)
}
export interface $table_data_highlight_rows_T<Val extends unknown = unknown>
	extends Record<string, Val[]> {}
export type $table_data_highlight_rows_maybe_T<Val extends unknown = unknown> =
	$table_data_highlight_rows_T<Val>|undefined
export interface table_data_highlight_rows_maybe_T<Val extends unknown = unknown>
	extends Writable$<$table_data_highlight_rows_maybe_T<Val>> {}
export {
	table_data_highlight_rows_b as b__table__highlight__rows__data
}
