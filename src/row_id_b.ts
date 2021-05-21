import { _b } from '@ctx-core/object'
import { Writable$, writable$ } from '@ctx-core/store'
const key = 'row_id'
export interface row_id_Ctx {
	row_id?:Writable$<number|undefined>
}
export const row_id_b = _b<row_id_Ctx, typeof key>(key, ()=>
	writable$(undefined) as Writable$<number|undefined>
)
export {
	row_id_b as b__row_id
}
