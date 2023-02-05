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
}

const PermissionMatrix = ({permissions, roles, setPermissions, setRoles, app}: Props) => {
    const [unsavedRoles, setUnsavedRoles] = React.useState(roles.map(role => ({...role, permissionIds: [...role.permissionIds]})));

    const handleRevertPerms = () => {
        setUnsavedRoles(roles.map(role => ({...role, permissionIds: [...role.permissionIds]})));
    }

    const handleSavePerms = () => {
        setRoles(unsavedRoles);
        console.log("WARNING API CALL");
        unsavedRoles.forEach(role => updateRole(role))
    }
    
    return (
        <>
            <AddNewPermRole handleRevertPerms={handleRevertPerms} handleSavePerms={handleSavePerms} app={app} permissions={permissions} roles={roles} setPermissions={setPermissions} setRoles={setRoles}/>
            <MatrixTable setUnsavedRoles={setUnsavedRoles} unsavedRoles={unsavedRoles} permissions={permissions} roles={roles}/>
        </>
    )
}

export default PermissionMatrix;
