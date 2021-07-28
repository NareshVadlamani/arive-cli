import React from "react";
import { Box } from "../../utils/basicComponents";
import AddUser from "./addUser";
import UsersList from "./usersList";

interface IProps {}

export default function Users(props: IProps) {
  return (
    <Box>
      <AddUser />
      <UsersList />
    </Box>
  );
}
