import * as React from "react";
import { AppRegistry } from "react-native";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { Provider } from "react-redux";

// constants
import { URL } from "./src/utils/constants";

//reducers
import rootReducer from "./src/redux/reducers/rootReducer";

// navigators
import App from "./src/navigators/AppNavigator";

const client = new ApolloClient({
  uri: `${URL}/graphql`
});

const store = createStore(rootReducer, applyMiddleware(thunk));

class AppWithRedux extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <App />
        </Provider>
      </ApolloProvider>
    );
  }
}

AppRegistry.registerComponent("Fredit", () => AppWithRedux);
