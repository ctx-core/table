import { has_dom } from '@ctx-core/dom'
import { atom_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { table__ } from '../table__/index.js	'
/**
 * @param ctx{import('@ctx-core/object').Ctx}
 * @returns {import('./index.d.ts').data_rows_filter_inputs__T}
 */
export function data_rows_filter_inputs__(ctx) {
	return _data_rows_filter_inputs__(ctx)
}
const _data_rows_filter_inputs__ = be_('data_rows_filter_inputs__', ctx=>{
	const data_rows_filter_inputs = atom_(undefined)
	if (has_dom) {
		table__(ctx).listen(()=>data_rows_filter_inputs.$ = undefined)
	}
	return data_rows_filter_inputs
})
export { data_rows_filter_inputs__ as data_rows_filter_inputs$_ }
