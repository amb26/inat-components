"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFavourites = void 0;
const tslib_1 = require("tslib");
const C = require("../../constants");
const getFavourites = ({ year, taxonId, placeId, perPage }) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    let url = `${C.BASE_API_URL}/v1/observations?verifiable=true&order_by=votes&order=desc&page=1&spam=false&place_id=${placeId}&taxon_id=${taxonId}&locale=en-US&per_page=${perPage}`;
    if (year !== "all") {
        url += `&d1=${year}-01-01&d2=${year}-12-31`;
    }
    const response = yield fetch(url, {
    // method: 'GET',
    // headers: {
    //     Accept: 'application/json'
    // }
    });
    const resp = yield response.json();
    const sortedTaxa = resp.results.filter((i) => i.faves.length > 0).sort((a, b) => {
        if (a.faves.length > b.faves.length) {
            return -1;
        }
        else if (a.faves.length < b.faves.length) {
            return 1;
        }
        return 0;
    });
    return {
        totalResults: resp.total_results,
        results: sortedTaxa.map((row) => {
            var _a, _b;
            return ({
                id: row.id,
                imageUrl: ((_b = (_a = row.taxon) === null || _a === void 0 ? void 0 : _a.default_photo) === null || _b === void 0 ? void 0 : _b.square_url) || "",
                obsDate: row.observed_on_string,
                obsUrl: row.uri,
                taxonName: row.taxon.name || "",
                taxonCommonName: row.taxon.preferred_common_name,
                numFaves: row.faves.length
            });
        })
    };
});
exports.getFavourites = getFavourites;
//# sourceMappingURL=favourites.js.map