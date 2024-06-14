import { StyleSheet, View } from "react-native";
import { router } from "expo-router";
import { Text } from "react-native-paper";
import { BorderlessButton } from "react-native-gesture-handler";

import { theme } from "@/config/theme";

import { Icon } from "./Icon";

type HeaderProps = {
    title: string;
    back?: boolean;
    style?: any
    textColor?: string;
    onPress?: () => void;
}

export function Header({ title, back = true, style, textColor, onPress }: HeaderProps) {
    const handleNavigate  = () => {
        onPress ? onPress() : router.back();
    }

    return (
        <View style={[styles.container, style]}>
            { back ? (
                <BorderlessButton onPress={handleNavigate}>
                    <Icon name="ArrowLeft" size={22} color={textColor} />
                </BorderlessButton>
            ) : null }
            <Text variant="titleMedium" style={[styles.title, { color: textColor }]}>{title}</Text>
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
