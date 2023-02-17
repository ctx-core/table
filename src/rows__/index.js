import { computed_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { column_offsets__ } from '../column_offsets__/index.js'
import { rows_ } from '../rows_/index.js'
import { table__ } from '../table__/index.js'
/**
 * @param ctx{import('@ctx-core/object').Ctx}
 * @returns {import('./index.d.ts').rows__T}
 */
export function rows__(ctx) {
	return _rows__(ctx)
}
const _rows__ = be_('rows__', ctx=>
	computed_([
		table__(ctx),
		column_offsets__(ctx)
	], (table, column_offsets)=>
		rows_(table, column_offsets)))
export { rows__ as rows$_ }
