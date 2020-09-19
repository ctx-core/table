export function _row_proxy<I, O = unknown>(
	data_row:I[],
	offsets__column:Record<string, number>
) {
	return (new Proxy(data_row, {
		get
	}) as O)
	function get(target, name) {
		if (offsets__column[name] != null) {
			return data_row[offsets__column[name]]
		} else {
			return target[name]
		}
	}
}
export const _proxy__row = _row_proxy
