import { BorderlessButton } from "react-native-gesture-handler";
import * as Clipboard from "expo-clipboard";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import Toast from "react-native-toast-message";

import { theme } from "@/config/theme";

import { Card } from "./Card";
import { Icon } from "./Icon";

type ProductCodeProps = {
  code: string;
};

export function ProductCode({ code }: ProductCodeProps) {
  const handleCopy = async () => {
    try {
      await Clipboard.setStringAsync(code);

      Toast.show({
        text1: "Código copiado com sucesso.",
        type: "success",
      });
    } catch (error) {
      await Clipboard.setStringAsync(code);
      Toast.show({
        text1: "Não foi possível copiar código.",
        type: "error",
      });
    }
  };

  return (
    <Card>
      <View style={styles.section}>
        <Text variant="titleSmall" style={styles.title}>
          Código
        </Text>
        <Text variant="titleSmall" style={styles.value}>
          {code}
        </Text>
      </View>

      <BorderlessButton style={styles.button} onPress={handleCopy}>
        <Icon name="Copy" color={theme.colors.title[400]} />
      </BorderlessButton>
    </Card>
  );
}

const styles = StyleSheet.create({
  section: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: theme.colors.title[400],
  },
  value: {
    color: theme.colors.title[800],
  },
  button: {
    marginLeft: 16,
  },
});
