export function _row_proxy<I extends unknown, O = unknown>(
	data_row:I[],
	column_offsets:Record<string, number>
) {
	return (new Proxy(data_row, {
		get
	}) as O)
	function get(target, name) {
		if (column_offsets[name] != null) {
			return data_row[column_offsets[name]]
		} else {
			return target[name]
		}
	}
}
export const _proxy__row = _row_proxy
