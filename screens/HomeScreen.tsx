import { SafeAreaView, View, Text, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import Categories from "../components/Categories";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      <Header />

      {/* Body */}
      <ScrollView>
        {/* Categories */}
        <Categories />

        {/* Featured Rows */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
