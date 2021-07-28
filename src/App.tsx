import Resizer from "./utils/resizer";
import Users from "./components/users";
import Hobbies from "./components/hobbies";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import styles from "./app.module.scss";

function App() {
  return (
    <Provider store={store}>
      <div className={styles.app_contanier}>
        <div className={styles.black_border}>
          <div className={styles.heading}>User Hobbies</div>
          <Resizer>
            <Users />
            <Hobbies />
          </Resizer>
        </div>
      </div>
    </Provider>
  );
}

export default App;
