import { StyleSheet, View } from "react-native";
import { router } from "expo-router";
import { Text } from "react-native-paper";
import { BorderlessButton } from "react-native-gesture-handler";

import { theme } from "@/config/theme";

import { Icon } from "./Icon";

type HeaderProps = {
    title: string;
    back?: boolean;
    onPress?: () => void;
}

export function Header({ title, back = true, onPress }: HeaderProps) {
    const handleNavigate  = () => {
        onPress ? onPress() : router.back();
    }

    return (
        <View style={styles.container}>
            { back ? (
                <BorderlessButton onPress={handleNavigate}>
                    <Icon name="ArrowLeft" size={18} />
                </BorderlessButton>
            ) : null }
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical : 8,
        borderBottomWidth: 0.2,
        borderBottomColor: theme.colors.outline,
    },
    title: {
        marginLeft: 16,
        color: theme.colors.title[800],
    }
});
