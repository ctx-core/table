import type { table_T, dehydrated_table_T } from '../_types'
export declare function table__hydrate<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(unhydrated_table:dehydrated_table_T<ColDefs>):table_T<ColDefs>
