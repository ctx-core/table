import { atom$, WritableAtom$ } from '@ctx-core/nanostores'
import { be_, Ctx } from '@ctx-core/object'
import type { Row } from './Row.js'
const key = 'row$'
export function row$_b<Val extends unknown = unknown>(ctx:Ctx) {
	return be_<row$_T>(key, ()=>
		atom$<Row<Val>|undefined>(undefined)
	)(ctx)
}
export type row$_T<Val extends unknown = unknown> = WritableAtom$<Row<Val>|undefined>
export {
	row$_b as b__row
}
