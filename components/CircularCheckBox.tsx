import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";

const CircularCheckbox = ({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: () => void;
}) => {
  return (
    <Pressable onPress={onChange} style={styles.container}>
      <View style={[styles.circle, checked && styles.checkedCircle]}>
        {checked && <Ionicons name="checkmark" size={16} color="#fff" />}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    // alignItems: "center",
    // justifyContent: "center",
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#55ddff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  checkedCircle: {
    backgroundColor: "#55ddff",
    borderColor: "#c058f3",
  },
});

export default CircularCheckbox;
