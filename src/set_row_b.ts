import { _b } from '@ctx-core/object'
import { has_dom } from '@ctx-core/dom'
import { subscribe } from '@ctx-core/store'
import { row_id_b, row_id_ctx_I } from './row_id_b'
import { table_b, table_ctx_I } from './table_b'
import { rows_b } from './rows_b'
import { row_b, row_ctx_I } from './row_b'
import type { Row } from './Row'
const key = 'set_row'
export interface set_row_ctx_I<Val extends unknown = unknown>
	extends row_ctx_I<Val>, row_id_ctx_I, table_ctx_I<Val> {
	set_row?:()=>void
}
export function set_row_b<Val extends unknown = unknown>(
	ctx:set_row_ctx_I<Val>
) {
	return _b<set_row_ctx_I<Val>, typeof key>(key, ()=>{
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
