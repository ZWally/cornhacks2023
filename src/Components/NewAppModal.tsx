import React, { useState } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Modal, Icon, IconButton, Fab } from '@mui/material';
import App from '../Types/App';
import AddIcon from '@mui/icons-material/Add'
import { createApp, updateSiteUser } from '../utils/database';
import SiteUser from '../Types/SiteUser';

interface Props {
    fetchedSiteUser: SiteUser
    appList: App []
    setAppList: React.Dispatch<React.SetStateAction<App[] | null>>
}

const NewApplicationModal: React.FC<Props> = ({ fetchedSiteUser, setAppList, appList }) => {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const onAdd = async (name: string, description: string) => {
        console.log("WARNING API CALL");
        const newApp: Promise<App> = createApp(name, description, [], [], []);
        newApp.then(app => {
            fetchedSiteUser.appIds.push(app.id);
            console.log("WARNING API CALL");
            updateSiteUser(fetchedSiteUser);

            const newAppList = [...appList, app]
            setAppList(newAppList);
        })
        handleClose();
    };
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setName('');
        setDescription('');
    };

    return (
        <div>
            <IconButton color="secondary" onClick={handleOpen}>
                <Fab color="primary" aria-label="add">
                    <AddIcon htmlColor='white' fontSize='large' />
                </Fab>
            </IconButton>
            <Dialog open={open} onClose={handleClose} style={{padding: '20px'}}>
                <DialogTitle>New Application</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Application Name"
                        value={name}
                        onChange={(e: any) => setName(e.target.value)}
                        style={{ marginTop: "4px", margin: "6px", width: "92%" }}
                        required
                        size="small"


                    />
                    <TextField
                        label="Application Description"
                        value={description}
                        onChange={(e: any) => setDescription(e.target.value)}
                        multiline
                        style={{ margin: "6px", width: "92%", }}
                        size="small"

                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button
                        disabled={!name}
                        onClick={() => onAdd(name, description)}

                    >
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default NewApplicationModal;