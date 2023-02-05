import React from "react";
import corn from "./cornhacks.png";
import { Button, TextField, Checkbox, Select, FormControl, MenuItem, SelectChangeEvent, AppBar, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";


interface Props {
    permissions: string[]
}


const Playground: React.FC<Props> = ({ permissions }) => {
    const [state, setState] = React.useState({
        checked: false,
        selectedUser: "john"
    });

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, checked: event.target.checked });
    };

    const handleSelectChange = (event: SelectChangeEvent<string>) => {
        setState({ ...state, selectedUser: event.target.value });
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "3rem",
                backgroundColor: "darkGrey"
            }}
        >
            <AppBar style={{ flexDirection: 'row', backgroundColor: "grey",height:'56px', padding: '5px'}}>
                <Select
                    labelId="select-label"
                    id="select"
                    value={state.selectedUser}
                    onChange={handleSelectChange}
                    style={{height:"40px",marginTop:'3px'}}
                >
                    <MenuItem value="john" color='primary'>John</MenuItem>
                    <MenuItem value="zach">Zach</MenuItem>
                    <MenuItem value="landry">Landry</MenuItem>
                    <MenuItem value="roy">Roy</MenuItem>
                </Select>
                <Button
                    variant="contained"
                    color="primary"
                    style={{height:"40px",marginTop:'3px'}}
                >
                    Update
                </Button>
            </AppBar>
            <img src={corn} height='120px' hidden={!permissions.includes("canSeeCorn")} style={{margin: "1rem"}}></img>
            {permissions.includes("canViewPlusButton") && (
                <FormControl>
                    <Fab color="primary" aria-label="add" disabled={!permissions.includes("canClickPlusButton")}>
                        <AddIcon />
                    </Fab>

                </FormControl>
            )}
            {permissions.includes("canViewTextEntry") && (
                <TextField
                    id="standard-basic"
                    label="Text Field"
                    disabled={!permissions.includes("canEditTextEntry")}
                    style={{ margin: "1rem" }}
                />
            )}
            {permissions.includes("canViewCheckBox") && (
                <Checkbox
                    checked={state.checked}
                    onChange={handleCheckboxChange}
                    disabled={!permissions.includes("canEditCheckBox")}
                    style={{ margin: "1rem" }}
                />
            )}
            {permissions.includes('canViewSubmitButton') && (
                <Button
                    variant="contained"
                    color="primary"
                    disabled={!permissions.includes('canClickSubmit')}
                    onClick={() => console.log("Button clicked")}
                    style={{ margin: "1rem" }}
                >
                    Click Me
                </Button>
            )}
        </div>
    );
};

export default Playground;