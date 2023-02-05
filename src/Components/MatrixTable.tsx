import Permission from "../Types/Permission"
import {TableContainer, Table, TableHead, TableRow, TableBody, TableCell, Checkbox} from "@mui/material"
import Role from "../Types/Role"
import { updateRole } from "../utils/database"

type Props = {
    permissions: Permission[]
    roles: Role[]
    setRoles: React.Dispatch<React.SetStateAction<Role[] | null>>
}

const MatrixTable = ({permissions, roles, setRoles}: Props) => {
    console.log(roles)
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>test</TableCell>
                        {roles.map(role => <TableCell>{role.name}</TableCell>)}
                    </TableRow>
                </TableHead>
            <TableBody>
                {
                    permissions.map(permission => {
                        return (
                        <TableRow>
                            <TableCell>{permission.name}</TableCell>
                            {roles.map(role => {
                                const hasPerm = role.permissionIds.includes(permission.id)
                                return (
                                    <TableCell>
                                        <Checkbox checked={hasPerm}/>
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
