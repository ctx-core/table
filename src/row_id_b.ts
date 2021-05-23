import { _b } from '@ctx-core/object'
import { Writable$, writable$ } from '@ctx-core/store'
import type { table_Ctx } from './table_Ctx'
const key = 'row_id'
export const row_id_b = _b<table_Ctx, typeof key>(key, ()=>
	writable$(undefined) as Writable$<number|undefined>
)
export {
	row_id_b as b__row_id
}
