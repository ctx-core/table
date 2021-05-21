import { Writable$ } from '@ctx-core/store';
export interface table_Ctx<Val extends unknown = unknown> {
    table?: table_T<Val>;
}
export declare function table_b<Val extends unknown = unknown>(ctx: table_Ctx<Val>): table_T<Val>;
export declare type $table_T<Val extends unknown = unknown> = [string[]?, ...Val[][]];
export interface table_T<Val extends unknown = unknown> extends Writable$<$table_T<Val>> {
}
export { table_b as b__table };
