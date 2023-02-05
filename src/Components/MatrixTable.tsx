import Permission from "../Types/Permission"
import {TableContainer, Table, TableHead, TableRow, TableBody, TableCell, Checkbox} from "@mui/material"
import Role from "../Types/Role"
import { updateRole } from "../utils/database"
import React from "react"

type Props = {
    permissions: Permission[]
    roles: Role[]
    setRoles: React.Dispatch<React.SetStateAction<Role[] | null>>
}

const MatrixTable = ({permissions, roles, setRoles}: Props) => {
    const [unsavedRoles, setUnsavedRoles] = React.useState([...roles]);
    
    React.useEffect(() => {
        console.log("EFFECT IN PROGRESS");
        if (unsavedRoles.length < roles.length) {
            setUnsavedRoles([...unsavedRoles, roles[roles.length - 1]]);
        }
    }, [roles])
    
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        {roles.map(role => <TableCell>{role.name}</TableCell>)}
                    </TableRow>
                </TableHead>
            <TableBody>
                {
                    permissions.map(permission => {
                        return (
                        <TableRow>
                            <TableCell>{permission.name}</TableCell>
                            {unsavedRoles.map((role, roleIndex) => {
                                const hasPerm = role.permissionIds.includes(permission.id)
                                return (
                                    <TableCell>
                                        <Checkbox checked={hasPerm}
                                            onClick={() => {
                                                if (hasPerm) {
                                                    const permIndex = unsavedRoles[roleIndex].permissionIds.findIndex((permId => permId === permission.id));
                                                    let newRoles = [...unsavedRoles]
                                                    newRoles[roleIndex].permissionIds.splice(permIndex, 1);
                                                    setUnsavedRoles(newRoles);
                                                } else {
                                                    let newRoles = [...unsavedRoles]
                                                    newRoles[roleIndex].permissionIds.push(permission.id)
                                                    setUnsavedRoles(newRoles);
                                                }
                                            }}
                                        />
                                    </TableCell>
                                )
                            })}
                        </TableRow>
                        )
                    })
                }
            </TableBody>
            </Table>
        </TableContainer>
    )
}

export default MatrixTable
