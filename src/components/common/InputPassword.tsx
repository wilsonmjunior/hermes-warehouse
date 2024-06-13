import { TextInput, TextInputProps } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
import { Input } from "./Input";
import { theme } from "@/config/theme";

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
      textContentType="oneTimeCode" /// newPassword
      autoCapitalize="none"
      right={
        <TextInput.Icon
          icon={() => <Feather name={secureTextEntry ? "eye" : "eye-off"} size={16} color={theme.colors.primary[900]} />}
          size={20}
          onPress={onPress}
        />
      }
      {...props}
    />
  );
}
