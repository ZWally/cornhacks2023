import Permission from "../Types/Permission";
import Role from "../Types/Role";
import {updateApp, createPermission, createRole} from "../utils/database"
import AddNewPermRole from "./AddNewPermRole";

type Props = {
    permissions: Permission[]
    roles: Role[]
    setPermissions:React.Dispatch<React.SetStateAction<Permission[] | null>>
    setRoles: React.Dispatch<React.SetStateAction<Role[] | null>>
}

const PermissionMatrix = ({permissions, roles, setPermissions, setRoles}: Props) => {
    return (
        <AddNewPermRole permissions={permissions} roles={roles} setPermissions={setPermissions} setRoles={setRoles}/>
    )
}

export default PermissionMatrix;
