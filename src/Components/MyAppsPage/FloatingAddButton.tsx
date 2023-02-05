import Stack from '@mui/material/Stack';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add'

export default function FloatingAddButton() {
    return (
        <Stack 
            justifyContent="flex-end"
            alignItems="flex-end"
            mt={4}
            mr={4}>
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </Stack>
    );
};