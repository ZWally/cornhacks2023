import React, { useState } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Modal} from '@material-ui/core';
import App from '../Types/App';

interface Props {
    setApps: (apps: App[]) => void;
  }
  
  const NewApplicationModal: React.FC<Props> = ({ setApps }) => {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const onAdd = () => {
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
        <Button variant="outlined" color="primary" onClick={handleOpen}>
          Add New Application
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>New Application</DialogTitle>
          <DialogContent>
            <TextField
              label="Application Name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
            <TextField
              label="Application Description"
              value={description}
              onChange={e => setDescription(e.target.value)}
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