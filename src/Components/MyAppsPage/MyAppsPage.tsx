import App from "../../Types/App";
import NewApplicationModal from "../NewAppModal";
import CardLayout from "./CardLayout";
import FloatingAddButton from "./FloatingAddButton";
import TitleHeader from "./TitleHeader";

// DUMMY DATA, REPLACE WITH REAL
const dummyApp1: App = {
    id: "1",
    userIds: ["1", "2", "3"],
    roleIds: ["Manager", "Editor", "Viewer"],
    permissionIds: ["canViewDB", "canEditDB", "canDeleteDB"],
    name: "floopGuy",
    description: "They floop Guys"
};

const dummyApp2: App = {
    id: "2",
    userIds: ["1", "2", "3"],
    roleIds: ["Manager", "Editor", "Viewer"],
    permissionIds: ["canViewDB", "canEditDB", "canDeleteDB"],
    name: "floopGuy",
    description: "They floop Guys"
};

const dummyApp3: App = {
    id: "3",
    userIds: ["1", "2", "3"],
    roleIds: ["Manager", "Editor", "Viewer"],
    permissionIds: ["canViewDB", "canEditDB", "canDeleteDB"],
    name: "floopGuy",
    description: "They floop Guys"
};

const dummyApp4: App = {
    id: "3",
    userIds: ["1", "2", "3"],
    roleIds: ["Manager", "Editor", "Viewer"],
    permissionIds: ["canViewDB", "canEditDB", "canDeleteDB"],
    name: "floopGuy",
    description: "They floop Guys"
};

const dummyAppsList: App [] = [dummyApp1, dummyApp2, dummyApp3, dummyApp4];
const handleAdd = (apps:any) => {
    //TODO: THE STUFF
  };
function MyAppPage() {
    return (
        <div>
            <TitleHeader />
            <CardLayout appList={dummyAppsList}/>
            <footer style={{textAlign:"right", marginRight:'18px'}}>
                <NewApplicationModal setApps={handleAdd} />
            </footer>
        </div>
    );
};

export default MyAppPage;