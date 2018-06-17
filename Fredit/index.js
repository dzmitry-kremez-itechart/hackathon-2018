import * as React from "react";
import { AppRegistry, AsyncStorage } from "react-native";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { setContext } from "apollo-link-context";
import { Provider } from "react-redux";

// constants
import { URL } from "./src/utils/constants";

//reducers
import rootReducer from "./src/redux/reducers/rootReducer";

// navigators
import App from "./src/navigators/AppNavigator";

console.disableYellowBox = true;

const httpLink = new HttpLink({ uri: `${URL}/graphql` });
const authLink = setContext(async (req, { headers }) => {
  const token = await AsyncStorage.getItem("TOKEN");

  return {
    ...headers,
    headers: {
      authorization: token ? `Bearer ${token}` : null
    }
  };
});

const link = authLink.concat(httpLink);
const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
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
