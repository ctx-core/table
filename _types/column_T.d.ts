export type column_T<
	ColDefs extends (([string, unknown][])|unknown[]|object) = ([string, unknown][])|unknown[]|object
> =
	ColDefs extends (([string, unknown][])|unknown[]|object)
		? string|number
		: ColDefs extends [string, unknown][]
			? string
			: ColDefs extends unknown[]
				? number
				: ColDefs extends object
					? string
					: never
