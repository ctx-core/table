import { be_ } from '@ctx-core/object'
import { Writable$, writable$ } from '@ctx-core/store'
import type { table_Ctx } from './table_Ctx'
const key = 'row_id$'
export const row_id$_b = be_<table_Ctx, typeof key>(key, ()=>
	writable$(undefined) as Writable$<string|undefined>
)
export type row_id$_T = Writable$<string|undefined>
export {
	row_id$_b as b__row_id
}
