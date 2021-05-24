import { _b } from '@ctx-core/object';
import { has_dom } from '@ctx-core/dom';
import { _clear_store, subscribe, writable } from '@ctx-core/store';
import { table_b } from './table_b';
const key = 'rows_data_filter_inputs';
export function rows_data_filter_inputs_b(ctx) {
    return _b(key, () => {
        const rows_data_filter_inputs = writable(null);
        if (has_dom) {
            subscribe(table_b(ctx), _clear_store(rows_data_filter_inputs, null));
        }
        return rows_data_filter_inputs;
    })(ctx);
}
export { rows_data_filter_inputs_b as b__inputs__filter__rows__data };
