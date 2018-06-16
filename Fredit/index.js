import * as React from "react";
import { AppRegistry } from "react-native";
import { createStore } from "redux";
import storage from "redux-persist/lib/storage";
import { Provider } from "react-redux";

//reducers
import rootReducer from "./src/redux/reducers/rootReducer";

// navigators
import App from "./src/navigators/AppNavigator";

const persistConfig = {
  key: "root",
  storage
};

const store = createStore(rootReducer);

class AppWithRedux extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent("Fredit", () => AppWithRedux);
