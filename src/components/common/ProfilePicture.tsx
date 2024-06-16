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
      <View style={styles.profilePictureContent}>
        {image ? (
          <Avatar.Image
            size={143}
            source={{ uri: image }}
            style={styles.avatar}
          />
        ) : (
          <Avatar.Text
            size={143}
            label={name}
            labelStyle={{
              color: theme.colors.title[600],
              fontFamily: "Poppins_Medium",
              fontSize: 50,
            }}
            style={styles.avatar}
            theme={{ colors: { primary: theme.colors.gray[100] } }}
          />
        )}
        <View style={styles.addPhotoContainer}>
          <Pressable
            onPress={onOpenChangeImageModal}
            style={styles.addPhotoButton}
          >
            <Icon name="PlusCircle" size={24} color={theme.colors.white} />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profilePictureSection: {
    alignItems: "center",
    justifyContent: "center",
  },
  profilePictureContent: {
    width: 148,
    height: 148,
    backgroundColor: theme.colors.primary[500],
    borderRadius: 74,
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    borderWidth: 3,
    borderColor: theme.colors.white,
  },
  addPhotoContainer: {
    position: "absolute",
    right: 0,
    bottom: 16,
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.title[300],
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
