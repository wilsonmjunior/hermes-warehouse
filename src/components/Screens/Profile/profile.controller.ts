import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import Toast from "react-native-toast-message";

export function useProfileController() {
  const [imageUri, setImageUri] = useState<string>();

  const handlePickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      return Toast.show({
        text1: "Desculpe, precisamos da permissão para acessar a galeria.",
        type: "error",
      });
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
      // Você pode salvar a imagem no FileSystem ou enviá-la para um servidor aqui
    }
  };

  const handleTakePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      return Toast.show({
        text1: "Desculpe, precisamos da permissão para acessar a câmera.",
        type: "error",
      });
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
      // Você pode salvar a imagem no FileSystem ou enviá-la para um servidor aqui
      return;
    }

    Toast.show({
      text1: "Nenhuma imagem selecionada.",
      type: "warning",
    });
  };

  return {
    imageUri,
    handlePickImage,
    handleTakePhoto,
  };
}
