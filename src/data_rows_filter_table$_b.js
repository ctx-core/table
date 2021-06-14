import { be_ } from '@ctx-core/object';
import { _maybe_key_hash } from '@ctx-core/array';
import { derived$ } from '@ctx-core/store';
import { data_rows_filter$_b } from './data_rows_filter$_b';
const key = 'data_rows_filter_table$';
const row_id_key = 'row_id';
export function data_rows_filter_table$_b(ctx) {
    return be_(key, () => derived$(data_rows_filter$_b(ctx), (data_rows_filter) => data_rows_filter
        ? _maybe_key_hash(data_rows_filter, row_id_key)
        : null))(ctx);
}
export { data_rows_filter_table$_b as b__table__filter__rows__data };
//# sourceMappingURL=src/data_rows_filter_table$_b.js.map