import App from "../../Types/App";
import NewApplicationModal from "../NewAppModal";
import CardLayout from "./CardLayout";
import FloatingAddButton from "./FloatingAddButton";
import TitleHeader from "./TitleHeader";
import { getSiteUserById, getAppsById } from "../../utils/database";
import SiteUser from "../../Types/SiteUser";
import React, { useEffect } from "react";


const handleAdd = (apps: any) => {
    //TODO: THE STUFF
};
function MyAppPage() {
    const [siteUser, setSiteUser] = React.useState<SiteUser | null>(null);
    const [appList, setAppList] = React.useState<App[] | null>(null);
    const [loaded, setLoaded] = React.useState(false);

    useEffect(() => {
        getSiteUserById('testUser').then(async fetchedSiteUser => {
            setSiteUser(fetchedSiteUser);
            setAppList(await getAppsById(fetchedSiteUser.appIds));
            setLoaded(true);
        });

    }, [])

    return (
        <div>
            <TitleHeader />
            {loaded && appList ? <CardLayout appList={appList} /> : <></>}
            <footer style={{ textAlign: "right", marginRight: '18px', maxHeight: '18px' }}>
                <NewApplicationModal setApps={handleAdd} />
            </footer>
        </div>
    );
};

export default MyAppPage;