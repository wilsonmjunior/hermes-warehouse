import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

import { theme } from "@/config/theme";

import { Icon } from "../../common/Icon";

type ExpeditionTraceabilityProps = {
    location: string;
    amount: number;
    order: number;
}

export function ExpeditionTraceability({ location, amount, order }: ExpeditionTraceabilityProps) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.circle}>
                    <Icon name="Check" size={12} color="white" />
                </View>

                <View style={styles.sectionContent}>
                    <View style={styles.row}>
                        <View style={styles.section}>
                            <Text variant="titleSmall" style={styles.title}>Localização</Text>
                            <Text variant="titleSmall" style={styles.value}>{location}</Text>
                        </View>
                        <View style={styles.section}>
                            <Text variant="titleSmall" style={styles.title}>Quantidade</Text>
                            <Text variant="titleSmall" style={styles.value}>{amount}</Text>
                        </View>
                        <View style={styles.section}>
                            <Text variant="titleSmall" style={styles.title}>Separado</Text>
                            <Text variant="titleSmall" style={styles.value}>{order}</Text>
                        </View>
                    </View>

                    <View style={styles.row}>
                        <View style={styles.section}>
                            <Text variant="titleSmall" style={styles.title}>Produto</Text>
                            <Text variant="titleSmall" style={styles.value}>{location}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 0.5,
        borderColor: theme.colors.gray[100],
        paddingHorizontal: 20,
        paddingVertical: 16
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    circle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: theme.colors.gray[900],
        justifyContent: 'center',
        alignItems: 'center',
    },
    sectionContent: {
        flex: 1,
        marginLeft: 12,
        gap: 12,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        color: theme.colors.title[400],
    },
    value: {
        color: theme.colors.title[800],
    },
    section: {
        flex: 1,
        marginRight: 16,
    },
});