import { _b } from '@ctx-core/object'
import { writable$, Writable$ } from '@ctx-core/store'
import type { Row } from './Row'
import type { table_Ctx } from './table_Ctx'
const key = 'row'
export function row_b<Val extends unknown = unknown>(ctx:table_Ctx<Val>) {
	return _b<table_Ctx<Val>, typeof key>(key, ()=>
		writable$<Row<Val>|undefined>(undefined)
	)(ctx)
}
export interface row_T<Val extends unknown = unknown> extends Writable$<Row<Val>|undefined> {}
export {
	row_b as b__row
}
