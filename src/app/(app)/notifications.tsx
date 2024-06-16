import { FlatList, StyleSheet, View } from "react-native";
import { Card, Avatar, Text } from "react-native-paper";

import { theme } from "@/config/theme";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "@/components/common";

const notifications = [
  {
    id: "1",
    title: "New message from John",
    description: "Hey! How are you?",
    avatar:
      "https://static.vecteezy.com/system/resources/previews/027/312/412/original/portrait-of-a-woman-astronaut-isolated-essential-workers-avatar-icons-characters-for-social-media-and-networking-user-profile-website-and-app-3d-render-illustration-png.png",
  },
  {
    id: "2",
    title: "Meeting reminder",
    description: "You have a meeting at 3 PM",
    avatar:
      "https://img.freepik.com/fotos-premium/estrela-do-rock-avatar-adolescente-guitarra_949597-44.jpg",
  },
  {
    id: "3",
    title: "Update available",
    description: "A new update is available for download.",
    avatar:
      "https://thumbs.dreamstime.com/b/um-avatar-de-homem-barbudo-bem-sucedido-%C3%ADcone-barba-isolado-283473958.jpg",
  },
];

export default function Notifications() {
  const renderItem = ({ item }) => (
    <Card mode="contained" style={styles.card}>
      <View style={styles.cardContent}>
        <Avatar.Image size={40} source={{ uri: item.avatar }} />

        <View style={styles.textContent}>
          <Text>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    </Card>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Notificações" />
      <FlatList
        data={notifications}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
        disableVirtualization
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  list: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  card: {
    borderRadius: 8,
    marginBottom: 16,
    backgroundColor: theme.colors.gray[100],
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  textContent: {
    marginLeft: 10,
  },
  description: {
    fontSize: 14,
    color: "gray",
  },
});
