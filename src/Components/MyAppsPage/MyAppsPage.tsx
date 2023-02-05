import App from "../../Types/App";
import NewApplicationModal from "../NewAppModal";
import CardLayout from "./CardLayout";
import FloatingAddButton from "./FloatingAddButton";
import TitleHeader from "./TitleHeader";
import { getSiteUserById, getAppsById } from "../../utils/database";
import SiteUser from "../../Types/SiteUser";
import React, { useEffect } from "react";
import { useAuthContext } from "../../Contexts/Authorization";


function MyAppPage() {
    const [appList, setAppList] = React.useState<App [] | null>(null);
    const [loaded, setLoaded] = React.useState(false);
    const {siteUser} = useAuthContext();

    useEffect(() => {
        if (!siteUser) {
            return;
        }
        console.log("WARNING API CALL")
        getAppsById(siteUser.appIds).then(apps => setAppList(apps))

    }, [siteUser])

    return (
        <div>
            <TitleHeader />
            {loaded && appList ? <CardLayout appList={appList} /> : <></>}
            <footer style={{ textAlign: "right", marginRight: '18px', maxHeight: '18px' }}>
                {siteUser && appList && <NewApplicationModal appList={appList} setAppList={setAppList} fetchedSiteUser={siteUser}/>}
            </footer>
        </div>
    );
};

export default MyAppPage;