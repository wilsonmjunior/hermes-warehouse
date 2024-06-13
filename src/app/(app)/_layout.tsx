import { Stack } from "expo-router";

export default function HomeLayout() {
    return (
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="notifications" />
        <Stack.Screen name="separation" />
        <Stack.Screen name="expedition" />
        <Stack.Screen name="profile" />
      </Stack>
    )
}
