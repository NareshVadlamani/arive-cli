import React from "react";
import { connect } from "react-redux";
import { selectHobbyByUser } from "../../redux/selectors/hobbies";
import { IHobby, IStote } from "../../types";
import { Box, Flex, Img } from "../../utils/basicComponents";
import { deleteHobby } from "../../redux/actions/hobbies";

import styles from "./hobbies.module.scss";
import iconDelete from "../../icons/delete.svg";

interface IProps {
  hobbies: IHobby[];
  deleteHobby: (hobby: IHobby) => void;
}

function HobbiesList(props: IProps) {
  const { hobbies, deleteHobby } = props;
  const deleteUserHobby = (hobby: IHobby) => {
    if (window.confirm("Do you want to delete this hobby ?"))
      deleteHobby(hobby);
  };
  return (
    <Box className={styles.hobby_list_hlder} data-test="hobby_list_hlder">
      {hobbies.map((hobby: IHobby) => {
        return (
          <Flex className={styles.hobby_List_item}>
            <Box className={styles.hobby_item}> Passion: {hobby.passion}</Box>
            <Box className={styles.hobby_item}>{hobby.hobby}</Box>
            <Box className={styles.hobby_item}> Since: {hobby.date}</Box>
            <Box className={styles.hobby_item}>
              <Img
                src={iconDelete}
                onClick={() => deleteUserHobby(hobby)}
                className={styles.delete_hobby}
              />
            </Box>
          </Flex>
        );
      })}
    </Box>
  );
}

const mapStateToProps = (state: IStote) => {
  const { selectedUser } = state;
  return { hobbies: selectHobbyByUser(state, selectedUser) };
};

HobbiesList.defaultProps = {
  users: [],
  deleteHobby: (hobby: IHobby) => {
    return hobby;
  },
};

export default connect(mapStateToProps, { deleteHobby })(HobbiesList);
