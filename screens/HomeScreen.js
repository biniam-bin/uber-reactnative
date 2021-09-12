import React from 'react';
import { StyleSheet, Text, SafeAreaView, View, Image } from 'react-native';
import tw from "tailwind-react-native-classnames";
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"
import { GOOGLE_MAPS_APIKEY } from "@env";


const HomeScreen = () => {
    return (
      <SafeAreaView style={tw`bg-white h-full`}>
        <View style={tw`p-5`}>
          <Image
            style={{
              width: 100,
              height: 100,
              resizeMode: "contain",
            }}
            source={{
              uri: "https://links.papareact.com/gzs",
            }}
          />
          <GooglePlacesAutocomplete
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            // styles={{
            //   container: { flex: 0, top: 0 },
            //   textInput: { fontSize: 18 },
            // }}
                    
            query={{
              key: 'AIzaSyBvb1XOgD3jnqfV4unZmUljCBRYI_ogfcI',
              language: 'en',
            }}
            requestUrl={{
              useOnPlatform: "web", // or "all"
              url: "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api", // or any proxy server that hits https://maps.googleapis.com/maps/api
              headers: {
                Authorization: `an auth token`, // if required for your proxy
              },
            }}
            placeholder="Where from?"
          />
          <NavOptions />
        </View>
      </SafeAreaView>
    );
}


export default HomeScreen

const styles = StyleSheet.create({})
