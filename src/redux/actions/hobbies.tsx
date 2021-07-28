import { IHobby } from "../../types";
import { ADD_HOBBY, DELETE_HOBBY } from "../constants";

export const addHobbiesForUser = (hobby: IHobby) => ({
  type: ADD_HOBBY,
  payload: { hobby },
});

export const deleteHobby = (hobby: IHobby) => ({
  type: DELETE_HOBBY,
  payload: { hobby },
});

// export const getHobbiesByUser = (name: string) => ({
//   type: "GET_USERS",
//   payload: name,
// });
