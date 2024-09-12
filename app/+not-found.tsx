import { Link, Stack } from 'expo-router';
import { View, Text } from 'react-native';



export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View>
        <Text>Oops. We messed up!</Text>
        <Text >Sorry.</Text>
        <Link href="/">
          <Text >Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}
