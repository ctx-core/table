import { Writable$ } from '@ctx-core/store';
export interface table_ctx_I<Val extends unknown = unknown> {
    table?: table_T<Val>;
}
export declare function table_b<Val extends unknown = unknown>(ctx: table_ctx_I<Val>): table_T<Val>;
export declare type $table_T<Val extends unknown = unknown> = [string[]?, ...Val[][]];
export interface table_T<Val extends unknown = unknown> extends Writable$<$table_T<Val>> {
}
export { table_b as b__table };
