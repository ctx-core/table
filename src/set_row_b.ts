import { _b } from '@ctx-core/object'
import { has_dom } from '@ctx-core/dom'
import { subscribe } from '@ctx-core/store'
import { row_id_b } from './row_id_b'
import { table_b } from './table_b'
import { rows_b } from './rows_b'
import { row_b } from './row_b'
import type { Row } from './Row'
import type { table_Ctx } from './table_Ctx'
const key = 'set_row'
export function set_row_b<Val extends unknown = unknown>(
	ctx:table_Ctx<Val>
) {
	return _b<table_Ctx<Val>, typeof key>(key, ()=>{
		if (has_dom) {
			subscribe(row_id_b(ctx), set_row)
			subscribe(table_b<Val>(ctx), set_row)
			set_row()
		}
		return set_row
		function set_row() {
			const rows = rows_b<Val>(ctx).$
			const row_id = row_id_b(ctx).$
			if (!rows || !row_id) return
			let row:Row<Val>|undefined = undefined
			for (let i = 0; i < rows.length; i++) {
				const i_row = rows[i]
				if (i_row.row_id === row_id) {
					row = i_row
					break
				}
			}
			row_b(ctx).set(row)
		}
	})(ctx)
}
export {
	set_row_b as b__set__row
}
