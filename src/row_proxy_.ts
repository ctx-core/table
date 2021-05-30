export function row_proxy_<I extends unknown = unknown, O extends unknown = unknown>(
	data_row:I[],
	column_offsets:Record<string, number>
) {
	return (new Proxy(data_row, {
		get
	}) as O)
	function get(target:any, name:string|symbol) {
		const key = Reflect.get(column_offsets, name)
		if (key != null) {
			return data_row[key]
		} else {
			return target[name]
		}
	}
}
export {
	row_proxy_ as _row_proxy,
	row_proxy_ as _proxy__row,
}
