import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Radio } from 'native-base'
import Style from './style'

const Category = ({
  handleCardSelection,
  selectedCard,
  cardIndex,
  title,
  Image,
}: any) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={Style.cardContainer(selectedCard, cardIndex)}
      onPress={() => handleCardSelection(cardIndex)}
    >
      <View style={Style.mainView}>
        <View style={Style.imageView}>{Image}</View>
        <View style={Style.radioView}>
          <View style={Style.RadioButton}>
            <Radio.Group
              name='myRadioGroup'
              accessibilityLabel='favorite number'
            >
              <Radio
                accessibilityLabel='Custom Radio Button'
                colorScheme='purple'
                width={7}
                size='lg'
                height={7}
                value='value'
              />
            </Radio.Group>
          </View>
        </View>
      </View>
      <View style={Style.textView}>
        <Text style={Style.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Category
