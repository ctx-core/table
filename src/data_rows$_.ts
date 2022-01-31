import { ReadableAtom$, computed$ } from '@ctx-core/nanostores'
import { be_, Ctx } from '@ctx-core/object'
import { columns$_ } from './columns$_.js'
import { column_offsets$_ } from './column_offsets$_.js'
import { data_rows_ } from './data_rows_.js'
import { rows$_ } from './rows$_.js'
const key = 'data_rows$'
export function data_rows$_<Val extends unknown = unknown>(ctx:Ctx) {
	return data_rows$_b(ctx) as data_rows$_T<Val>
}
const data_rows$_b = be_<data_rows$_T>(key, ctx=>
	computed$([
			rows$_(ctx),
			columns$_(ctx),
			column_offsets$_(ctx),
		],
		(rows, columns, column_offsets)=>
			data_rows_(rows, columns, column_offsets)
	)
)
export type data_rows$_T<Val extends unknown = unknown> = ReadableAtom$<Val[][]|undefined>
