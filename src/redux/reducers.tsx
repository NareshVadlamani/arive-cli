import { IHobby, IStote } from "../types";
import { ADD_HOBBY, ADD_USER, DELETE_HOBBY, SELECT_USER } from "./constants";

interface IActon {
  type: string;
  payload: { name: string; hobby: IHobby };
}

// const initialState = [{ name: "naresh" }, { name: "siva" }];

const initialState = {
  users: [{ name: "naresh" }, { name: "siva" }],
  hobbies: [{ name: "naresh", hobby: "chess", passion: "high", date: "2000" }],
  selectedUser: "",
};

export default function reducers(state: IStote = initialState, action: IActon) {
  const name = action.payload && action.payload.name;
  switch (action.type) {
    case ADD_USER:
      const newVal = { name: name };
      return { ...state, users: [...state.users, newVal] };

    case SELECT_USER:
      return { ...state, selectedUser: name };

    case ADD_HOBBY:
      return { ...state, hobbies: [...state.hobbies, action.payload.hobby] };

    case DELETE_HOBBY:
      const hobbyName = action.payload.hobby.hobby;
      const { selectedUser } = state;
      const newHobbies = state.hobbies.filter((hobby: IHobby) => {
        return !(hobby.name === selectedUser && hobby.hobby === hobbyName);
      });
      return { ...state, hobbies: [...newHobbies] };
    // case HOBBIES_LIST:
    //   const selectedUsersHobbies = state.hobbies.filter(
    //     (hb: IHobby) => hb.name === state.selectedUser
    //   );
    //   return [...selectedUsersHobbies];
    default:
      return state;
  }
}
