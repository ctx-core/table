import { be_ } from '@ctx-core/object'
import { writable$, Writable$ } from '@ctx-core/store'
import type { table_Ctx } from './table_Ctx'
const key = 'data_highlight_rows$'
export function data_highlight_rows$_b<Val extends unknown = unknown>(
	ctx:table_Ctx<Val>
) {
	return be_<table_Ctx<Val>, typeof key>(key, ()=>
		writable$(undefined) as data_highlight_rows$_T<Val>
	)(ctx)
}
export type data_highlight_rows_T<Val extends unknown = unknown> = Val[][]
export interface data_highlight_rows$_T<Val extends unknown = unknown>
	extends Writable$<data_highlight_rows_T<Val>|undefined> {}
export {
	data_highlight_rows$_b as b__highlight__rows__data
}
