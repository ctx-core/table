import { has_dom } from '@ctx-core/dom'
import { atom_, WritableAtom_ } from '@ctx-core/nanostores'
import { B, be_, } from '@ctx-core/object'
import { set_row } from './set_row.js'
export const row_id$_:B<row_id$_T> = be_('row_id$', ctx=>{
	const row_id$ = atom_(undefined) as WritableAtom_<string|undefined>
	if (has_dom) {
		row_id$.subscribe(()=>set_row(ctx))
	}
	return row_id$
})
export type row_id$_T = WritableAtom_<string|undefined>
