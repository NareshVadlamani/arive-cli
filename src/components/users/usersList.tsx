import React from "react";
import { connect } from "react-redux";
import { Box } from "../../utils/basicComponents";
import { selectUser } from "../../redux/actions/users";
import { getUserList } from "../../redux/selectors/users";

import styles from "./users.module.scss";

interface IProps {
  selectedUser: string | null;
  users: { name: string }[];
  selectUser: (name: string) => void;
}

function UsersList(props: IProps) {
  const { users = [], selectUser, selectedUser } = props;
  return (
    <Box className={styles.user_list_hlder} data-test="user_list_hlder">
      {users &&
        users.map((user, i) => {
          return (
            <Box
              key={i}
              className={styles.user_List_item}
              onClick={() => selectUser(user.name)}
              border={
                user.name === selectedUser
                  ? "2px solid #3a92ff"
                  : "1px solid black"
              }
            >
              {user.name}
            </Box>
          );
        })}
    </Box>
  );
}

const mapStateToProps = (state: any) => {
  return { users: getUserList(state) || [], selectedUser: state.selectedUser };
};

UsersList.defaultProps = {
  selectedUser: "",
  users: [],
  selectUser: (name: string) => {
    return name;
  },
};

export default connect(mapStateToProps, { selectUser })(UsersList);
