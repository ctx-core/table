import { be_ } from '@ctx-core/object'
import { writable$, Writable$ } from '@ctx-core/store'
import type { Row } from './Row.js'
import type { table_Ctx } from './table_Ctx'
const key = 'row$'
export function row$_b<Val extends unknown = unknown>(ctx:table_Ctx<Val>) {
	return be_<table_Ctx<Val>, typeof key>(key, ()=>
		writable$<Row<Val>|undefined>(undefined)
	)(ctx)
}
export interface row$_T<Val extends unknown = unknown> extends Writable$<Row<Val>|undefined> {}
export {
	row$_b as b__row
}
