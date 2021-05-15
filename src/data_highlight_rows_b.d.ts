import { Writable$ } from '@ctx-core/store';
export declare function data_highlight_rows_b<Val extends unknown = unknown>(ctx: {
    data_highlight_rows?: data_highlight_rows_type<Val>;
}): data_highlight_rows_type<Val>;
export declare type $data_highlight_rows_type<Val extends unknown = unknown> = Val[][];
export declare type $data_highlight_rows_maybe_type<Val extends unknown = unknown> = $data_highlight_rows_type<Val> | null;
export interface data_highlight_rows_type<Val extends unknown = unknown> extends Writable$<$data_highlight_rows_maybe_type<Val>> {
}
export { data_highlight_rows_b as b__highlight__rows__data };
