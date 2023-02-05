import React, { useState } from 'react';
import { Autocomplete, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Modal, Icon, IconButton, Fab } from '@mui/material';
import App from '../Types/App';
import AddIcon from '@mui/icons-material/Add'
import { createAppUser, updateApp } from '../utils/database';
import SiteUser from '../Types/SiteUser';
import Role from '../Types/Role';
import { getIdFromRole } from './UserTableEditBtn';
import AppUser from '../Types/AppUser';

type Props = {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    roles: Role[]
    users: AppUser[]
    setUsers: React.Dispatch<React.SetStateAction<AppUser[] | null>>
    app: App
}

const AddUserModal: React.FC<Props> = ({ isOpen, setIsOpen, roles, users, setUsers, app}) => {
    const [name, setName] = useState('');
    const [role, setRole] = useState<null | string>(null);
    const onAdd = async (name: string, role: string) => {
        const roleId = getIdFromRole(roles, role)?.id as string;
        
        console.log("WARNING API CALL");
        createAppUser(roleId, name).then(newUser => {
            const newUsers = [...users, newUser];
            setUsers(newUsers);
            // MAY NEED TO UPDATE APP LOCALLY
            console.log("WARNING API CALL");
            updateApp({...app, userIds: [...app.userIds, newUser.id]})
        })

        handleClose();
    };

    const handleClose = () => {
        setIsOpen(false);
        setName('');
    };

    return (
            <Dialog open={isOpen} onClose={handleClose}>
                <DialogTitle>New User</DialogTitle>
                <DialogContent>
                    <TextField
                        label="User Name"
                        value={name}
                        onChange={(e: any) => setName(e.target.value)}
                        style={{ marginTop: "4px", margin: "6px", width: "92%" }}
                        required
                        size="small"
                    />
                    <Autocomplete
                    size="small"
                    disablePortal
                    options={roles.map(role => role.name)}
                    onChange={(event, value) => setRole(value)}
                    style={{ marginTop: "4px", margin: "6px", width: "92%" }}
                    defaultValue={null}
                    renderInput={(params) => <TextField {...params} label="Role" />}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button
                        disabled={!name || !role}
                        onClick={() => onAdd(name, role as string)}
                    >
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
    );
};

export default AddUserModal;