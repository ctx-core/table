import { atom_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
/**
 * @param ctx{import('@ctx-core/object').Ctx}
 * @returns {import('./index.d.ts').row__T}
 */
export function row__(ctx) {
	return _row__(ctx)
}
const _row__ = be_('row__', ()=>
	atom_(undefined))
export { row__ as row$_ }
