import { computed_ } from '@ctx-core/nanostores'
import { B, be_ } from '@ctx-core/object'
import { columns$_, columns$_T } from './columns$_.js'
export const reverse_columns$_:B<reverse_columns$_T> = be_('reverse_columns$', ctx=>
	computed_(
		columns$_(ctx),
		columns=>
			columns
			&& columns.slice(0).reverse()
	)
)
export type reverse_columns$_T = columns$_T
