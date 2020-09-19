import { reduce } from '@ctx-core/array'
export function _column_offsets(columns:string[]) {
	return reduce<string, Record<string, number>>(
		columns, (memo, column, i
		)=>{
			memo[column] = i
			return memo
		}, {})
}
export const _offsets__column = _column_offsets
