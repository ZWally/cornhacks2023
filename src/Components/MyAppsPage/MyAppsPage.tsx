import App from "../../Types/App";
import CardLayout from "./CardLayout";

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


function MyAppPage() {
    return (
        <body>
        </body>
    );
};

export default MyAppPage;