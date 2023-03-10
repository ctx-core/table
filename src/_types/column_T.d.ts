export type column_T<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
> =
	ColDefs extends (([string, any][])|any[]|object)
	? string|number
	: ColDefs extends [string, any][]
		? string
		: ColDefs extends any[]
			? number
			: ColDefs extends object
				? string
				: never
