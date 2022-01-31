import { reduce } from '@ctx-core/array'
import type { column_offsets_T } from './column_offsets_T.js'
export function column_offsets_(columns:string[]):column_offsets_T {
	return reduce<string, column_offsets_T>(
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
