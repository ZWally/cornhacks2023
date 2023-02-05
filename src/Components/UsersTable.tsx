import { Button, Box, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow } from "@mui/material";
import { FirstPage, LastPage, KeyboardArrowRight, KeyboardArrowLeft } from "@mui/icons-material"
import AppUser from "../Types/AppUser";
import React from "react";
import UserTableEditBtn from "./UserTableEditBtn";
import Role from "../Types/Role";
import AddUserModal from "./AddUserModal";
import App from "../Types/App";

type TablePaginationActionsProps = {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number,
  ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        <FirstPage />
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        <KeyboardArrowRight />
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        <LastPage />
      </IconButton>
    </Box>
  );
}

export type AppUserRow = {
  id: string
  role: string
  authId: string
  roleId: string
}

type UsersTableProps = {
  users: AppUser []
  roles: Role []
  setUsers: React.Dispatch<React.SetStateAction<AppUser[] | null>>
  app: App
}

export const roleFromId = (roles: Role[], roleId: string) => 
  {
    const roleName = roles.find(role => role.id === roleId);
    // console.log("ROLE NAME level 1", roleName)
    return roleName
  }

const userToRow = (roles: Role[], user: AppUser) => {
  const row = {
    role: roleFromId(roles, user.roleId)?.name || "None",
    id: user.id,
    authId: user.authId,
    roleId: user.roleId
  }
  // console.log("ROLE NAME", row.role)
  return (row);
}

export default function UsersTable({users, roles, setUsers, app}: UsersTableProps) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [addUserOpen, setAddUserOpen] = React.useState(false);
  
  const userRows: AppUserRow [] = users.map((user) => userToRow(roles, user));
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - userRows.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  return (
    <div style={{margin: '20px'}}>
    <TableContainer component={Paper}>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? userRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : userRows
          ).map((user) => (
            <TableRow key={user.id}>
              <TableCell component="th" scope="row">
                {user.authId}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {user.role}
              </TableCell>
              <TableCell>
                <UserTableEditBtn oldUsers={users} user={user} roles={roles} setUsers={setUsers}/>
              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter >
          <TableRow style={{}}>
            <TableCell>
            <Button variant="contained" style={{}}
              onClick={
                (_) => {
                  setAddUserOpen(true);
                }
              }
            >Add User</Button></TableCell>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={userRows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
    <AddUserModal isOpen={addUserOpen} setIsOpen={setAddUserOpen} roles={roles} users={users} setUsers={setUsers} app={app}/>
    </div>
  );
}
