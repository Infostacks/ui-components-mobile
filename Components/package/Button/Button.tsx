import React from 'react'
import { Text, View } from 'react-native'
import Style from './style'
const CustomButton = ({ title }: { title: string }): JSX.Element => {
  return (
    <View>
      <View style={Style.touchOpacity}>
        <Text style={Style.text}>{title}</Text>
      </View>
    </View>
  )
}
export default CustomButton
