import { atom_, WritableAtom_ } from '@ctx-core/nanostores'
import { be_, Ctx } from '@ctx-core/object'
export function data_highlight_rows$_<Val extends unknown = unknown>(ctx:Ctx) {
	return _data_highlight_rows$_(ctx) as data_highlight_rows$_T<Val>
}
const _data_highlight_rows$_ = be_<data_highlight_rows$_T>('data_highlight_rows$', ()=>
	atom_(undefined) as data_highlight_rows$_T
)
export type data_highlight_rows$_T<Val extends unknown = unknown> = WritableAtom_<Val[][]|undefined>
