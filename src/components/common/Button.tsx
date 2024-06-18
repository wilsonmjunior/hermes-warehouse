import * as NativePaper from "react-native-paper";

import { useTheme } from "@/config/theme";
import { StyleSheet } from "react-native";

const SIZE_HEIGHT = {
  xs: 40,
  md: 46,
  lg: 52,
};

type SizeHeight = keyof typeof SIZE_HEIGHT;

export type ButtonProps = Omit<NativePaper.ButtonProps, "children"> & {
  label: string;
  size?: SizeHeight;
};

export function Button({
  label,
  mode,
  size = "md",
  style,
  buttonColor,
  labelStyle,
  ...othersProps
}: ButtonProps) {
  const theme = useTheme();

  return (
    <NativePaper.Button
      mode={mode || "contained"}
      style={[
        styles.container,
        {
          // height: SIZE_HEIGHT[size],
          borderColor: mode === "outlined" ? theme.colors.gray[200] : "none",
        },
      ]}
      theme={{
        colors: {
          primary: buttonColor || theme.colors.primary[500],
        },
      }}
      labelStyle={[labelStyle, styles.label]}
      {...othersProps}
    >
      {label}
    </NativePaper.Button>
  );
}

export const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    height: 56,
    justifyContent: "center",
  },
  label: {
    fontFamily: "Inter_600SemiBold",
    fontSize: 16,
  },
});
