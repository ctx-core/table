import { _b } from '@ctx-core/object'
import { writable$, Writable$ } from '@ctx-core/store'
import type { table_Ctx } from './table_Ctx'
const key = 'table_data_highlight_rows$'
export function table_data_highlight_rows$_b<Val extends unknown = unknown>(
	ctx:table_Ctx<Val>
) {
	return _b<table_Ctx<Val>, typeof key>(key, ()=>
		writable$(undefined) as table_data_highlight_rows$_T<Val>
	)(ctx)
}
export interface table_data_highlight_rows_T<Val extends unknown = unknown>
	extends Record<string, Val[]> {}
export interface table_data_highlight_rows$_T<Val extends unknown = unknown>
	extends Writable$<table_data_highlight_rows_T<Val>|undefined> {}
export {
	table_data_highlight_rows$_b as b__table__highlight__rows__data
}
