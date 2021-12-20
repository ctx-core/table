import { computed$ } from '@ctx-core/nanostores'
import { B, be_ } from '@ctx-core/object'
import { columns$_b, columns$_T } from './columns$_b.js'
const key = 'reverse_columns$'
export const reverse_columns$_b:B<reverse_columns$_T> = be_(key, ctx=>
	computed$(
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
