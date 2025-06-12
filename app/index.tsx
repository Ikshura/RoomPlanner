import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-2xl text-blue-500 font-bold">Hi Madoora!</Text>
      <Link href="/roomsetup"> Create new setup </Link>
    </View>
  );
}
