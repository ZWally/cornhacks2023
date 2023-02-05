import Permission from "../Types/Permission";
import Role from "../Types/Role";
import {updateApp, createPermission, createRole} from "../utils/database"

type Props = {
    permissions: Permission[]
    roles: Role[]
    setPermissions:React.Dispatch<React.SetStateAction<Permission[] | null>>
    setRoles: React.Dispatch<React.SetStateAction<Role[] | null>>
}

const PermissionMatrix = ({permissions, roles, setPermissions, setRoles}: Props) => {
    return (
        <></>
    )
}

export default PermissionMatrix;
