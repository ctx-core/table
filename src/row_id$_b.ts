import { B, be_, } from '@ctx-core/object'
import { Writable$, writable$ } from '@ctx-core/store'
const key = 'row_id$'
export const row_id$_b:B<row_id$_T> = be_(key, ()=>
	writable$(undefined) as Writable$<string|undefined>
)
export type row_id$_T = Writable$<string|undefined>
export {
	row_id$_b as b__row_id
}
