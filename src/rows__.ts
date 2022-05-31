import { computed_, ReadableAtom_ } from '@ctx-core/nanostores'
import { be_, Ctx } from '@ctx-core/object'
import { column_offsets__ } from './column_offsets__.js'
import type { column_offsets_T } from './column_offsets_T.js'
import type { Row } from './Row.js'
import { rows_ } from './rows_.js'
import { table__ } from './table__.js'
export function rows__<Val extends unknown = unknown>(ctx:Ctx):rows__T<Val> {
	return _rows__(ctx) as rows__T<Val>
}
const _rows__ = be_<rows__T>('rows__', ctx=>
	computed_([
		table__(ctx),
		column_offsets__(ctx)
	], (table, column_offsets)=>{
		return rows_(table, column_offsets as column_offsets_T)
	}) as rows__T
)
export type rows__T<Val extends unknown = unknown> = ReadableAtom_<Row<Val>[]>
export { rows__ as rows$_ }
