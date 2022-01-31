import { atom$, WritableAtom$ } from '@ctx-core/nanostores'
import { be_, Ctx } from '@ctx-core/object'
const key = 'table_data_highlight_rows$'
export function table_data_highlight_rows$_<Val extends unknown = unknown>(ctx:Ctx) {
	return table_data_highlight_rows$_b(ctx) as table_data_highlight_rows$_T<Val>
}
const table_data_highlight_rows$_b = be_<table_data_highlight_rows$_T>(key, ()=>
	atom$(undefined)
)
export type table_data_highlight_rows_T<Val extends unknown = unknown> = Record<string, Val[]>
export type table_data_highlight_rows$_T<Val extends unknown = unknown> =
	WritableAtom$<table_data_highlight_rows_T<Val>|undefined>
