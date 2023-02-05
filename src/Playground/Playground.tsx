import React from "react";
import corn from "./cornhacks.png";
import { Button, TextField, Checkbox, Select, FormControl, InputLabel, MenuItem, SelectChangeEvent, AppBar, Tab, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";


interface Props {
    permissions: { [id: string]: boolean }
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
                backgroundColor: "aquamarine"
            }}
        >
            <AppBar style={{ flexDirection: 'row', backgroundColor: "orange"}}>
                <Select
                    labelId="select-label"
                    id="select"
                    value={state.selectedUser}
                    onChange={handleSelectChange}
                >
                    <MenuItem value="john" color='primary'>John</MenuItem>
                    <MenuItem value="zach">Zach</MenuItem>
                    <MenuItem value="landry">Landry</MenuItem>
                    <MenuItem value="roy">Roy</MenuItem>
                </Select>
                <Button
                    variant="contained"
                    color="secondary"
                    style={{ margin: "1rem" }}
                >
                    Update
                </Button>
            </AppBar>
            <img src={corn} height='120px' hidden={!permissions["canSeeCorn"]} style={{margin: "1rem"}}></img>
            {permissions["canViewPlusButton"] && (
                <FormControl>
                    <Fab color="secondary" aria-label="add" disabled={!permissions["canClickPlusButton"]}>
                        <AddIcon />
                    </Fab>

                </FormControl>
            )}
            {permissions["canViewTextEntry"] && (
                <TextField
                    id="standard-basic"
                    label="Text Field"
                    disabled={!permissions["canEditTextEntry"]}
                    style={{ margin: "1rem" }}
                />
            )}
            {permissions["canViewCheckBox"] && (
                <Checkbox
                    checked={state.checked}
                    onChange={handleCheckboxChange}
                    disabled={!permissions["canEditCheckBox"]}
                    style={{ margin: "1rem" }}
                />
            )}
            {permissions['canViewSubmitButton'] && (
                <Button
                    variant="contained"
                    color="primary"
                    disabled={!permissions['canClickSubmit']}
                    onClick={() => console.log("Button clicked")}
                    style={{ margin: "1rem" }}
                >
                    Submit
                </Button>
            )}
        </div>
    );
};

export default Playground;