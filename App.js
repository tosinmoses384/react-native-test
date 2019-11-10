import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Login from "./src/screen/Login";
import Profile from "./src/screen/Profile";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./src/Reducer/rootReducer";

const MainNavigator = createStackNavigator(
  {
    Login: {
      screen: Login,
      headerMode: "none",
      navigationOptions: {
        header: null
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: "My Profile",
        headerStyle: {
          backgroundColor: "#181818"
        },
        headerTintColor: "#fff",
        headerTitleStyle: { color: "white" }
      }
    }
  },
  {
    initialRouteName: "Login",
    headerLayoutPreset: "center"
  }
);

const App = createAppContainer(MainNavigator);

const store = createStore(rootReducer);
export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
