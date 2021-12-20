import { atom$, WritableAtom$ } from '@ctx-core/nanostores'
import { be_, Ctx } from '@ctx-core/object'
const key = 'table_data_highlight_rows$'
export function table_data_highlight_rows$_b<Val extends unknown = unknown>(ctx:Ctx) {
	return be_<table_data_highlight_rows$_T>(key, ()=>
		atom$(undefined) as table_data_highlight_rows$_T<Val>
	)(ctx)
}
export type table_data_highlight_rows_T<Val extends unknown = unknown> = Record<string, Val[]>
export type table_data_highlight_rows$_T<Val extends unknown = unknown> =
	WritableAtom$<table_data_highlight_rows_T<Val>|undefined>
export {
	table_data_highlight_rows$_b as b__table__highlight__rows__data
}
