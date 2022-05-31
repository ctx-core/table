import { has_dom } from '@ctx-core/dom'
import { atom_, WritableAtom_ } from '@ctx-core/nanostores'
import { B, be_, } from '@ctx-core/object'
import { set_row } from './set_row.js'
export const row_id__:B<WritableAtom_<string|undefined>> = be_('row_id__', ctx=>{
	const row_id_ = atom_(undefined) as WritableAtom_<string|undefined>
	if (has_dom) {
		row_id_.subscribe(()=>set_row(ctx))
	}
	return row_id_
})
export { row_id__ as row_id$_ }
