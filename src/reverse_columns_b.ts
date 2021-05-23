import { _b } from '@ctx-core/object'
import { derived$ } from '@ctx-core/store'
import { columns_b } from './columns_b'
import type { table_Ctx } from './table_Ctx'
const key = 'reverse_columns'
export const reverse_columns_b = _b<table_Ctx, typeof key>(key, ctx=>
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
