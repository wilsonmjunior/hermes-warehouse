import { Pressable, StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-paper";

import { Icon } from "@/components/common";
import { theme } from "@/config/theme";

type ProfilePictureProps = {
  image?: string;
  name: string;
  onOpenChangeImageModal(): void;
};

export function ProfilePicture({
  image,
  name,
  onOpenChangeImageModal,
}: ProfilePictureProps) {
  return (
    <View style={styles.profilePictureSection}>
      {image ? (
        <Avatar.Image size={143} source={{ uri: image }} />
      ) : (
        <Avatar.Text
          size={143}
          label={name}
          labelStyle={{
            color: theme.colors.gray[400],
            fontFamily: "Poppins_Medium",
            fontSize: 50,
          }}
          theme={{ colors: { primary: theme.colors.gray[100] } }}
        />
      )}
      <View style={styles.addPhotoContainer}>
        <Pressable
          onPress={onOpenChangeImageModal}
          style={styles.addPhotoButton}
        >
          <Text style={styles.addPhotoText}>Adicionar foto</Text>
          <Icon
            name="PencilSimpleLine"
            size={16}
            color={theme.colors.gray[300]}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profilePictureSection: {
    alignItems: "center",
    marginVertical: 20,
  },
  addPhotoContainer: {
    marginTop: 16,
  },
  addPhotoButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  addPhotoText: {
    color: theme.colors.gray[300],
    textDecorationLine: "underline",
  },
});
