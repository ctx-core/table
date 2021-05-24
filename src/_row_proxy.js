export function _row_proxy(data_row, column_offsets) {
    return new Proxy(data_row, {
        get
    });
    function get(target, name) {
        const key = Reflect.get(column_offsets, name);
        if (key != null) {
            return data_row[key];
        }
        else {
            return target[name];
        }
    }
}
export { _row_proxy as _proxy__row };
