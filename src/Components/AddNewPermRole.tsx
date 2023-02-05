import {Stack, Button} from "@mui/material"
import Permission from "../Types/Permission"
import Role from "../Types/Role"
import React from "react"

type Props = {
    permissions: Permission[]
    roles: Role[]
    setPermissions:React.Dispatch<React.SetStateAction<Permission[] | null>>
    setRoles: React.Dispatch<React.SetStateAction<Role[] | null>>
}

const AddNewPermRole = ({permissions, roles, setPermissions, setRoles}: Props) => {
    const [permIsOpen, setPermIsOpen] = React.useState(false);
    const [roleIsOpen, setRoleIsOpen] = React.useState(false);
    
    return (
        <>
            <Stack direction="row">
                <Button onClick={() => setPermIsOpen(true)}>New Permission</Button>
                <Button onClick={() => setRoleIsOpen(true)}>New Role</Button>
            </Stack>
        </>
    );
}

export default AddNewPermRole;
