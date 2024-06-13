import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useRef } from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import {
    Header,
  IconType,
  MenuItem,
  ProfileImageUploader,
  ProfilePicture,
} from "@/components/common";

import { theme } from "@/config/theme";
import { getStatusBarHeight } from "@/utils/status-bottom";

type ListItem = {
    title: string;
    description: string;
    icon: IconType;
    page?: string;
    onPress?: () => void;
};

export default function Profile() {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

//   const {
//     imageUri,
//     simpleName,
//     userProperties,
//     handlePickImage,
//     handleTakePhoto,
//   } = useProfileController();

//   const { signOut } = useSession();

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
                image={'imageUri'}
                name={'simpleName'}
                onOpenChangeImageModal={handleToggleChangeImageModal}
            />

            { profileItems.map(({ title, description, icon, page }) => (
                <MenuItem
                    key={title}
                    title={title}
                    description={description}
                    icon={icon}
                    page={page}
                />
            ))}
        </View>

        <ProfileImageUploader
            bottomSheetModalRef={bottomSheetModalRef}
            onClose={() => bottomSheetModalRef.current?.dismiss()}
            // onPickImage={handlePickImage}
            // onTakePhoto={handleTakePhoto}
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
    marginTop: getStatusBarHeight + 24,
    marginHorizontal: 16,
  },
});
