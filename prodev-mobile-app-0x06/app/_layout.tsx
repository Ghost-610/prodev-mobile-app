import { Stack } from "expo-router";
import { View } from 'react-native'

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="/" />
      <Stack.Screen name="join" />
      <Stack.Screen name="signin" />
      <Stack.Screen name="(home)/search" />
      <Stack.Screen name="(home)/saved" />
      <Stack.Screen name="(home)/inbox" />
      <Stack.Screen name="(home)/profile" />
 
    </Stack>
  );
}