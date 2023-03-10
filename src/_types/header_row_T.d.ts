export type header_row_T<
	ColDefs extends (([string, any][])|any[]|object) = ([string, any][])|any[]|object
> =
	ColDefs extends (([string, any][])|any[]|object)
	? { [K in keyof ColDefs]:K }
	: ColDefs extends [string, any][]
		? ColDefs extends object
			? { [K in keyof ColDefs]:K }
			: { [K in keyof ColDefs]:ColDefs[K][0] }
		: ColDefs extends any[]
			? { [K in keyof ColDefs]:K }
			: ColDefs extends object
				? { [K in keyof ColDefs]:K }
				: never
