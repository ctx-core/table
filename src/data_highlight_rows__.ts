import { atom_, WritableAtom_ } from '@ctx-core/nanostores'
import { be_, Ctx } from '@ctx-core/object'
export function data_highlight_rows__<Val extends unknown = unknown>(ctx:Ctx) {
	return _data_highlight_rows__(ctx) as data_highlight_rows__T<Val>
}
const _data_highlight_rows__ = be_<data_highlight_rows__T>('data_highlight_rows__', ()=>
	atom_(undefined) as data_highlight_rows__T
)
export type data_highlight_rows__T<Val extends unknown = unknown> = WritableAtom_<Val[][]|undefined>
export { data_highlight_rows__ as data_highlight_rows$_ }
