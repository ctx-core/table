import { reduce } from '@ctx-core/array'
import type { column_offsets_type } from './column_offsets_type'
export function _column_offsets(columns:string[]) {
	return reduce<string, column_offsets_type>(
		columns, (memo, column, i
		)=>{
			memo[column] = i
			return memo
		}, {})
}
export const _offsets__column = _column_offsets
