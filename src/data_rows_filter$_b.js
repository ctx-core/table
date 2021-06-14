import { be_ } from '@ctx-core/object';
import { tup } from '@ctx-core/array';
import { derived$ } from '@ctx-core/store';
import { data_rows_filter_inputs$_b } from './data_rows_filter_inputs$_b';
import { data_rows$_b } from './data_rows$_b';
const key = 'data_rows_filter';
export function data_rows_filter$_b(ctx) {
    return be_(key, (ctx) => derived$(tup(data_rows_filter_inputs$_b(ctx), data_rows$_b(ctx)), ([data_rows_filter_inputs_maybe, maybe_data_row_a]) => {
        if (!data_rows_filter_inputs_maybe || !maybe_data_row_a)
            return;
        const data_rows_filter_inputs = data_rows_filter_inputs_maybe;
        const data_row_a = maybe_data_row_a;
        const filter_rows = [];
        for (let i = 0; i < data_row_a.length; i++) {
            const row = data_row_a[i];
            let every;
            for (let j = data_rows_filter_inputs.length; j--;) {
                const data_rows_input = data_rows_filter_inputs[j];
                const { column } = data_rows_input;
                const value = row[column]
                    || 0;
                if (data_rows_input.value > value)
                    break;
                if (!j) {
                    every = true;
                }
            }
            if (every) {
                filter_rows.push(row);
            }
        }
        return filter_rows;
    }))(ctx);
}
export { data_rows_filter$_b as b__filter__rows__data };
//# sourceMappingURL=src/data_rows_filter$_b.js.map