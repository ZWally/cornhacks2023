import App from "../../Types/App";
import CardLayout from "./CardLayout";
import FloatingAddButton from "./FloatingAddButton";
import TitleHeader from "./TitleHeader";
import { getSiteUserById, getAppsById } from "../../utils/database";
import SiteUser from "../../Types/SiteUser";
import React, { useEffect } from "react";

function MyAppPage() {
    const [siteUser, setSiteUser] = React.useState<SiteUser | null>(null);
    const [appList, setAppList] = React.useState<App [] | null>(null);
    const [loaded, setLoaded] = React.useState(false);

    useEffect(() => {
        getSiteUserById('testUser').then(async fetchedSiteUser => {
            setSiteUser(fetchedSiteUser);
            setAppList(await getAppsById(fetchedSiteUser.appIds));
            setLoaded(true);
        });

    })

    

    return (
        <div>
            <TitleHeader />
            {loaded && appList? <CardLayout appList={appList}/> : <></>}
            <footer>
                <FloatingAddButton />
            </footer>
        </div>
    );
};

export default MyAppPage;