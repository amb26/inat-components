import {useState} from "react";
import TaxonPanel, {DataSource} from "@imerss/inat-components";
import SettingsRow from "./settings-row/settings-row";
import config from "../inat.config.json";
import "./app.module.scss";

const App = () => {
	const [taxonId, setTaxonId] = useState(config.taxa[0].taxonId);
	const [placeId, setPlaceId] = useState(config.places[0].placeId);
	const [dataSource, setDataSource] = useState(DataSource.autoLoad);
	const [itemWidth, setItemWidth] = useState(150);

	return (
		<>
			<SettingsRow
				taxonId={taxonId}
				onChangeTaxon={setTaxonId}
				placeId={placeId}
				onChangePlace={setPlaceId}
				dataSource={dataSource}
				onChangeDataSource={setDataSource}
				itemWidth={itemWidth}
				onChangeItemWidth={setItemWidth}
				config={config}
			/>
			<TaxonPanel
				taxonId={taxonId}
				placeId={placeId}
				dataSource={dataSource}
				config={config}
				itemWidth={itemWidth}
				baseUrl="http://sisyphean.ca/inat"
				classes={{
					pageHeadings: ''
				}}
			/>
		</>
	);
}

export default App;
