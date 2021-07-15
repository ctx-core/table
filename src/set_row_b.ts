import { be_ } from '@ctx-core/object'
import { has_dom } from '@ctx-core/dom'
import { subscribe } from '@ctx-core/store'
import { row_id$_b } from './row_id$_b.js'
import { table$_b } from './table$_b.js'
import { rows$_b } from './rows$_b.js'
import { row$_b } from './row$_b.js'
import type { Row } from './Row.js'
import type { table_Ctx } from './table_Ctx'
const key = 'set_row'
export function set_row_b<Val extends unknown = unknown>(
	ctx:table_Ctx<Val>
) {
	return be_<table_Ctx<Val>, typeof key>(key, ()=>{
		if (has_dom) {
			subscribe(row_id$_b(ctx), set_row)
			subscribe(table$_b<Val>(ctx), set_row)
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
