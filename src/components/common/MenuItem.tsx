import { useRouter } from "expo-router";
import { View, StyleSheet } from "react-native";
import {
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native-gesture-handler";
import { Divider, Text } from "react-native-paper";

import { Icon, IconType } from "./Icon";

import { theme } from "@/config/theme";

type MenuItemItemProps = TouchableOpacityProps & {
  title: string;
  description?: string;
  divider?: boolean;
  icon: IconType;
  iconColor?: string;
  iconBg?: string;
  page?: string;
};

export function MenuItem({
  title,
  description,
  divider = true,
  icon,
  iconColor,
  iconBg,
  page,
  onPress,
  ...otherProps
}: MenuItemItemProps) {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => (page ? router.push(page as any) : onPress && onPress())}
      {...otherProps}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <View
            style={[
              styles.icon,
              {
                backgroundColor: iconBg || theme.colors.primary[100],
              },
            ]}
          >
            <Icon
              name={icon}
              size={20}
              color={iconColor || theme.colors.primary[500]}
            />
          </View>

          <View style={styles.contentText}>
            <Text
              variant="titleSmall"
              style={[
                styles.title,
                !description
                  ? { fontSize: 16, color: theme.colors.gray[600] }
                  : null,
              ]}
            >
              {title}
            </Text>
            {description ? (
              <Text variant="labelLarge">{description}</Text>
            ) : null}
          </View>
        </View>

        {page ? <Icon name="CaretRight" /> : null}
      </View>

      <View style={styles.divider}>{divider ? <Divider /> : null}</View>
    </TouchableOpacity>
  );
}

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  contentText: {
    gap: 12,
  },
  title: {
    color: `${theme.colors.gray[600]}`,
  },
  description: {
    color: theme.colors.gray[600],
    fontSize: 16,
  },
  divider: {
    marginVertical: 16,
  },
  icon: {
    alignSelf: "center",
    width: 38,
    height: 38,
    borderRadius: 38,
    alignItems: "center",
    justifyContent: "center",
  },
});
