import { _b } from '@ctx-core/object';
import { derived$ } from '@ctx-core/store';
import { rows_data_filter_inputs_b, } from './rows_data_filter_inputs_b';
import { data_rows_b } from './data_rows_b';
const key = 'data_rows_filter';
export function data_rows_filter_b(ctx) {
    return _b(key, (ctx) => derived$([
        rows_data_filter_inputs_b(ctx),
        data_rows_b(ctx)
    ], ([data_rows_filter_inputs_maybe, maybe_data_row_a1]) => {
        if (!data_rows_filter_inputs_maybe || !maybe_data_row_a1)
            return;
        const data_rows_filter_inputs = data_rows_filter_inputs_maybe;
        const data_row_a1 = maybe_data_row_a1;
        const filter_rows = [];
        for (let i = 0; i < data_row_a1.length; i++) {
            const row = data_row_a1[i];
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
export { data_rows_filter_b as b__filter__rows__data };
