import React, { useState } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Modal, Icon, IconButton, Fab } from '@mui/material';
import App from '../Types/App';
import AddIcon from '@mui/icons-material/Add'

interface Props {
    setApps: (apps: App[]) => void;
}

const NewApplicationModal: React.FC<Props> = ({ setApps }) => {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const onAdd = (name: string, description: string) => {
        //TODO: add the app to the database
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
            <AddIcon htmlColor='white' fontSize='large'/>
            </Fab>
            </IconButton>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New Application</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Application Name"
                        value={name}
                        onChange={(e: any) => setName(e.target.value)}
                        style={{marginTop:"4px",margin:"6px",width:"92%"}}
                        required
                        size="small"
                
                        
                    />
                    <TextField
                        label="Application Description"
                        value={description}
                        onChange={(e: any) => setDescription(e.target.value)}
                        multiline
                        style={{margin:"6px",width:"92%",}}
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