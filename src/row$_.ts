import { atom_, WritableAtom_ } from '@ctx-core/nanostores'
import { be_, Ctx } from '@ctx-core/object'
import type { Row } from './Row.js'
export function row$_<Val extends unknown = unknown>(ctx:Ctx) {
	return _row$_(ctx) as row$_T<Val>
}
const _row$_ = be_<row$_T>('row$', ()=>
	atom_<Row|undefined>(undefined)
)
export type row$_T<Val extends unknown = unknown> = WritableAtom_<Row<Val>|undefined>
