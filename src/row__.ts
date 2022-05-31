import { atom_, WritableAtom_ } from '@ctx-core/nanostores'
import { be_, Ctx } from '@ctx-core/object'
import type { Row } from './Row.js'
export function row__<Val extends unknown = unknown>(ctx:Ctx) {
	return _row__(ctx) as row__T<Val>
}
const _row__ = be_<row__T>('row__', ()=>
	atom_<Row|undefined>(undefined)
)
export type row__T<Val extends unknown = unknown> = WritableAtom_<Row<Val>|undefined>
export { row__ as row$_ }
