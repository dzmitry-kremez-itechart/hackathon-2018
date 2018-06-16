import * as React from "react";
import { AppRegistry } from "react-native";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { Provider } from "react-redux";

//reducers
import rootReducer from "./src/redux/reducers/rootReducer";

// navigators
import App from "./src/navigators/AppNavigator";

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

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
