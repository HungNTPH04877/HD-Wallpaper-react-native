import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity, Image, ImageBackground } from 'react-native';

export default function ProfileScreen({ navigation }) {

  const [dulieu, setDuLieu] = useState();

  useEffect(() => {
    fetch('https://www.flickr.com/services/rest', {
      method: 'POST',
      body: new URLSearchParams({
        api_key: '20d1f54eba558ce383c6b8109984412e',
        user_id: '147096611@N02',
        extras: 'views, media, path_alias, url_sq, url_t, url_s, url_q, url_m, url_n, url_z, url_c, url_l, url_o',
        format: 'json',
        method: 'flickr.favorites.getList',
        nojsoncallback: '1',
        per_page: '50',
        page: '0',
      }).toString(),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(response => response.json())
      .then(json => setDuLieu(json.photos.photo))
  })
  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={{
        uri:
          'https://raw.githubusercontent.com/AboutReact/sampleresource/master/crystal_background.jpg',
      }}>
      <View style={styles.container}>

        <FlatList
          style={{ marginTop: 10 }}
          data={dulieu}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={{ width: '46%', marginBottom: 10, borderWidth: 2, padding: 10, margin: 8, backgroundColor: '#fff' }}>
              <TouchableOpacity onPress={() =>
                navigation.navigate('Image', { item })
              }>
                {/* <Text>{item.title}</Text> */}
                <Image style={{ width: '95%', height: 150, marginBottom: 5, }} source={{ uri: item.url_z }}></Image>
                <Text style={styles.text}>Viewed: {item.views}</Text>

              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => item.id}
        />

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: 10,
    // marginLeft: 170,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});