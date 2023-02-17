import { has_dom } from '@ctx-core/dom'
import { atom_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { row__set } from '../row__set/index.js'
/** @type {typeof import('./index.d.ts').row_id__} */
export const row_id__ = be_('row_id__', ctx=>{
	const row_id_ = atom_(undefined)
	if (has_dom) {
		row_id_.subscribe(()=>row__set(ctx))
	}
	return row_id_
})
export { row_id__ as row_id$_ }
