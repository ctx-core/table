import { be_, Ctx } from '@ctx-core/object'
import { Readable$, derived$ } from '@ctx-core/store'
import { columns$_b } from './columns$_b.js'
import { column_offsets$_b } from './column_offsets$_b.js'
import { data_rows_ } from './data_rows_.js'
import { rows$_b } from './rows$_b.js'
const key = 'data_rows$'
export function data_rows$_b<Val extends unknown = unknown>(ctx:Ctx) {
	return be_<data_rows$_T>(key, ()=>
		derived$([
				rows$_b<Val>(ctx),
				columns$_b<Val>(ctx),
				column_offsets$_b<Val>(ctx),
			],
			([rows, columns, column_offsets])=>
				data_rows_(rows, columns, column_offsets)
		) as data_rows$_T<Val>
	)(ctx)
}
export type data_rows$_T<Val extends unknown = unknown> = Readable$<Val[][]|undefined>
export { data_rows$_b as b__rows__data }
