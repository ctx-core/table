import type { dehydrated_json_val_T } from './dehydrated_json_val_T'
import type { dehydrated_val__T } from './dehydrated_val__T'
export type dehydrated_json_val__T<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object,
	D = dehydrated_json_val_T
> = dehydrated_val__T<ColDefs, D>
