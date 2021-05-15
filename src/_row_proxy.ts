export function _row_proxy<I extends unknown = unknown, O extends unknown = unknown>(
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
	_row_proxy as _proxy__row
}
