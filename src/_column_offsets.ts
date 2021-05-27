import { reduce } from '@ctx-core/array'
import type { column_offsets_I } from './column_offsets_I'
export function _column_offsets(columns:string[]):column_offsets_I {
	return reduce<string, column_offsets_I>(
		columns, (memo, column, i
		)=>{
			memo[column] = i
			return memo
		}, {})
}
export {
	_column_offsets as _offsets__column
}
