import { useMutation } from "convex/react";
import { useState } from "react";
import {
  Alert,
  Image,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import useTheme from "../contexts/ThemeContext";
import { api } from "../convex/_generated/api";
import CircularCheckbox from "./CircularCheckBox";

const Header = () => {
  const { theme, handleToggleTheme, colour } = useTheme();
  const [todoInput, setTodoInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const addTodo = useMutation(api.mutations.addTodo.addTodo);

  const handleSubmit = async () => {
    if (!todoInput.length) {
      Alert.alert("Please enter a valid todoW");
      return;
    }
    try {
      setIsLoading(true);
      setTodoInput("");

      const todoAdded = await addTodo({
        todo: { name: todoInput, status: "active" },
      });
      Alert.alert("Todo added");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Unexpected error";
      Alert.alert(message);
    } finally {
      setIsLoading(false);
    }
  };

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
      <View style={{ position: "relative" }}>
        <TextInput
          value={todoInput}
          placeholder={
            isLoading
              ? "Creating todo, please wait..."
              : ` Create a new Todo...`
          }
          onChangeText={setTodoInput}
          editable={isLoading ? false : true}
          placeholderTextColor={colour.textSecondary}
          style={{
            ...styles.input,
            backgroundColor: colour.backgroundLight,
            color: colour.text,
            marginTop: 40,
            fontFamily: "josefin-regular",

            paddingLeft: 45,
          }}
        />
        <View style={{ position: "absolute", top: 46, left: 10 }}>
          <CircularCheckbox
            checked={todoInput.length > 0}
            onChange={handleSubmit}
          />
        </View>
      </View>
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
