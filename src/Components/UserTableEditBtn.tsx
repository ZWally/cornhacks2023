import {Button, Autocomplete, Modal, Box, Typography, TextField} from "@mui/material"
import React from "react"
import { AppUserRow, roleFromId } from "./UsersTable"
import Role from "../Types/Role"
import { updateAppUser } from "../utils/database"
import AppUser from "../Types/AppUser"

type Props = {
    user: AppUserRow
    roles: Role []
    setUsers: React.Dispatch<React.SetStateAction<AppUser[] | null>>
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const getIdFromRole = (roles: Role [], roleName: string) => roles.find(role => role.name === roleName);

const UserTableEditBtn = ({user, roles, setUsers}: Props) => {
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = React.useState<null | string>(user.role);
    
    return (
        <>
        <Button onClick={handleOpen}>Edit</Button>
        <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit User: {user.authId}
          </Typography>
            <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={roles.map(role => role.name)}
            onChange={(event, value) => setValue(value)}
            sx={{ width: 300, marginTop: 2, marginBottom: 1}}
            defaultValue={user.role}
            renderInput={(params) => <TextField {...params} label="Role" />}
            />
            <Button onClick={(_) => setOpen(false)}>Cancel</Button>
            <Button
            disabled={value === null || value === user.role}
             onClick={
                (_) => {
                    if (value !== null) { 
                        updateAppUser({...user, roleId: getIdFromRole(roles, value)?.id || "error"}).then(() => {
                    });
                    }
                    if (value === null) {
                        console.log()
                    }
                    setOpen(false);
            }
            }
            >Update</Button>
        </Box>
      </Modal>
      </>
    )
}

export default UserTableEditBtn;
