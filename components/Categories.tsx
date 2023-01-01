import { ScrollView, Text } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import { SanityDocumentStub } from "@sanity/client";
import sanityClient, { urlFor } from "../sanity";

const Categories = () => {
  const [Categories, setCategories] = useState<SanityDocumentStub[]>([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "category"]
    `
      )
      .then((data) => setCategories(data));
  }, []);
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      {Categories?.map((category) => (
        <CategoryCard
          key={category._id}
          imgUrl={urlFor(category.image).width(200).url()}
          title={category.name}
        />
      ))}

      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Test 2" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Test 3" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Test 3" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Test 3" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Test 3" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Test 3" />
    </ScrollView>
  );
};

export default Categories;
