import { _b } from '@ctx-core/object'
import { Writable, writable } from '@ctx-core/store'
export const row_id_b = _b('row_id', ()=>
	writable(null) as Writable<number|null>
)
export {
	row_id_b as b__row_id
}
