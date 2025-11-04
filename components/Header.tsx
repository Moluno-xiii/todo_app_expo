import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import useTheme from "../contexts/ThemeContext";
import colours from "../colours";

const Header = () => {
  const { theme, handleToggleTheme, colour } = useTheme();
  const [todoInput, setTodoInput] = useState("");

  return (
    <ImageBackground
      source={
        theme === "dark"
          ? require(`../assets/bg_image_dark.png`)
          : require(`../assets/bg_image_light.png`)
      }
      resizeMode="cover"
      style={styles.screen}
    >
      <View style={styles.logoContainer}>
        <Image
          alt="logo"
          source={require("../assets/logo.png")}
          style={{ width: 109, height: 20 }}
        />
        <TouchableOpacity onPress={handleToggleTheme}>
          <Image
            alt="theme toggle"
            source={
              theme === "light"
                ? require("../assets/moon.png")
                : require("../assets/sun_logo.png")
            }
            style={{ width: 19.32, height: 20 }}
          />
        </TouchableOpacity>
      </View>

      <TextInput
        value={todoInput}
        placeholder="Create a new Todo..."
        onChangeText={setTodoInput}
        placeholderTextColor={colour.textInactive}
        style={{
          ...styles.input,
          backgroundColor: colour.backgroundLight,
          color: colour.text,
          marginTop: 40,
        }}
      />
    </ImageBackground>
  );
};

export default Header;

const styles = StyleSheet.create({
  screen: {
    paddingTop: 48,
    paddingBottom: 44,
    paddingHorizontal: 24,
    height: 200,
  },
  logoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    marginTop: 20,
    padding: 12,
    borderRadius: 8,
  },
});
