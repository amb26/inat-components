import React from "react";
import styles from "./settings-row.module.scss";
import {DataSource} from "@imerss/inat-components";

export type SettingsProp = {
    taxonId: number;
    placeId: number;
    dataSource: DataSource;
    itemWidth: number;
    onChangeTaxon: (taxonId: number) => void;
    onChangePlace: (placeId: number) => void;
    onChangeDataSource: (source: DataSource) => void;
    onChangeItemWidth: (itemWidth: number) => void;
    config: any; // TODO
};

const SettingsRow = ({ config, taxonId, onChangeTaxon, placeId, onChangePlace, dataSource, onChangeDataSource, itemWidth, onChangeItemWidth }: SettingsProp) => {
    return (
        <section className={styles.row}>
            <div>
                <h4>Data Source</h4>
                <select defaultValue={dataSource} onChange={(e) => onChangeDataSource(e.target.value as DataSource)}>
                    <option value={DataSource.autoLoad}>Auto-load</option>
                    <option value={DataSource.url}>Static JSON files</option>
                </select>
            </div>
            <div>
                <h4>Taxon</h4>
                <select defaultValue={taxonId} onChange={(e) => onChangeTaxon(parseInt(e.target.value, 10))}>
                    {config.taxa.map(({ taxonId, label }: any) => <option key={taxonId} value={taxonId}>{label}</option>)}
                </select>
            </div>
            <div>
                <h4>Place</h4>
                <select defaultValue={placeId} onChange={(e) => onChangePlace(parseInt(e.target.value, 10))}>
                    {config.places.map(({ placeId, label }: any) => <option key={placeId} value={placeId}>{label}</option>)}
                </select>
            </div>
            <div>
                <h4>Item Width</h4>
                <input type="range" min={50} max={400} step={10} style={{ width: 60 }} value={itemWidth} onChange={(e) => onChangeItemWidth(parseInt(e.target.value))}/>
            </div>
        </section>
    )
};

export default SettingsRow;
