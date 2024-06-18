import { theme } from "@/config/theme";
import { Pressable, PressableProps, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { SvgProps } from "react-native-svg";

type ServiceCardProps = PressableProps & {
  icon: React.FC<SvgProps>;
  title: string;
  selected?: boolean;
};

export function ServiceCard({
  icon: Icon,
  title,
  selected,
  ...props
}: ServiceCardProps) {
  return (
    <Pressable
      style={[
        styles.container,
        selected && { backgroundColor: theme.colors.primary[600] },
      ]}
      {...props}
    >
      <Icon width={102} height={102} />
      <Text
        variant="titleSmall"
        style={[
          styles.title,
          { color: selected ? theme.colors.white : theme.colors.title[800] },
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 149,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.white,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  title: {
    marginTop: 12,
  },
});
