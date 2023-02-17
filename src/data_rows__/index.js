import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { column_offsets__ } from '../column_offsets__/index.js'
import { columns__ } from '../columns__/index.js'
import { data_rows_ } from '../data_rows_/index.js'
import { rows__ } from '../rows__/index.js'
/**
 * @param ctx{import('@ctx-core/object').Ctx}
 * @returns {import('./index.d.ts').data_rows__T}
 */
export function data_rows__(ctx) {
	return _data_rows__(ctx)
}
const _data_rows__ = be_('data_rows__', ctx=>
	computed_([
		rows__(ctx),
		columns__(ctx),
		column_offsets__(ctx)
	], (
		rows,
		columns,
		column_offsets
	)=>
		data_rows_(rows, columns, column_offsets)))
export { data_rows__ as data_rows$_ }
