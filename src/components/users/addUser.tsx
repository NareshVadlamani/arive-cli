import React, { useState } from "react";
import { Box, Flex } from "../../utils/basicComponents";
import { connect } from "react-redux";
import { addUser } from "../../redux/actions/users";

import styles from "./users.module.scss";

interface IProps {
  addUser: (name: string) => void;
}

function AddUser(props: IProps) {
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");
  const { addUser } = props;
  const updateUserName = (name: string) => {
    setUserName(name);
    setError("");
  };
  const addUserToList = () => {
    if (userName.length < 3) {
      setError("Name should be more then 3 characters");
    } else {
      addUser(userName);
      setUserName("");
    }
  };
  return (
    <Flex data-test="add_user_hldr">
      <Box position="relative" flex={1}>
        <input
          id="user_name"
          placeholder={error ? "" : "Enter Name"}
          value={userName}
          onChange={(e) => updateUserName(e.target.value)}
          onClick={() => setError("")}
          className={styles.user_input}
        ></input>
        {error && <label className={styles.error_msg}>{error}</label>}
      </Box>
      <Box className={styles.add_button_hldr}>
        <button onClick={() => addUserToList()} className={styles.add_button}>
          Add
        </button>
      </Box>
    </Flex>
  );
}

AddUser.defaultProps = {
  addUser: (name: string) => name,
};

export default connect(null, { addUser })(AddUser);
