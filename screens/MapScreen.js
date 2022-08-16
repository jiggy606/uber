import { View, Text } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';

const MapScreen = () => {
  return (
    <View>
      <Text>MapScreen and all</Text>

      <View style={tw`h-1/2 bg-red-300`}></View>

      <View style={tw`h-1/2 bg-red-900`}></View>
    </View>
  )
}

export default MapScreen