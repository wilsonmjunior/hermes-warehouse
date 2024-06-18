import { TextInput, TextInputProps } from "react-native-paper";

import { theme } from "@/config/theme";

import { Icon } from "./Icon";
import { Input } from "./Input";

type InputPasswordProps = TextInputProps & {
  onPress(): void;
};

export function InputPassword({
  label,
  secureTextEntry = true,
  onPress,
  ...props
}: InputPasswordProps) {
  return (
    <Input
      label={label}
      secureTextEntry={secureTextEntry}
      autoComplete="off"
      textContentType="newPassword"
      autoCapitalize="none"
      right={
        <TextInput.Icon
          icon={() => (
            <Icon
              name={secureTextEntry ? "Eye" : "EyeSlash"}
              size={16}
              color={theme.colors.primary[900]}
            />
          )}
          size={20}
          onPress={onPress}
        />
      }
      {...props}
    />
  );
}
