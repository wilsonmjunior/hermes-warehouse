import { TextInput, TextInputProps } from "react-native-paper";
import { StyleSheet } from "react-native";

import { theme } from "@/config/theme";

export function Input({ style, outlineStyle, ...props }: TextInputProps) {
  return (
    <TextInput
      style={[style, styles.container]}
      outlineColor={theme.colors.gray[200]}
      outlineStyle={[styles.outline, outlineStyle]}
      mode="outlined"
      theme={{
        colors: {
          primary: theme.colors.primary[500],
        },
      }}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    fontSize: 14,
  },
  outline: {
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: theme.colors.outline,
  },
});
