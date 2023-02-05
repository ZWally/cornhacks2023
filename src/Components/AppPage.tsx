import { useParams } from 'react-router-dom'
import { getAppById } from '../utils/database';
import {Typography} from "@mui/material"
import React, { useEffect } from 'react';
import App from '../Types/App';
import TabsContainer from './TabContainer';

const AppPage = () => {
    const { appId } = useParams<{appId: string}>();
    const [app, setApp] = React.useState<null | App>(null)
    
    useEffect(() => {
        if (!appId) {
            return;
        }
        
        console.log(appId)
        getAppById(appId).then(async fetchedApp => {
            setApp(fetchedApp)
        });

    }, [appId])
    
    return (
        <div>
            <Typography>{app?.name}</Typography>
            <TabsContainer
                usersComponent={<></>}
                permissionsComponent={<></>}
            />
        </div>
    )
}

export default AppPage;
