import { reduce } from '@ctx-core/array';
export function _column_offsets(columns) {
    return reduce(columns, (memo, column, i) => {
        memo[column] = i;
        return memo;
    }, {});
}
export { _column_offsets as _offsets__column };
