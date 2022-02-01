import { has_dom } from '@ctx-core/dom'
import { be_, Ctx } from '@ctx-core/object'
import type { Row } from './Row.js'
import { row$_ } from './row$_.js'
import { row_id$_ } from './row_id$_.js'
import { rows$_ } from './rows$_.js'
export function set_row(ctx:Ctx) {
	return _set_row(ctx)()
}
const _set_row = be_<set_row_T>('set_row', ctx=>{
	if (has_dom) {
		_set_row()
	}
	return _set_row
	function _set_row() {
		const rows = rows$_(ctx).$
		const row_id = row_id$_(ctx).$
		if (!rows || !row_id) return
		let row:Row|undefined = undefined
		for (let i = 0; i < rows.length; i++) {
			const i_row = rows[i]
			if (i_row.row_id === row_id) {
				row = i_row
				break
			}
		}
		row$_(ctx).$ = row
	}
})
export type set_row_T = ()=>void
export {
	set_row as b__set__row
}
