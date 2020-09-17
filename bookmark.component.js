import React from "react";
import { SafeAreaView } from "react-native";
import {
  Divider,
  Icon,
  Text,
  TopNavigation,
  TopNavigationAction,
  useStyleSheet,
  StyleService,
} from "@ui-kitten/components";

export const BookmarkScreen = ({ navigation }) => {
  const styles = useStyleSheet(themedStyles);

  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation
        title="Bookmark"
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

      <Text category="h1">BOOKMARK</Text>
    </SafeAreaView>
  );
};

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: "background-basic-color-1",
  },
});
