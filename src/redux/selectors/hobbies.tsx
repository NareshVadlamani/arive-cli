import { IHobby } from "../../types";

export const selectHobbyByUser = (state: any, name: string) => {
  const selectedUsersHobbies =
    state.hobbies && state.hobbies.filter((hb: IHobby) => hb.name === name);
  return selectedUsersHobbies || [];
};
