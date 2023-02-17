import { atom_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
/**
 * @param ctx{import('@ctx-core/object').Ctx}
 * @returns {import('./index.d.ts').table_data_highlight_rows__T}
 */
export function table_data_highlight_rows__(ctx) {
	return _table_data_highlight_rows__(ctx)
}
const _table_data_highlight_rows__ = be_('table_data_highlight_rows__', ()=>
	atom_(undefined))
export { table_data_highlight_rows__ as table_data_highlight_rows$_ }
