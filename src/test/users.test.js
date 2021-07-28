import React from "react";
import { shallow, mount, render } from "enzyme";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import toJson from "enzyme-to-json";

import AddUser from "../components/users/addUser";
import { storeFactory, findByTestAtrr } from "./testUtils";
import UsersList from "../components/users/usersList";

const mockStore = configureMockStore();

const setUpAddUser = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = mount(
    <Provider store={store}>
      <AddUser />
    </Provider>
  );
  return wrapper;
};

const setUpUserList = (initialState = {}) => {
  const store = storeFactory(initialState);

  const wrapper = mount(
    <Provider store={store}>
      <UsersList />
    </Provider>
  );

  return wrapper;
};

describe("User Component", () => {
  describe("Add User Component", () => {
    let AddUserWrapper;

    beforeEach(() => {
      const store = mockStore({
        users: [],
        hobbies: [],
        selectedUser: "",
      });
      AddUserWrapper = setUpAddUser(store);
    });
    it("input and add button wrapper should be there", () => {
      const wrapper = findByTestAtrr(
        AddUserWrapper,
        "add_user_hldr"
      ).hostNodes();
      expect(wrapper.length).toBe(1);
    });

    it("user name is echoed", () => {
      AddUserWrapper.find("input").simulate("change", {
        target: { value: "chenchu" },
      });
      expect(AddUserWrapper.find("input").props().value).toEqual("chenchu");
    });
  });

  describe("Add User Component", () => {
    let UserListWrapper;

    beforeEach(() => {
      const store = mockStore({
        users: [{ name: "naresh" }, { name: "siva" }],
        hobbies: [],
        selectedUser: "",
      });
      UserListWrapper = setUpUserList(store);
    });
    it("input and add button wrapper should be there", () => {
      const wrapper = findByTestAtrr(
        UserListWrapper,
        "user_list_hlder"
      ).hostNodes();
      expect(wrapper.length).toBe(1);
    });
    // it("snapshot with two users list", () => {
    //   // const wrapper = ShallowListWrapper.toJSON();
    //   expect(toJson(ShallowListWrapper)).toMatchSnapshot();
    // });
  });
});
