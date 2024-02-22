import { Radio } from 'native-base'
import React from 'react'
import { Text, View } from 'react-native'
import Style from './style'
import Countries from '../../Utils/Country Strings/countries'

const RadioButton = ({
  setSelectedCountry,
  selectedCountry,
  searchText,
  setActionSheetOpen,
}: any) => {
  const filteredCountries = Countries?.filter((country) =>
    country?.name?.toLowerCase().includes(searchText.toLowerCase())
  )

  return (
    <Radio.Group
      name='myRadioGroup'
      value={selectedCountry}
      onChange={(nextValue: string) => {
        setSelectedCountry(nextValue)
        setActionSheetOpen(false)
      }}
      accessibilityLabel='favorite number'
    >
      {filteredCountries?.map((country, id) => (
        <View key={id} style={Style.parentView}>
          <View style={Style.countryView}>
            <Text style={Style.text}>{country?.name}</Text>
            <Text style={Style.text1}>( {country?.dial_code} )</Text>
          </View>
          <Radio
            accessibilityLabel='Custom Radio Button'
            colorScheme='purple'
            width={5}
            size='sm'
            height={5}
            value={country?.name}
          ></Radio>
        </View>
      ))}
    </Radio.Group>
  )
}

export default RadioButton
