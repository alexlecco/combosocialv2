import React, { useState } from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native';
import 'expo-dev-client';

// libraries
import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native-elements';

// constants
import { colors, bgImages } from './src/constants';

const imageURL = { uri: bgImages.bg2 };

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <View style={styles.container}>
      <ImageBackground source={imageURL} resizeMode='cover' style={styles.imageCover}>
        {user && <ShowUserInfo /> }
        {user === null && (
          <>
            <View styles>
              <Button
                title='Ingresá con Google'
                onPress={() => googlePromptAsync()}
                type='clear'
                titleStyle={{ color: colors.white}}
                icon={{ name: 'google', color: colors.white, type:'zocial' }}
              />
            </View>
          </>
        )}
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
  },
  screen: {
    flex: 1,
  },
  imageCover: {
    flex: 1,
    justifyContent: 'space-around',
    width: '100%',
  },
});
