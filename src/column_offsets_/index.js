import { reduce } from '@ctx-core/array'
/**
 * @param columns{string[]}
 * @returns {import('../_types').column_offsets_T}
 */
export function column_offsets_(columns) {
	return reduce(columns, (memo, column, i)=>{
		memo[column] = i
		return memo
	}, {})
}
export {
	column_offsets_ as _column_offsets,
	column_offsets_ as _offsets__column,
}
