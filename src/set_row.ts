import { has_dom } from '@ctx-core/dom'
import { be_, Ctx } from '@ctx-core/object'
import type { Row } from './Row.js'
import { row__ } from './row__.js'
import { row_id__ } from './row_id__.js'
import { rows__ } from './rows__.js'
export function set_row(ctx:Ctx) {
	return set_row_(ctx)()
}
const set_row_ = be_<set_row_T>('set_row', ctx=>{
	if (has_dom) {
		_set_row()
	}
	return _set_row
	function _set_row() {
		const rows = rows__(ctx)()
		const row_id = row_id__(ctx)()
		if (!rows || !row_id) return
		let row:Row|undefined = undefined
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
export type set_row_T = ()=>void
export {
	set_row as b__set__row
}
