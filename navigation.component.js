import React from "react";
import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ThemeContext } from "./theme-context";
import {
  Drawer,
  Icon,
  DrawerItem,
  IndexPath,
  useStyleSheet,
  StyleService,
} from "@ui-kitten/components";

const { Navigator, Screen } = createDrawerNavigator();

// SCREENS
import { HomeScreen } from "./home.component";
import { BookmarkScreen } from "./bookmark.component";

// DRAWER
const DrawerContent = ({ navigation, state }) => {
  const styles = useStyleSheet(themedStyles);
  const themeContext = React.useContext(ThemeContext);

  return (
    <SafeAreaView style={styles.container}>
      <Drawer selectedIndex={new IndexPath(state.index)}>
        <DrawerItem
          title="Home"
          accessoryLeft={(props) => <Icon {...props} name="home-outline" />}
          onPress={() => {
            navigation.navigate("Home");
          }}
        />
        <DrawerItem
          title="Bookmark"
          accessoryLeft={(props) => <Icon {...props} name="bookmark-outline" />}
          onPress={() => {
            navigation.navigate("Bookmark");
          }}
        />
        <DrawerItem
          title={themeContext.theme == "dark" ? "Light Mode" : "Dark Mode"}
          accessoryLeft={(props) => (
            <Icon
              {...props}
              name={
                themeContext.theme == "dark" ? "sun-outline" : "moon-outline"
              }
            />
          )}
          onPress={themeContext.toggleTheme}
        />
      </Drawer>
    </SafeAreaView>
  );
};

// Drawer Navigator
export const DrawerNavigator = () => {
  const DefaultParams = {
    BookmarkID: 0,
  };

  const [initParams, setInitParams] = React.useState(DefaultParams);

  return (
    <Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Screen name="Home" component={HomeScreen} initialParams={initParams} />
      <Screen name="Bookmark" component={BookmarkScreen} />
    </Navigator>
  );
};

// App Navigator
export const AppNavigator = () => (
  <NavigationContainer>
    <DrawerNavigator />
  </NavigationContainer>
);

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: "background-basic-color-1",
  },
});
