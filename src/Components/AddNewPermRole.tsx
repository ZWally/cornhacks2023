import {Stack, Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions} from "@mui/material"
import Permission from "../Types/Permission"
import Role from "../Types/Role"
import React from "react"
import {updateApp, createPermission, createRole} from "../utils/database"
import App from "../Types/App"

type Props = {
    permissions: Permission[]
    roles: Role[]
    setPermissions:React.Dispatch<React.SetStateAction<Permission[] | null>>
    setRoles: React.Dispatch<React.SetStateAction<Role[] | null>>
    app: App
}

const AddNewPermRole = ({permissions, roles, setPermissions, setRoles, app}: Props) => {
    const [permIsOpen, setPermIsOpen] = React.useState(false);
    const [roleIsOpen, setRoleIsOpen] = React.useState(false);
    const [permissionName, setPermissionName] = React.useState("");
    const [roleName, setRoleName] = React.useState("");

    const handlePermissionClose = () => {
        setPermIsOpen(false);
        setPermissionName("");
    }

    const handleRoleClose = () => {
        setRoleIsOpen(false);
        setRoleName("");
    }

    const handlePermissionSubmit = (permissionName: string) => {
        console.log("WARNING API CALL");
        createPermission(permissionName).then(newPermission => {
            setPermissions([...permissions, newPermission]);
            
            console.log("WARNING API CALL");
            updateApp({...app, permissionIds: [...app.permissionIds, newPermission.id]})
        })

        handlePermissionClose();
    }

    const handleRoleSubmit = (roleName: string) => {
        console.log("WARNING API CALL");
        createRole(roleName, []).then(newRole => {
            setRoles([...roles, newRole]);
            
            console.log("WARNING API CALL");
            updateApp({...app, roleIds: [...app.roleIds, newRole.id]})
        })

        handleRoleClose();
    }
    
    return (
        <>
            <Stack direction="row-reverse" spacing={2}>
                <Button variant="contained" onClick={() => setPermIsOpen(true)}>New Permission</Button>
                <Button variant="contained" onClick={() => setRoleIsOpen(true)}>New Role</Button>
            </Stack>
            <Dialog open={permIsOpen} onClose={handlePermissionClose}>
                <DialogTitle>New Permission</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Permission Name"
                        value={permissionName}
                        onChange={(e: any) => setPermissionName(e.target.value)}
                        style={{ marginTop: "4px", margin: "6px", width: "92%" }}
                        required
                        size="small"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handlePermissionClose}>Cancel</Button>
                    <Button
                        disabled={!permissionName}
                        onClick={() => handlePermissionSubmit(permissionName)}
                    >
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog open={roleIsOpen} onClose={handleRoleClose}>
                <DialogTitle>New Role</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Role Name"
                        value={roleName}
                        onChange={(e: any) => setRoleName(e.target.value)}
                        style={{ marginTop: "4px", margin: "6px", width: "92%" }}
                        required
                        size="small"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleRoleClose}>Cancel</Button>
                    <Button
                        disabled={!roleName}
                        onClick={() => handleRoleSubmit(roleName)}
                    >
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default AddNewPermRole;
