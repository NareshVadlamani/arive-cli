export interface IUser {
  name: string;
}

export interface IHobby {
  name: string;
  hobby: string;
  passion: string;
  date: string;
}

export interface IStote {
  users: IUser[];
  hobbies: IHobby[];
  selectedUser: string;
}
