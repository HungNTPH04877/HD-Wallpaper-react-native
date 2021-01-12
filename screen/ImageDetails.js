import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Image, Alert, ImageBackground } from 'react-native';


import * as MediaLibrary from "expo-media-library";


export default function ImageDetails({ route, navigation }) {
  const { item } = route.params;

  return (

    <ImageBackground
      style={{ flex: 1 }}
      source={{
        uri:
          'https://raw.githubusercontent.com/AboutReact/sampleresource/master/crystal_background.jpg',
      }}>

      <View style={styles.container}>
        <View style={styles.imagee}>
          <Image style={{ width: '95%', height: '95%', margin: 10 }} source={{ uri: item.url_z }}></Image>
        </View>

      </View>

      <View style={{ flex: 2, alignItems: 'center', }}>
        <Button
          title="Download"
          onPress={() => {
            Alert.alert("Bạn chắc chắn muốn tải ? ", "", [
              {
                text: "OK",
                onPress: () => {
                  MediaLibrary.saveToLibraryAsync(item.url_z);
                  Alert.alert("Thông Báo ", "Tải Thành Công !");
                }
              },
              {
                text: "Đóng",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              }
            ]);
          }}

        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 8,
    alignItems: 'center',
    paddingTop: 50,
    // justifyContent: 'center',
  },
  imagee: {
    marginBottom: 10,
    width: '95%',
    borderWidth: 1,
    borderColor:'#0250a3'
  }

});
