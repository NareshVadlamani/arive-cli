// import checkPropTypes from "check-prop-types";
import { createStore } from "redux";
import reducers from "../redux/reducers";
import { IStote } from "../types";

export const findByTestAtrr = (component: any, attr: string) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

// export const checkProps = (component, expectedProps) => {
//   const propsErr = checkPropTypes(
//     component.propTypes,
//     expectedProps,
//     "props",
//     component.name
//   );
//   return propsErr;
// };

// export const testStore = (initialState) => {
//   const createStoreWithMiddleware = applyMiddleware(...middlewares)(
//     createStore
//   );
//   return createStoreWithMiddleware(rootReducer, initialState);
// };

export const storeFactory = (initialState: IStote) => {
  return createStore(reducers, initialState);
};
