import { Redirect, Stack } from "expo-router";

import { useSession } from "@/context";

export default function HomeLayout() {
  const { authSession } = useSession();

  if (!authSession?.access_token) {
    return <Redirect href="/" />;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="notifications" />
      <Stack.Screen name="picking/[data]" />
      <Stack.Screen name="picking-details/[data]" />
      <Stack.Screen name="expedition" />
      <Stack.Screen name="profile" />
    </Stack>
  );
}
