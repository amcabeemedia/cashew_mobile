import NavButton from "@/components/Button";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Stack } from "expo-router";
import { View, StyleSheet, Text } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function RootLayout() {
  return (
    <View style={{ flex: 1  }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="camera" />
          <Stack.Screen name="+not-found" />
        </Stack>
      </GestureHandlerRootView>
      <View style={styles.buttonContainer}>
          <NavButton href="/" width={120}>
            <View className="flex-row items-center justify-center space-x-2 h-full w-auto">
              <Ionicons name="menu" size={12} color="white" />
              <Text className="text-white">menu</Text>
            </View>
          </NavButton>
          <NavButton href="/camera" width={120}>
            <View className="flex-row items-center justify-center space-x-2 h-full w-auto">
              <Ionicons name="camera" size={12} color="white" />
              <Text className="text-white">capture</Text>
            </View>
          </NavButton>
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
