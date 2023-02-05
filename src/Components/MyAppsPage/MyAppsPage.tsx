import App from "../../Types/App";
import NewApplicationModal from "../NewAppModal";
import CardLayout from "./CardLayout";
import FloatingAddButton from "./FloatingAddButton";
import TitleHeader from "./TitleHeader";

const handleAdd = (apps: any) => {
    //TODO: THE STUFF
};
function MyAppPage() {
    return (
        <div>

            <TitleHeader />
            <CardLayout appList={} />

            <footer style={{ textAlign: "right", marginRight: '18px', maxHeight: '18px' }}>
                <NewApplicationModal setApps={handleAdd} />
            </footer>
        </div>
    );
};

export default MyAppPage;