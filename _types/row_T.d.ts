export type row_T<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object
> =
	ColDefs extends [string, unknown][]
		? { [K in keyof ColDefs]:unknown }
		: ColDefs extends unknown[]
			? ColDefs
			: ColDefs extends object
				? unknown[]
				: string[]
