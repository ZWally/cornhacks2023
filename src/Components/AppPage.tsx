import { useParams } from 'react-router-dom'
import { getAppById, getAppUsersById, getRolesById, getPermissionsById } from '../utils/database';
import {Typography} from "@mui/material"
import React, { useEffect } from 'react';
import App from '../Types/App';
import TabsContainer from './TabContainer';
import UsersTable from './UsersTable';
import AppUser from '../Types/AppUser';
import Role from '../Types/Role';
import Permission from '../Types/Permission';
import PermissionMatrix from './PermissionMatrix';

const AppPage = () => {
    const { appId } = useParams<{appId: string}>();
    const [app, setApp] = React.useState<null | App>(null);
    const [users, setUsers] = React.useState<null | AppUser[]>(null);
    const [roles, setRoles] = React.useState<null | Role[]>(null);
    const [permissions, setPermissions] = React.useState<null | Permission[]>(null);
    
    useEffect(() => {
        if (!appId) {
            return;
        }
        
        console.log("WARNING API CALL");
        getAppById(appId).then(async fetchedApp => {
            setApp(fetchedApp);
            getAppUsersById(fetchedApp.userIds).then(async fetchedUsers => {
                setUsers(fetchedUsers);
            })
            getRolesById(fetchedApp.roleIds).then(async fetchedRoles => {
                setRoles(fetchedRoles);
            })
            getPermissionsById(fetchedApp.permissionIds).then(async fetchedPermissions => {
                setPermissions(fetchedPermissions);
            })
        });
        

    }, [appId])
    
    return (
        <div>
            <Typography variant='h2' ml={2} mb={1}>{app?.name}</Typography>
            <TabsContainer
                usersComponent={app && <UsersTable app={app} setUsers={setUsers} users={users || []} roles={roles || []} />}
                permissionsComponent={roles && permissions && app && <PermissionMatrix app={app} roles={roles} setRoles={setRoles} permissions={permissions} setPermissions={setPermissions}/>}
            />
        </div>
    )
}

export default AppPage;
