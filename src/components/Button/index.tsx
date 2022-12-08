import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { ButtonProp } from "../../interfaces/Button.interface";
import styles from "./styles";

export default function Button({ onPress, title, type, ...rest }: ButtonProp) {
  return (
    <TouchableOpacity
      style={
        type == "primary"
          ? styles.buttonGreen
          : type == "third"
          ? styles.buttonOrange
          : styles.buttonPurple
      }
      onPress={onPress}
      {...rest}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
