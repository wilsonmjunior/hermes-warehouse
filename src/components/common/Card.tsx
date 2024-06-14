import { theme } from "@/config/theme";
import { StyleSheet, View } from "react-native";

type CardProps = {
    children: React.ReactNode;
}

export function Card({ children }: CardProps) {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderBottomWidth: 0.5,
        borderColor: theme.colors.gray[100]
    }
})
