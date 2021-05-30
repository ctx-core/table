import { reduce } from '@ctx-core/array'
import type { column_offsets_I } from './column_offsets_I'
export function column_offsets_(columns:string[]):column_offsets_I {
	return reduce<string, column_offsets_I>(
		columns, (memo, column, i
		)=>{
			memo[column] = i
			return memo
		}, {})
}
export {
	column_offsets_ as _column_offsets,
	column_offsets_ as _offsets__column,
}
