import { atom$, WritableAtom$ } from '@ctx-core/nanostores'
import { be_, Ctx } from '@ctx-core/object'
const key = 'data_highlight_rows$'
export function data_highlight_rows$_<Val extends unknown = unknown>(ctx:Ctx) {
	return data_highlight_rows$_b(ctx) as data_highlight_rows$_T<Val>
}
const data_highlight_rows$_b = be_<data_highlight_rows$_T>(key, ()=>
	atom$(undefined) as data_highlight_rows$_T
)
export type data_highlight_rows$_T<Val extends unknown = unknown> = WritableAtom$<Val[][]|undefined>
