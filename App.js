import React from "react";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { AppNavigator } from "./navigation.component";
import { StatusBar } from "react-native";
import { ThemeContext } from "./theme-context";
import AsyncStorage from "@react-native-community/async-storage";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default () => {
  const [themeLoaded, setThemeLoaded] = React.useState(false);
  const [theme, setTheme] = React.useState("dark");

  // Get Current Theme from Storage
  const getTheme = async () => {
    try {
      const themeValue = await AsyncStorage.getItem("@theme");
      if (themeValue != null) {
        if (themeValue == "dark" || themeValue == "light") {
          setTheme(themeValue);
        }
      }
      setThemeLoaded(true);
    } catch (e) {
      setThemeLoaded(true);
      //console.log("ERROR Get Theme");
    }
  };

  // Save Theme to Storage
  const saveTheme = async (nextTheme) => {
    try {
      await AsyncStorage.setItem("@theme", nextTheme);
    } catch (e) {
      // console.log("ERROR Save Theme ");
    }
  };

  // Toggle Between Themes
  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    saveTheme(nextTheme);
    setTheme(nextTheme);
  };

  // Get Theme on Initial Load
  React.useEffect(() => {
    getTheme();
  });

  return (
    <SafeAreaProvider>
      <React.Fragment>
        <IconRegistry icons={EvaIconsPack} />
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <ApplicationProvider {...eva} theme={eva[theme]}>
            <StatusBar
              barStyle={(theme == "dark" ? "light" : "dark") + "-content"}
            />
            {themeLoaded && <AppNavigator />}
          </ApplicationProvider>
        </ThemeContext.Provider>
      </React.Fragment>
    </SafeAreaProvider>
  );
};
