import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className='text-3xl'>India</Text>
      <StatusBar style="auto" />
      <Link href={"/profile"} style={{color: 'white', backgroundColor: 'blue', padding: 5}}>Go to profile</Link>
    </View>
  );
}
