import { be_ } from '@ctx-core/object';
import { column_offsets$_b } from './column_offsets$_b';
import { columns$_b } from './columns$_b';
import { data_rows_filter_inputs$_b } from './data_rows_filter_inputs$_b';
import { data_rows_filter_table$_b } from './data_rows_filter_table$_b';
import { reverse_columns$_b } from './reverse_columns$_b';
import { row_id$_b } from './row_id$_b';
import { set_row_b } from './set_row_b';
import { table_domain$_b } from './table_domain$_b';
import { ticks_domain$_b } from './ticks_domain$_b';
import { data_highlight_rows$_b } from './data_highlight_rows$_b';
import { data_rows$_b } from './data_rows$_b';
import { rank_table$_b } from './rank_table$_b';
import { table$_b } from './table$_b';
import { row$_b } from './row$_b';
import { rows$_b } from './rows$_b';
import { table_data_highlight_rows$_b } from './table_data_highlight_rows$_b';
export function table_b_h_b(ctx) {
    return be_('table_b_h', () => {
        return {
            get column_offsets$() { return column_offsets$_b(ctx); },
            get columns$() { return columns$_b(ctx); },
            get data_highlight_rows$() { return data_highlight_rows$_b(ctx); },
            get data_rows$() { return data_rows$_b(ctx); },
            get data_rows_filter_inputs$() { return data_rows_filter_inputs$_b(ctx); },
            get data_rows_filter_table$() { return data_rows_filter_table$_b(ctx); },
            get rank_table$() { return rank_table$_b(ctx); },
            get reverse_columns$() { return reverse_columns$_b(ctx); },
            get row$() { return row$_b(ctx); },
            get row_id$() { return row_id$_b(ctx); },
            get rows$() { return rows$_b(ctx); },
            get set_row() { return set_row_b(ctx); },
            get table$() { return table$_b(ctx); },
            get table_data_highlight_rows$() { return table_data_highlight_rows$_b(ctx); },
            get table_domain$() { return table_domain$_b(ctx); },
            get ticks_domain$() { return ticks_domain$_b(ctx); },
        };
    })(ctx);
}
//# sourceMappingURL=src/table_Ctx.js.map