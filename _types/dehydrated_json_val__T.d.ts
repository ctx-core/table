import type { dehydrated_json_val_T } from './dehydrated_json_val_T.js'
import type { val__dehydrate_T } from './val__dehydrate_T.js'
export type dehydrated_json_val__T<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object,
	D = dehydrated_json_val_T
> = val__dehydrate_T<ColDefs, D>
