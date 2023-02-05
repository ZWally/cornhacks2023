import {Button} from "@mui/material"
import AppUser from "../Types/AppUser"

type Props = {
    user: AppUser
}

const UserTableEditBtn = ({user}: Props) => {
    return (
        <Button>Edit</Button>
    )
}

export default UserTableEditBtn;
