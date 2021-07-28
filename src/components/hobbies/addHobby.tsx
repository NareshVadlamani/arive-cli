import React, { useEffect, useState } from "react";
import { Box, Flex } from "../../utils/basicComponents";
import { connect } from "react-redux";
import { addHobbiesForUser } from "../../redux/actions/hobbies";
import { IHobby, IStote } from "../../types";

import styles from "./hobbies.module.scss";

interface IProps {
  selectedUser: string | null;
  addHobbiesForUser: (hobby: IHobby) => void;
}

function AddHobby(props: IProps) {
  const { selectedUser, addHobbiesForUser } = props;
  const [userHobby, setUserHobby] = useState({
    passion: "",
    name: selectedUser,
    date: "",
    hobby: "",
  });
  const [error, setError] = useState({
    passion: "",
    date: "",
    hobby: "",
  });
  const updateUserHobby = (key: string, value: string) => {
    setUserHobby({ ...userHobby, [key]: value });
  };

  useEffect(() => {
    setUserHobby({ ...userHobby, name: selectedUser });
  }, [selectedUser]);

  const isValidData = () => {
    if (
      userHobby.passion.length > 3 &&
      userHobby.hobby.length > 3 &&
      userHobby.date.length === 4
    ) {
      return true;
    } else {
      const errors = {
        passion: userHobby.passion ? "" : "Select passion",
        hobby:
          userHobby.hobby.length > 3
            ? ""
            : "Name should be more then 3 characters",
        date: userHobby.date.length === 4 ? "" : "Enter year",
      };
      setError(errors);
      return false;
    }
  };
  const addHobbyToList = () => {
    if (isValidData()) {
      addHobbiesForUser(userHobby as IHobby);
      setUserHobby({
        passion: "",
        hobby: "",
        date: "",
        name: selectedUser,
      });
    }
  };
  return (
    <Flex>
      <Box className={styles.hobby_item} data-test="add_hobby_hldr">
        {/* <input
          placeholder="Enter passion level"
          value={userHobby.passion}
          onChange={(e) => updateUserHobby("passion", e.target.value)}
          className={styles.hobby_input}
        ></input> */}
        <select
          onChange={(e) => updateUserHobby("passion", e.target.value)}
          className={styles.hobby_select}
          data-test="passion_select"
        >
          <option>Choose passion level</option>
          <option value="Very Hight">Very Hight</option>
          <option value="Hight">Hight</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        {error.passion && (
          <label className={styles.error_msg}>{error.passion}</label>
        )}
      </Box>
      <Box className={styles.hobby_item}>
        <input
          placeholder="Name"
          value={userHobby.hobby}
          onChange={(e) => updateUserHobby("hobby", e.target.value)}
          className={styles.hobby_input}
          onClick={() => setError({ ...error, hobby: "" })}
          data-test="name_input"
        ></input>
        {error.hobby && (
          <label className={styles.error_msg}>{error.hobby}</label>
        )}
      </Box>
      <Box className={styles.hobby_item}>
        <input
          type="number"
          placeholder="Since"
          value={userHobby.date}
          onChange={(e) => updateUserHobby("date", e.target.value)}
          className={styles.hobby_input}
          onClick={() => setError({ ...error, date: "" })}
          data-test="date_input"
        ></input>
        {error.date && <label className={styles.error_msg}>{error.date}</label>}
      </Box>
      <Box>
        <button
          onClick={() => addHobbyToList()}
          className={styles.add_button}
          disabled={!selectedUser}
        >
          Add
        </button>
      </Box>
    </Flex>
  );
}

const mapStateToProps = (state: IStote) => {
  return { selectedUser: state.selectedUser };
};

AddHobby.defaultProps = {
  addHobbiesForUser: (hobby: IHobby) => hobby,
};

export default connect(mapStateToProps, { addHobbiesForUser })(AddHobby);
