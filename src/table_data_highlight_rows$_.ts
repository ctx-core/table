import { atom$, WritableAtom$ } from '@ctx-core/nanostores'
import { be_, Ctx } from '@ctx-core/object'
export function table_data_highlight_rows$_<Val extends unknown = unknown>(ctx:Ctx) {
	return _table_data_highlight_rows$_(ctx) as table_data_highlight_rows$_T<Val>
}
const _table_data_highlight_rows$_ = be_<table_data_highlight_rows$_T>('table_data_highlight_rows$', ()=>
	atom$(undefined)
)
export type table_data_highlight_rows_T<Val extends unknown = unknown> = Record<string, Val[]>
export type table_data_highlight_rows$_T<Val extends unknown = unknown> =
	WritableAtom$<table_data_highlight_rows_T<Val>|undefined>
