import { atom_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
/**
 * @param ctx{import('@ctx-core/object').Ctx}
 * @returns {import('./index.d.ts').data_highlight_rows__T}
 */
export function data_highlight_rows__(ctx) {
	return _data_highlight_rows__(ctx)
}
const _data_highlight_rows__ = be_('data_highlight_rows__', ()=>
	atom_(undefined))
export { data_highlight_rows__ as data_highlight_rows$_ }
