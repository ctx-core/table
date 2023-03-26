import { table_T, unhydrated_table_T } from '../_types'
export declare function table__hydrate<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(unhydrated_table:unhydrated_table_T<ColDefs>):table_T<ColDefs>
