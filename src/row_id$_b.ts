import { WritableAtom$, atom$ } from '@ctx-core/nanostores'
import { B, be_, } from '@ctx-core/object'
const key = 'row_id$'
export const row_id$_b:B<row_id$_T> = be_(key, ()=>
	atom$(undefined) as WritableAtom$<string|undefined>
)
export type row_id$_T = WritableAtom$<string|undefined>
export {
	row_id$_b as b__row_id
}
