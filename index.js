import { registerRootComponent } from 'expo';
import { AppRegistry} from "react-native";
import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
AppRegistry.registerComponent('main', () => App);
registerRootComponent(App);



// import { AppRegistry, Platform } from "react-native";
// import { registerRootComponent } from "expo";
// import App from "./App";
// import { name as appName } from "./app.json";

// // registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// // It also ensures that whether you load the app in the Expo client or in a native build,
// // the environment is set up appropriately
// if (Platform.OS == "android") {
//   registerRootComponent(App);
// } else {
//   AppRegistry.registerComponent(appName, () => App);
//}