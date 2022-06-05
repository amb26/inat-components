import React, {useState} from 'react';
import {
    DataSource,
    RecentObservations,
    RecentObservationsProps
} from '../components/recentObservations/RecentObservations';
import {CommonTaxa} from '../components/commonTaxa/Taxa';
import {Favourites} from "../components/favourites/Favourites"
import styles from '../css/general.module.scss';
import Years from "../components/yearDropdown/Years";
import Settings from "./settingsRow/Settings";
import * as C from "../constants";
import {Tab} from "../general";
import Tabs from "../components/tabs/Tabs";
import {Summary} from "../components/summary/Summary";
import {getDemoFile} from "./demo.config";

function App() {
    const [tab, setTab] = useState(Tab.recent);
    const [year, setYear] = useState("all");
    const [taxonId, setTaxonId] = useState(C.DEFAULT_TAXON_ID);
    const [placeId, setPlaceId] = useState(C.DEFAULT_PLACE_ID);
    const [dataSource, setDataSource] = useState(DataSource.autoLoad); // TODO change default

    const getTitle = () => {
        const map = {
            [Tab.recent]: "Recent observations",
            [Tab.mostCommon]: "Most common",
            [Tab.favourites]: "Most favourited",
            [Tab.stats]: "General stats",
        };
        return map[tab];
    }

    const getCurrentTab = () => {
        switch (tab) {
            case Tab.recent: {
                const props: Partial<RecentObservationsProps> = {
                    source: dataSource
                };
                if (dataSource === DataSource.url) {
                    props.dataUrl = getDemoFile();
                }

                return (
                    <RecentObservations {...props} />
                );
            }
        }

        // {tab === Tab.mostCommon && <CommonTaxa year={year} taxonId={taxonId} placeId={placeId} />}
        // {tab === Tab.favourites && <Favourites year={year} taxonId={taxonId} placeId={placeId} />}
        // {tab === Tab.stats && <Summary taxonId={taxonId} placeId={placeId} />}
    };

    // {tab === Tab.recent && <RecentObservations taxonId={taxonId} placeId={placeId} />}

    return (
        <>
            <Settings
                taxonId={taxonId}
                onChangeTaxon={setTaxonId}
                placeId={placeId}
                onChangePlace={setPlaceId}
                dataSource={dataSource}
                onChangeDataSource={setDataSource}
            />

            <div className={styles.page}>
                <Tabs selectedTab={tab} onChangeTab={setTab} />
                <div>
                    {tab !== Tab.recent && (
                        <div style={{ float: "right" }}>
                            <Years value={year} onChange={setYear} />
                        </div>
                    )}
                    <h1>{getTitle()}</h1>
                </div>
                {getCurrentTab()}
            </div>
        </>
    );
}

export default App;
