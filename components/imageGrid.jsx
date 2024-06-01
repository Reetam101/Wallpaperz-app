import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MasonryFlashList } from "@shopify/flash-list";
import ImageCard from "./imageCard";
import { wp } from "../helpers/common";

const ImageGrid = ({ images }) => {
  return (
    <View style={styles.container}>
      <MasonryFlashList
        data={images}
        numColumns={2}
        contentContainerStyle={styles.listCon}
        renderItem={({ item }) => <ImageCard item={item} />}
        estimatedItemSize={200}
      />
    </View>
  );
};

export default ImageGrid;

const styles = StyleSheet.create({
  container: {
    minHeight: 3,
    width: wp(100),
  },
});
