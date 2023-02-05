import React from "react";
import {Button,TextField,Checkbox,Select,FormControl,InputLabel,MenuItem, SelectChangeEvent} from "@mui/material";



interface Props {
  permissions: {[id:string]:boolean}
}

const PERMISSIONS: {[id:string]:boolean} = {
    "canView":true,
    "canEdit":true,

}

const PermissionManager: React.FC<Props> = ({ permissions }) => {
  const [state, setState] = React.useState({
    checked: false,
    selectedValue: "",
  });

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, checked: event.target.checked });
  };

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    setState({ ...state, selectedValue: event.target.value });
  };

  return (
    <div>
      {permissions['canView'] && (
        <FormControl style={{
            margin: 1,
            minWidth: 120,
          }}>
          <InputLabel id="select-label">Select</InputLabel>
          <Select
            labelId="select-label"
            id="select"
            value={state.selectedValue}
            onChange={handleSelectChange}
            disabled={!permissions['canEdit']}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="option1">Option 1</MenuItem>
            <MenuItem value="option2">Option 2</MenuItem>
            <MenuItem value="option3">Option 3</MenuItem>
          </Select>
        </FormControl>
      )}
      {permissions['canView'] && (
        <TextField
          id="standard-basic"
          label="Text Field"
          disabled={!permissions['canEdit']}
        />
      )}
      {permissions['canView'] && (
        <Checkbox
          checked={state.checked}
          onChange={handleCheckboxChange}
          disabled={!permissions['canEdit']}
        />
      )}
      {permissions['canView'] && (
        <Button
          variant="contained"
          color="primary"
          disabled={!permissions['canClick']}
          onClick={() => console.log("Button clicked")}
        >
          Submit
        </Button>
      )}
    </div>
  );
};

export default PermissionManager;
