import { computed$ } from '@ctx-core/nanostores'
import { B, be_ } from '@ctx-core/object'
import { columns$_, columns$_T } from './columns$_.js'
const key = 'reverse_columns$'
export const reverse_columns$_:B<reverse_columns$_T> = be_(key, ctx=>
	computed$(
		columns$_(ctx),
		columns=>
			columns
			&& columns.slice(0).reverse()
	)
)
export type reverse_columns$_T = columns$_T
