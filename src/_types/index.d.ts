export type column_offsets_T = Record<string, number>
export type Row<Val extends unknown = unknown> = Val[]&{
	row_id:string
}
