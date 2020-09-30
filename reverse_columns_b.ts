import { _b } from '@ctx-core/object'
import { derived } from '@ctx-core/store'
import { columns_b } from './columns_b'
export const reverse_columns_b = _b('__reverse__columns', ctx=>
	derived(
		columns_b(ctx),
		columns=>
			columns
			&& columns.slice(0).reverse()))
export const b__reverse__columns = reverse_columns_b
