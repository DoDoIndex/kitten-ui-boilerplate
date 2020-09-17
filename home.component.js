import React from "react";
import { SafeAreaView } from "react-native";
import {
  Divider,
  Icon,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
  useStyleSheet,
  StyleService,
} from "@ui-kitten/components";

export const HomeScreen = ({ navigation }) => {
  const styles = useStyleSheet(themedStyles);

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation
        title="Home"
        alignment="center"
        accessoryLeft={() => (
          <TopNavigationAction
            icon={(props) => <Icon {...props} name="menu-outline" />}
            onPress={() => {
              navigation.toggleDrawer();
            }}
          />
        )}
      />

      <Divider />

      <Text category="h1">HOME</Text>
    </SafeAreaView>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: "background-basic-color-1",
  },
});
