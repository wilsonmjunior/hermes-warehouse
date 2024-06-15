import { useState } from "react";
import Toast from "react-native-toast-message";
import {
  StyleSheet,
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import Logo from "@/assets/icons/logo.png";

import { Button, Input, InputPassword } from "@/components/common";
import { useSession } from "@/context";

export default function SignIn() {
  const [username, setUsername] = useState("suporte@tecmil.com.br");
  const [password, setPassword] = useState("3318813ee21eaf7b6f45a31965e9085f");
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const { signIn } = useSession();

  const handleSignIn = async () => {
    try {
      if (!username && !password) {
        return Toast.show({
          text1: "Usuário ou senha não forma informados.",
          type: "error",
        });
      }

      await signIn(username, password);
    } catch (error) {
      Toast.show({
        text1: "Erro ao fazer login.",
        type: "error",
        text2: error.error,
      });
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flexGrow: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
      >
        <ScrollView style={{ flexGrow: 1, height: "100%" }}>
          <View style={styles.logo}>
            <Image source={Logo} />
          </View>

          <View style={styles.content}>
            <Input
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="off"
              onChangeText={setUsername}
            />
            <InputPassword
              placeholder="Senha"
              onChangeText={setPassword}
              secureTextEntry={secureTextEntry}
              onPress={() => setSecureTextEntry(!secureTextEntry)}
            />

            <View style={styles.buttons}>
              <Button label="Entrar" onPress={handleSignIn} />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    gap: 16,
    marginHorizontal: 16,
  },
  buttons: {
    marginTop: 8,
  },
  logo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
