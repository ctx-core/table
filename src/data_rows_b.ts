import { _b } from '@ctx-core/object'
import type { falsy } from '@ctx-core/function'
import { Readable$, derived$ } from '@ctx-core/store'
import { _data_rows } from './_data_rows'
import { rows_b } from './rows_b'
import { columns_b } from './columns_b'
import { column_offsets_b } from './column_offsets_b'
import type { row_type } from './row_type'
export function data_rows_b<I extends row_type, C extends object = object>(ctx:C) {
	return _b('data_rows', ctx=>
		derived$([
				rows_b<I>(ctx),
				columns_b(ctx),
				column_offsets_b(ctx),
			],
			([$rows, $columns, $column_offsets])=>
				_data_rows($rows, $columns, $column_offsets)
		) as data_rows_type<I>
	)(ctx)
}
export type $data_rows_type<Row extends row_type> = Row[][]
export type $maybe_data_rows_type<Row extends row_type> = $data_rows_type<Row>|falsy
export interface data_rows_type<Row extends row_type> extends Readable$<$maybe_data_rows_type<Row>> {}
export { data_rows_b as b__rows__data }
