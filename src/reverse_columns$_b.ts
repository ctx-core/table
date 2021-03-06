import { B, be_ } from '@ctx-core/object'
import { derived$ } from '@ctx-core/store'
import { columns$_b, columns$_T } from './columns$_b.js'
import type { table_Ctx } from './table_Ctx'
const key = 'reverse_columns$'
export const reverse_columns$_b:B<table_Ctx, typeof key> = be_(key, ctx=>
	derived$(
		columns$_b(ctx),
		columns=>
			columns
			&& columns.slice(0).reverse()
	)
)
export type reverse_columns$_T = columns$_T
export {
	reverse_columns$_b as b__reverse__columns
}
