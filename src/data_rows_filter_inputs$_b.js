import { be_ } from '@ctx-core/object';
import { has_dom } from '@ctx-core/dom';
import { _clear_store, subscribe, writable } from '@ctx-core/store';
import { table$_b } from './table$_b';
const key = 'data_rows_filter_inputs$';
export function data_rows_filter_inputs$_b(ctx) {
    return be_(key, () => {
        const data_rows_filter_inputs = writable(undefined);
        if (has_dom) {
            subscribe(table$_b(ctx), _clear_store(data_rows_filter_inputs, undefined));
        }
        return data_rows_filter_inputs;
    })(ctx);
}
export { data_rows_filter_inputs$_b as b__inputs__filter__rows__data };
//# sourceMappingURL=src/data_rows_filter_inputs$_b.js.map