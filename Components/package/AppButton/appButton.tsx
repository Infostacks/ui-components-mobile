import React from 'react'
import { View } from 'react-native'
import Style from './style'

const AppButton = ({ passedImage }: { passedImage?: any }): JSX.Element => {
  return (
    <>
      <View style={Style.parentView}>{passedImage}</View>
    </>
  )
}

export default AppButton
