import { SafeAreaView, View, Text, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-gray-100 pt-5">
      <Header />

      {/* Body */}
      <ScrollView>
        <Categories />

        {/* Featured Rows */}
        <FeaturedRow
          id="1"
          title="Featured"
          desc="Paid placements from our partners"
        />

        <FeaturedRow
          id="2"
          title="Tasty discounts"
          desc="Enjoy up to 50% discount"
        />

        <FeaturedRow
          id="3"
          title="Offers near you"
          desc="Support your local restaurant"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
