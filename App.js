import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, Text } from "native-base";
import Ionicons from "@expo/vector-icons/Ionicons";
import Profile from "./screens/profile";
import AddService from "./screens/add-service";
import AddList from "./screens/add-list";
import CheckoutOrder from "./screens/checkout-order";
import AddImage from "./screens/add-image";
import SuccesOrder from "./screens/succes-order";
import Landing from "./screens/landing";
import Login from "./screens/login";
import Register from "./screens/register";
import Lupa from "./screens/lupapswd";
import DetailOrder from "./screens/detail-order";
import ListImage from "./screens/list-image";
import Orders from "./screens/orders";
import Home from "./screens/home";

// Navigator Declaration
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const noHead = { headerShown: false };

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          let iconName;
          switch (route.name) {
            case "Home":
              iconName = "home-outline";
              break;
            case "Order":
              iconName = "reader-outline";
              break;
            case "Profile":
              iconName = "person-circle-outline";
              break;
          }
          return (
            <Ionicons
              name={iconName}
              size={28}
              color={"white"}
            />
          );
        },
        tabBarIconStyle: { marginTop: 5 },
        tabBarStyle: {
          height: 70,
          borderTopWidth: 0,
          backgroundColor: "#82a9f4",
        },
        tabBarLabel: ({ children }) => {
          return (
            <Text color={"white"} mb={2}>
              {children}
            </Text>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} options={noHead} />
      <Tab.Screen name="Orders" component={Orders} options={noHead} />
      <Tab.Screen name="Profile" component={Profile} options={noHead} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen name="Tabs" component={Tabs} options={noHead} />
          <Stack.Screen name="AddService" component={AddService} options={noHead} />
          <Stack.Screen name="AddList" component={AddList} options={noHead} />
          <Stack.Screen name="CheckoutOrder" component={CheckoutOrder} options={noHead} />
          <Stack.Screen name="AddImage" component={AddImage} options={noHead} />
          <Stack.Screen name="SuccesOrder" component={SuccesOrder} options={noHead} />
          <Stack.Screen name="Landing" component={Landing} options={noHead} />
          <Stack.Screen name="Login" component={Login} options={noHead} />
          <Stack.Screen name="Register" component={Register} options={noHead}/>
          <Stack.Screen name="Lupa" component={Lupa} options={noHead}/>
          <Stack.Screen name="DetailOrder" component={DetailOrder} options={noHead} />
          <Stack.Screen name="ListImage" component={ListImage} options={noHead} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
