import { Paper, TableContainer } from "@mui/material";
import React from "react";
import App from "../Types/App";
import Permission from "../Types/Permission";
import Role from "../Types/Role";
import {updateApp, createPermission, createRole, updateRole} from "../utils/database"
import AddNewPermRole from "./AddNewPermRole";
import MatrixTable from "./MatrixTable";

type Props = {
    permissions: Permission[]
    roles: Role[]
    setPermissions:React.Dispatch<React.SetStateAction<Permission[] | null>>
    setRoles: React.Dispatch<React.SetStateAction<Role[] | null>>
    app: App
    setApp: React.Dispatch<React.SetStateAction<App | null>>
}

const PermissionMatrix = ({permissions, roles, setPermissions, setRoles, app, setApp}: Props) => {
    const [unsavedRoles, setUnsavedRoles] = React.useState(roles.map(role => ({...role, permissionIds: [...role.permissionIds]})));
    const [hasUnsaved, setHasUnsaved] = React.useState(false);

    const handleRevertPerms = () => {
        setUnsavedRoles(roles.map(role => ({...role, permissionIds: [...role.permissionIds]})));
    }

    const handleSavePerms = () => {
        setRoles(unsavedRoles);
        console.log("WARNING API CALL");
        unsavedRoles.forEach(role => updateRole(role))
    }
    
    return (
        <div style={{margin: '20px'}}>
          <TableContainer component={Paper}>
            <AddNewPermRole hasUnsaved={hasUnsaved} setHasUnsaved={setHasUnsaved} setApp={setApp} handleRevertPerms={handleRevertPerms} handleSavePerms={handleSavePerms} app={app} permissions={permissions} roles={roles} setPermissions={setPermissions} setRoles={setRoles}/>
            <MatrixTable setUnsaved={setHasUnsaved} setUnsavedRoles={setUnsavedRoles} unsavedRoles={unsavedRoles} permissions={permissions} roles={roles}/>
          </TableContainer>
        </div>
    )
}

export default PermissionMatrix;
