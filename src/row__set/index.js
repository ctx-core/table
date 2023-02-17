import { has_dom } from '@ctx-core/dom'
import { be_ } from '@ctx-core/object'
import { row__ } from '../row__/index.js'
import { row_id__ } from '../row_id__/index.js'
import { rows__ } from '../rows__/index.js'
export function row__set(ctx) {
	return set_row_(ctx)()
}
export {
	row__set as set_row,
	row__set as b__set__row,
}
const set_row_ = be_('row__set', (ctx)=>{
	if (has_dom) {
		_set_row()
	}
	return _set_row
	function _set_row() {
		const rows = rows__(ctx)()
		const row_id = row_id__(ctx)()
		if (!rows || !row_id) return
		let row = undefined
		for (let i = 0; i < rows.length; i++) {
			const i_row = rows[i]
			if (i_row.row_id === row_id) {
				row = i_row
				break
			}
		}
		row__(ctx)(row)
	}
})
