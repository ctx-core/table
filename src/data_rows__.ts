import { computed_, ReadableAtom_ } from '@ctx-core/nanostores'
import { be_, Ctx } from '@ctx-core/object'
import { column_offsets__ } from './column_offsets__.js'
import { columns__ } from './columns__.js'
import { data_rows_ } from './data_rows_.js'
import { rows__ } from './rows__.js'
export function data_rows__<Val extends unknown = unknown>(ctx:Ctx) {
	return _data_rows__(ctx) as data_rows__T<Val>
}
const _data_rows__ = be_<data_rows__T>('data_rows__', ctx=>
	computed_([
			rows__(ctx),
			columns__(ctx),
			column_offsets__(ctx),
		],
		(rows, columns, column_offsets)=>
			data_rows_(rows, columns, column_offsets)
	)
)
export type data_rows__T<Val extends unknown = unknown> = ReadableAtom_<Val[][]|undefined>
export { data_rows__ as data_rows$_ }
