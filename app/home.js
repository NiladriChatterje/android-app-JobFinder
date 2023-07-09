import { useState } from "react";
import { SafeAreaView, ScrollView, ToastAndroid, View } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";

const Home = ({ inputName, toggle }) => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      {!toggle && <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimension='40%'
              handlePress={() => ToastAndroid.showWithGravity("Functionality Not available", ToastAndroid.SHORT, ToastAndroid.TOP)} />

          ),
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={images.profile} dimension='100%'
              handlePress={() => ToastAndroid.showWithGravity("Functionality Not available", ToastAndroid.SHORT, ToastAndroid.TOP)} />
          ),
          headerTitle: "",
        }}
      />}

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome
            inputName={inputName}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`)
              }
            }}
          />

          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
