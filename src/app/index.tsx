import { StyleSheet, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Logo from '@/assets/icons/logo.png';

import { Button, Input, InputPassword } from "@/components/common";
import { router } from "expo-router";

export default function SignIn() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.logo}>
                <Image source={Logo} />
            </View>

            <View style={styles.content}>
                <Input placeholder="Email" />
                <InputPassword placeholder="Senha" onPress={() => { }} />

                <View style={styles.buttons}>
                    <Button label="Entrar" onPress={() => { router.push('(app)') }} />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        gap: 16,
        marginHorizontal: 16
    },
    buttons: {
        marginTop: 8
    },
    logo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
