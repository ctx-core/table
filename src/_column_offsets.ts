import { reduce } from '@ctx-core/array'
import type { column_offsets_T } from './column_offsets_T'
export function _column_offsets(columns:string[]):Record<string, number> {
	return reduce<string, column_offsets_T>(
		columns, (memo, column, i
		)=>{
			memo[column] = i
			return memo
		}, {})
}
export {
	_column_offsets as _offsets__column
}
