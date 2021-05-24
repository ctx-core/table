import { _b } from '@ctx-core/object';
import { has_dom } from '@ctx-core/dom';
import { subscribe } from '@ctx-core/store';
import { row_id_b } from './row_id_b';
import { table_b } from './table_b';
import { rows_b } from './rows_b';
import { row_b } from './row_b';
const key = 'set_row';
export function set_row_b(ctx) {
    return _b(key, () => {
        if (has_dom) {
            subscribe(row_id_b(ctx), set_row);
            subscribe(table_b(ctx), set_row);
            set_row();
        }
        return set_row;
        function set_row() {
            const rows = rows_b(ctx).$;
            const row_id = row_id_b(ctx).$;
            if (!rows || !row_id)
                return;
            let row = undefined;
            for (let i = 0; i < rows.length; i++) {
                const i_row = rows[i];
                if (i_row.row_id === row_id) {
                    row = i_row;
                    break;
                }
            }
            row_b(ctx).set(row);
        }
    })(ctx);
}
export { set_row_b as b__set__row };
