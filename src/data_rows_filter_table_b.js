import { _b } from '@ctx-core/object';
import { _maybe_key_hash } from '@ctx-core/array';
import { derived$ } from '@ctx-core/store';
import { data_rows_filter_b } from './data_rows_filter_b';
const key = 'rows_data_filter_table';
export function rows_data_filter_table_b(ctx) {
    return _b(key, () => derived$(data_rows_filter_b(ctx), ($data_rows_filter) => $data_rows_filter
        && $data_rows_filter.map((row) => {
            return _maybe_key_hash(row, 'row_id');
        })))(ctx);
}
export { rows_data_filter_table_b as b__table__filter__rows__data };
