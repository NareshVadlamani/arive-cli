import React from "react";
import { shallow, mount, render } from "enzyme";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import toJson from "enzyme-to-json";

import AddHobby from "../components/hobbies/addHobby";
import { storeFactory, findByTestAtrr } from "./testUtils";
import HobbiesList from "../components/hobbies/hobbiesList";

const mockStore = configureMockStore();

const setUpAddHobby = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = mount(
    <Provider store={store}>
      <AddHobby />
    </Provider>
  );
  return wrapper;
};

const setUpHobbyList = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = mount(
    <Provider store={store}>
      <HobbiesList />
    </Provider>
  );
  return wrapper;
};

describe("Hobby Component", () => {
  describe("Add Hobby Component", () => {
    let AddHobbyWrapper;

    beforeEach(() => {
      const store = mockStore({
        users: [],
        hobbies: [],
        selectedUser: "",
      });
      AddHobbyWrapper = setUpAddHobby(store);
    });
    it("input and add button wrapper should be there", () => {
      const wrapper = findByTestAtrr(
        AddHobbyWrapper,
        "add_hobby_hldr"
      ).hostNodes();
      expect(wrapper.length).toBe(1);
    });

    it("passion name is echoed", () => {
      findByTestAtrr(AddHobbyWrapper, "name_input").simulate("change", {
        target: { value: "chess" },
      });
      expect(
        findByTestAtrr(AddHobbyWrapper, "name_input").props().value
      ).toEqual("chess");
    });

    it("passion date is echoed", () => {
      findByTestAtrr(AddHobbyWrapper, "date_input").simulate("change", {
        target: { value: "2000" },
      });
      expect(
        findByTestAtrr(AddHobbyWrapper, "date_input").props().value
      ).toEqual("2000");
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
      UserListWrapper = setUpHobbyList(store);
    });
    it("input and add button wrapper should be there", () => {
      const wrapper = findByTestAtrr(
        UserListWrapper,
        "hobby_list_hlder"
      ).hostNodes();
      expect(wrapper.length).toBe(1);
    });
    // it("snapshot with two users list", () => {
    //   // const wrapper = ShallowListWrapper.toJSON();
    //   expect(toJson(ShallowListWrapper)).toMatchSnapshot();
    // });
  });
});
