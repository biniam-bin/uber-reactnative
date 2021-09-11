import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'


const data = [
    {
        id: "123",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen",

    },
    {
        id: "456",
        title: "Order food",
        image: "https://links.papareact.com/28w",
        screen: "EatsScreen",
    }

]


const NavOptions = () => {
    return (
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={ item => (
          <TouchableOpacity>
            <View
              style={
                (tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-1`)
              }
                    
            >
              <Image
                style={{
                  width: 120,
                  height: 120,
                  resizeMode: "contain",
                }}
                source={{
                  uri: item.image,
                }}
              />
              <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    );
}

export default NavOptions

const styles = StyleSheet.create({})