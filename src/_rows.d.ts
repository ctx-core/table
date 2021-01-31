import type { $table_type } from './table_b';
import type { column_offsets_type } from './column_offsets_type';
export declare function _rows<I extends unknown, O = unknown>(table: $table_type<I>, column_offsets: column_offsets_type): O[] | undefined;
