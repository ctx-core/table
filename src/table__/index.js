import { has_dom } from '@ctx-core/dom'
import { atom_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { row__set } from '../row__set/index.js'
/**
 * @param ctx{import('@ctx-core/object').Ctx}
 * @returns {import('./index.d.ts').table__T}
 */
export function table__(ctx) {
	return _table__(ctx)
}
const _table__ = be_('table__', (ctx)=>{
	const table_ = atom_([])
	if (has_dom) {
		table_.subscribe(()=>row__set(ctx))
	}
	return table_
})
export { table__ as table$_ }
