export type ConfigFile = {
	taxa: TaxaConfig[];
	places: PlaceConfig[];
	features: {
		[Feature.commonTaxa]?: {
			numResults?: number;
		};
		[Feature.favourites]?: {
			numResults?: number;
			numYears?: number;
		};
		[Feature.recentObservations]?: {
			numResults?: number;
			numYears?: number;
		};
		[Feature.stats]?: {
			numTopObservers?: number;
		};
	}
}

export enum DataSource {
	autoLoad = "autoLoad",
	dataProp = "dataProp",
	url = "url"
}

export enum Feature {
	commonTaxa = "commonTaxa",
	favourites = "favourites",
	recentObservations = "recentObservations",
	stats = "stats"
}

// I know this is duplicated, but it's very possible they could be different in future
export enum Tab {
	recent = "recent",
	commonTaxa = "commonTaxa",
	favourites = "favourites",
	stats = "stats"
}

// TODO investigate conditional types here & drop the optionals. It's pretty darn vague.
export type BaseComponentProps = {
	taxonId?: number;
	placeId?: number;
	filename?: string;
	perPage?: number;
	source?: DataSource;
	data?: any;
	dataUrl?: string;
	className?: string;
	components?: {
		label?: any;
		error?: any;
		loader?: any;
	};
};

export type TaxaConfig = {
	label: string;
	short: string;
	taxonId: number;
}

export type PlaceConfig = {
	label: string;
	short: string;
	placeId: number;
}