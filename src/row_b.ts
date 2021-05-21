import { _b } from '@ctx-core/object'
import { writable$, Writable$ } from '@ctx-core/store'
import type { Row } from './Row'
const key = 'row'
export interface row_Ctx<Val extends unknown = unknown> {
	row?:Writable$<Row<Val>|undefined>
}
export function row_b<Val extends unknown = unknown>(ctx:row_Ctx<Val>) {
	return _b<row_Ctx<Val>, typeof key>(key, ()=>
		writable$<Row<Val>|undefined>(undefined)
	)(ctx)
}
export interface row_T<Val extends unknown = unknown> extends Writable$<Row<Val>|undefined> {}
export {
	row_b as b__row
}
