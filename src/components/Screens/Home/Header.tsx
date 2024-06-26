import { Icon } from "@/components/common";
import { theme } from "@/config/theme";
import { router } from "expo-router";
import { StyleSheet, View } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Text } from "react-native-paper";

type HeaderProps = {
  username?: string;
};

export function Header({ username }: HeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <BorderlessButton onPress={() => router.push("profile")}>
          <Icon name="UserCircle" size={24} color={theme.colors.title[800]} />
        </BorderlessButton>

        <Text variant="titleSmall" style={styles.title}>
          Wilson Junior
        </Text>
      </View>

      <BorderlessButton onPress={() => router.push("notifications")}>
        <Icon name="Bell" size={24} color={theme.colors.title[800]} />
      </BorderlessButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 0.2,
    borderColor: theme.colors.outline,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    marginLeft: 16,
    color: theme.colors.title[800],
  },
  buttons: {
    flexDirection: "row",
    gap: 8,
  },
});
