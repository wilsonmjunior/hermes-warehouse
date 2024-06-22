import { View, StyleSheet, Dimensions } from "react-native";

import { Icon } from "@/components/common";
import { theme } from "@/config/theme";
import { Text } from "react-native-paper";

const { width } = Dimensions.get("window");

type CameraPermissionDeniedProps = {
  message: string;
};

export function CameraPermissionDenied({
  message,
}: CameraPermissionDeniedProps) {
  return (
    <View style={styles.container}>
      <Icon
        name="CameraSlash"
        size={width * 0.3}
        color={theme.colors.title[300]}
      />
      <Text variant="titleSmall" style={styles.message}>
        {message}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  message: {
    color: theme.colors.title[800],
    textAlign: "center",
    marginTop: 12,
  },
});
