import Stack from '@mui/material/Stack';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add'

export default function FloatingAddButton() {
    return (
        <div>
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </div>
    );
};