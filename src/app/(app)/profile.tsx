import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useRef } from "react";
import { View, StyleSheet, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  Button,
  Header,
  Icon,
  IconType,
  MenuItem,
  ProfileImageUploader,
  ProfilePicture,
} from "@/components/common";
import { useProfileController } from "@/components/Screens/Profile";
import { theme } from "@/config/theme";
import { useSession } from "@/context";

type ListItem = {
  title: string;
  description: string;
  icon: IconType;
  page?: string;
  onPress?: () => void;
};

export default function Profile() {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const { handlePickImage, handleTakePhoto } = useProfileController();

  const { signOut } = useSession();

  const handleToggleChangeImageModal = () => {
    bottomSheetModalRef.current?.present();
  };

  const profileItems = [
    {
      title: "Nome",
      //   description: userProperties?.nome,
      icon: "User",
    },
    {
      title: "Email",
      //   description: userProperties?.email,
      icon: "EnvelopeSimple",
    },
    {
      title: "Senha",
      description: "********",
      icon: "Lock",
    },
    {
      title: "Número de telefone",
      //   description: userProperties?.propriedades?.celular || "",
      icon: "Phone",
    },
  ] as ListItem[];

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Perfil" />

      <View style={styles.content}>
        <ProfilePicture
          image={undefined}
          name={"UT"}
          onOpenChangeImageModal={handleToggleChangeImageModal}
        />

        <View style={styles.menu}>
          {profileItems.map(({ title, description, icon, page }) => (
            <MenuItem
              key={title}
              title={title}
              description={description}
              icon={icon}
              page={page}
            />
          ))}
        </View>

        <View style={styles.buttons}>
          <Button
            label="Sair do aplicativo"
            icon={(props) => (
              <Icon name="SignOut" size={24} color={theme.colors.white} />
            )}
            onPress={signOut}
          />
        </View>
      </View>

      <ProfileImageUploader
        bottomSheetModalRef={bottomSheetModalRef}
        onClose={() => bottomSheetModalRef.current?.dismiss()}
        onPickImage={handlePickImage}
        onTakePhoto={handleTakePhoto}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  content: {
    flex: 1,
    marginTop: 24,
    marginHorizontal: 16,
  },
  menu: {
    marginTop: 60,
  },
  buttons: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: Platform.OS === "android" ? 16 : 0,
  },
});
