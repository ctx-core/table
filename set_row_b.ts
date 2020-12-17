import { _b } from '@ctx-core/object'
import { has__dom } from '@ctx-core/dom'
import { get, subscribe } from '@ctx-core/store'
import { row_id_b } from './row_id_b'
import { table_b } from './table_b'
import { rows_b } from './rows_b'
import { row_b } from './row_b'
import type { row_type } from './row_type'
export function set_row_b<I extends row_type>(ctx) {
	return _b('set_row', ctx=>{
		if (has__dom) {
			subscribe(row_id_b(ctx), set_row)
			subscribe(table_b<I>(ctx), set_row)
			set_row()
		}
		return set_row
		function set_row() {
			const rows = get(rows_b<I>(ctx))
			const row_id = get(row_id_b(ctx))
			if (!rows || !row_id) return
			let row
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
