import NavButton from "@/components/Button";
import { Stack } from "expo-router";
import { View, StyleSheet } from "react-native";

export default function RootLayout() {
  return (
    <View style={{ flex: 1  }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="camera" />
        <Stack.Screen name="+not-found" />
      </Stack>
      <View style={styles.buttonContainer}>
          <NavButton href="/camera">menu</NavButton>
          <NavButton href="/">camera</NavButton>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    ...StyleSheet.absoluteFillObject,
    flexDirection: 'row',
    justifyContent: 'center',
    top: '87%',
    zIndex: 99,
  },
});
