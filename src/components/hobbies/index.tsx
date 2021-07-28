import React from "react";
import { Box } from "../../utils/basicComponents";
import AddHobby from "./addHobby";
import HobbiesList from "./hobbiesList";

interface IProps {}

export default function Hobbies(props: IProps) {
  return (
    <Box>
      <AddHobby />
      <HobbiesList />
    </Box>
  );
}
