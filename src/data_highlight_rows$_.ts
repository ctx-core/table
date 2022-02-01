import { atom$, WritableAtom$ } from '@ctx-core/nanostores'
import { be_, Ctx } from '@ctx-core/object'
export function data_highlight_rows$_<Val extends unknown = unknown>(ctx:Ctx) {
	return _data_highlight_rows$_(ctx) as data_highlight_rows$_T<Val>
}
const _data_highlight_rows$_ = be_<data_highlight_rows$_T>('data_highlight_rows$', ()=>
	atom$(undefined) as data_highlight_rows$_T
)
export type data_highlight_rows$_T<Val extends unknown = unknown> = WritableAtom$<Val[][]|undefined>
