export type row_T<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
> =
	ColDefs extends [string, any][]
		? { [K in keyof ColDefs]:any }
		: ColDefs extends any[]
			? ColDefs
			: ColDefs extends object
				? any[]
				: string[]
