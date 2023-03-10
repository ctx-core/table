import type { ReadableAtom_ } from '@ctx-core/nanostores'
import type { Ctx } from '@ctx-core/object'
import type { data_row_T } from '../_types'
export declare function data_row_a__<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(ctx:Ctx):ReadableAtom_<data_row_T<ColDefs>[]>
export {
	data_row_a__ as row_a__,
	data_row_a__ as rows__,
	data_row_a__ as rows$_,
}
export declare function data_row_a_<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(ctx:Ctx):data_row_T<ColDefs>[]
export {
	data_row_a_ as row_a_,
}
export declare function data_row_a__set<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
>(ctx:Ctx, row:data_row_T<ColDefs>[]):void
export {
	data_row_a__set as row_a__set,
}
