import App from "../Types/App";
import Permission from "../Types/Permission";
import Role from "../Types/Role";
import {updateApp, createPermission, createRole} from "../utils/database"
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
    return (
        <>
            <AddNewPermRole app={app} permissions={permissions} roles={roles} setPermissions={setPermissions} setRoles={setRoles}/>
            <MatrixTable permissions={permissions} roles={roles} setRoles={setRoles}/>
        </>
    )
}

export default PermissionMatrix;
