import { has_dom } from '@ctx-core/dom'
import { be_, Ctx } from '@ctx-core/object'
import type { Row } from './Row.js'
import { row$_b } from './row$_b.js'
import { row_id$_b } from './row_id$_b.js'
import { rows$_b } from './rows$_b.js'
import { table$_b } from './table$_b.js'
const key = 'set_row'
export function set_row_b<Val extends unknown = unknown>(ctx:Ctx) {
	return be_<set_row_T>(key, ()=>{
		if (has_dom) {
			row_id$_b(ctx).subscribe(set_row)
			table$_b<Val>(ctx).subscribe(set_row)
			set_row()
		}
		return set_row
		function set_row() {
			const rows = rows$_b<Val>(ctx).$
			const row_id = row_id$_b(ctx).$
			if (!rows || !row_id) return
			let row:Row<Val>|undefined = undefined
			for (let i = 0; i < rows.length; i++) {
				const i_row = rows[i]
				if (i_row.row_id === row_id) {
					row = i_row
					break
				}
			}
			row$_b(ctx).set(row)
		}
	})(ctx)
}
export type set_row_T = ()=>void
export {
	set_row_b as b__set__row
}
