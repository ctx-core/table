import { atom$, WritableAtom$ } from '@ctx-core/nanostores'
import { be_, Ctx } from '@ctx-core/object'
import type { Row } from './Row.js'
const key = 'row$'
export function row$_<Val extends unknown = unknown>(ctx:Ctx) {
	return row$_b(ctx) as row$_T<Val>
}
const row$_b = be_<row$_T>(key, ()=>
	atom$<Row|undefined>(undefined)
)
export type row$_T<Val extends unknown = unknown> = WritableAtom$<Row<Val>|undefined>
