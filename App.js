import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import IconButton from "./components/ui/IconButton";

import AllExpensesScreen from "./screens/AllExpensesScreen";
import ManageExpenseScreen from "./screens/ManageExpenseScreen";
import RecentExpensesScreen from "./screens/RecentExpensesScreen";

import { GlobalStyles } from "./constants/styles";
import ExpensesContextProvider from "./store/expenses-context";

const BottomTabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const ExpensesOverviewNavigator = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => (
          <IconButton
            name="add"
            size={24}
            color={tintColor}
            onPress={() => {
              navigation.navigate("ManageExpense");
            }}
          />
        ),
      })}
    >
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpensesScreen}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpensesScreen}
        options={{
          title: "All Expenses",
          tabBarLabel: "All",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

const App = () => {
  return (
    <>
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
              headerTintColor: "white",
            }}
          >
            <Stack.Screen
              name="ExpensesOverview"
              component={ExpensesOverviewNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ManageExpense"
              component={ManageExpenseScreen}
              options={{
                presentation: "modal",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
      <StatusBar style="light" />
    </>
  );
};

export default App;
