import type { dehydrated_json_val_T } from './dehydrated_json_val_T.js'
import type { val__dehydrate_T } from './val__dehydrate_T.js'
export type dehydrated_json_val__T<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object,
	D = dehydrated_json_val_T
> = val__dehydrate_T<ColDefs, D>
