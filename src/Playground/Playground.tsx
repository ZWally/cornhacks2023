import React from "react";
import corn from "./cornhacks.png";
import { Button, TextField, Checkbox, Select, FormControl, MenuItem, SelectChangeEvent, AppBar, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { getAppById, getAppUsersById } from "../utils/database";
import AppUser from "../Types/AppUser";

const PERMISSIONS: string[] = [
  "canSeeCorn",
  "canViewForm",
  "canViewPlusButton",
  "canClickPlusButton",
  "canEditDropDown",
  "canViewTextEntry",
  "canEditTextEntry",
  "canViewCheckBox",
  "canEditCheckBox",
  'canViewSubmitButton',
  'canClickSubmit',
]

const APP_ID = 'oijwf092309j203f';

const Playground: React.FC = () => {
    const [userPermissions, setUserPermissions] = React.useState<string []>([])
    const [currentUser, setCurrentUser] = React.useState<AppUser | undefined>(undefined);
    const [loaded, setLoaded] = React.useState(false);
    const [userList, setUserList] = React.useState<AppUser []>([]);

    React.useEffect(() => {
      getAppById(APP_ID).then(app => {
        getAppUsersById(app.userIds).then(appUsers => {
          setUserList(appUsers)
          setCurrentUser(appUsers[0])  
        })
      })
    }, [])

    React.useEffect(() => {
      if (currentUser) {
        setLoaded(false);
        fetch('https://us-central1-cornhax2023.cloudfunctions.net/getUserPermissions?userId=' + currentUser.id).then(data => data.json()).then(res => {
          setUserPermissions(res);
          setLoaded(true)
        })
      }
    }, [currentUser])

    function getAppUserFromName(name: string) {
      for (let i = 0; i < userList.length; i++) {
        if (name == userList[i].authId) {
          return userList[i];
        }
      }
    }

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
                    value={currentUser?.authId}
                    onChange={e => setCurrentUser(getAppUserFromName(e.target.value))}
                    style={{height:"40px",marginTop:'3px'}}
                >
                  { userList.map(appUser => <MenuItem value={appUser.authId}>{appUser.authId}</MenuItem>)}
                </Select>
                <Button
                    variant="contained"
                    color="primary"
                    style={{height:"40px",marginTop:'3px'}}
                >
                    Update
                </Button>
            </AppBar>
            <img src={corn} height='120px' hidden={!userPermissions.includes("canSeeCorn")} style={{margin: "1rem"}}></img>
            {userPermissions.includes("canViewPlusButton") && (
                <FormControl>
                    <Fab color="primary" aria-label="add" disabled={!userPermissions.includes("canClickPlusButton")}>
                        <AddIcon />
                    </Fab>

                </FormControl>
            )}
            {userPermissions.includes("canViewTextEntry") && (
                <TextField
                    id="standard-basic"
                    label="Text Field"
                    disabled={!userPermissions.includes("canEditTextEntry")}
                    style={{ margin: "1rem" }}
                />
            )}
            {userPermissions.includes("canViewCheckBox") && (
                <Checkbox
                    disabled={!userPermissions.includes("canEditCheckBox")}
                    style={{ margin: "1rem" }}
                />
            )}
            {userPermissions.includes('canViewSubmitButton') && (
                <Button
                    variant="contained"
                    color="primary"
                    disabled={!userPermissions.includes('canClickSubmit')}
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