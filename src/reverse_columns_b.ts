import { _b } from '@ctx-core/object'
import { derived$ } from '@ctx-core/store'
import { columns_b, columns_Ctx, columns_T } from './columns_b'
const key = 'reverse_columns'
export interface reverse_columns_Ctx
	extends columns_Ctx {
	reverse_columns?:columns_T
}
export const reverse_columns_b = _b<reverse_columns_Ctx, typeof key>(key, ctx=>
	derived$(
		columns_b(ctx),
		columns=>
			columns
			&& columns.slice(0).reverse()
	)
)
export {
	reverse_columns_b as b__reverse__columns
}
