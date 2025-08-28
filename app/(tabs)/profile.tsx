import { icons } from "@/constants/icons";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  return (
    <SafeAreaView className="bg-primary flex-1 px-10">
      <View className="flex justify-center items-center flex-1 flex-col gap-5">
        <Image source={icons.person} className="size-16" tintColor="#fff" />
        <Text className="text-white text-2xl font-bold">Profile</Text>
        <Text className="text-gray-400 text-center text-base mt-2">
          This feature is coming soon!
        </Text>
        <Text className="text-gray-500 text-sm mt-4">- Kiet Bui</Text>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
