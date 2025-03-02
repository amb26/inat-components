import {Feature, PlaceConfig, TaxaConfig} from "../typings";

/*
 * Note that right now the source filenames aren't configurable.
 */
export const getSourceFile = (api: Feature, taxonInfo?: TaxaConfig, placeInfo?: PlaceConfig, year?: string | number): string => {
	if (!taxonInfo || !placeInfo) {
		return '';
	}

	const yearStr = year === "all" ? "allyears" : year;

	let filename = "";
	if (api === Feature.recentObservations) {
		filename = `${taxonInfo.short}-${placeInfo.short}-recent.json`;
	} else if (api === Feature.commonTaxa) {
		filename = `${taxonInfo.short}-${placeInfo.short}-${yearStr}-commonTaxa.json`;
	} else if (api === Feature.favourites) {
		filename = `${taxonInfo.short}-${placeInfo.short}-${yearStr}-favourites.json`;
	} else if (api === Feature.stats) {
		filename = `${taxonInfo.short}-${placeInfo.short}-${yearStr}-stats.json`;
	}

	return filename;
};
