import { atom$, WritableAtom$ } from '@ctx-core/nanostores'
import { be_, Ctx } from '@ctx-core/object'
const key = 'data_highlight_rows$'
export function data_highlight_rows$_b<Val extends unknown = unknown>(ctx:Ctx) {
	return be_<data_highlight_rows$_T>(key, ()=>
		atom$(undefined) as data_highlight_rows$_T<Val>
	)(ctx)
}
export type data_highlight_rows$_T<Val extends unknown = unknown> =
	WritableAtom$<Val[][]|undefined>
export {
	data_highlight_rows$_b as b__highlight__rows__data
}
