import { BottomSheetModal } from "@gorhom/bottom-sheet";
import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

import { BottomModal } from "./BottomModal";
import { Icon } from "./Icon";

import { theme } from "@/config/theme";

type ProfileImageUploaderProps = {
  onPickImage(): void;
  onTakePhoto(): void;
  onClose(): void;
  bottomSheetModalRef: React.RefObject<BottomSheetModal>;
};

export function ProfileImageUploader({
  onPickImage,
  onTakePhoto,
  onClose,
  bottomSheetModalRef,
}: ProfileImageUploaderProps) {
  return (
    <BottomModal bottomSheetModalRef={bottomSheetModalRef}>
      <Pressable onPress={onClose}>
        <Icon name="X" size={24} />
      </Pressable>
      <Pressable
        onPress={() => {
          onPickImage();
          onClose();
        }}
        style={styles.button}
      >
        <Icon name="Images" size={24} color={theme.colors.title[600]} />
        <Text style={styles.text}>Escolher da Galeria</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          onTakePhoto();
          onClose();
        }}
        style={styles.button}
      >
        <Icon name="Camera" size={24} color={theme.colors.title[600]} />
        <Text style={styles.text}>Tirar Foto</Text>
      </Pressable>
    </BottomModal>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  text: {
    color: theme.colors.title[600],
  },
});
