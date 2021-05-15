import { _b } from '@ctx-core/object'
import { Writable$, writable$ } from '@ctx-core/store'
export const row_id_b = _b('row_id', ()=>
	writable$(undefined) as Writable$<number|undefined>
)
export interface row_id_ctx_I {
	row_id?: Writable$<number|undefined>
}
export {
	row_id_b as b__row_id
}
