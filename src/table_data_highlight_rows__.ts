import { atom_, WritableAtom_ } from '@ctx-core/nanostores'
import { be_, Ctx } from '@ctx-core/object'
export function table_data_highlight_rows__<Val extends unknown = unknown>(ctx:Ctx) {
	return _table_data_highlight_rows__(ctx) as table_data_highlight_rows__T<Val>
}
const _table_data_highlight_rows__ = be_<table_data_highlight_rows__T>('table_data_highlight_rows__', ()=>
	atom_(undefined)
)
export type table_data_highlight_rows_T<Val extends unknown = unknown> = Record<string, Val[]>
export type table_data_highlight_rows__T<Val extends unknown = unknown> =
	WritableAtom_<table_data_highlight_rows_T<Val>|undefined>
export { table_data_highlight_rows__ as table_data_highlight_rows$_ }
