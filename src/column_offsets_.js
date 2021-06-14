import { reduce } from '@ctx-core/array';
export function column_offsets_(columns) {
    return reduce(columns, (memo, column, i) => {
        memo[column] = i;
        return memo;
    }, {});
}
export { column_offsets_ as _column_offsets, column_offsets_ as _offsets__column, };
//# sourceMappingURL=src/column_offsets_.js.map