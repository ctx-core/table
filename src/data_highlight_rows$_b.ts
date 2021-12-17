import { be_, Ctx } from '@ctx-core/object'
import { writable$, Writable$ } from '@ctx-core/store'
const key = 'data_highlight_rows$'
export function data_highlight_rows$_b<Val extends unknown = unknown>(ctx:Ctx) {
	return be_<data_highlight_rows$_T>(key, ()=>
		writable$(undefined) as data_highlight_rows$_T<Val>
	)(ctx)
}
export type data_highlight_rows$_T<Val extends unknown = unknown> =
	Writable$<Val[][]|undefined>
export {
	data_highlight_rows$_b as b__highlight__rows__data
}
