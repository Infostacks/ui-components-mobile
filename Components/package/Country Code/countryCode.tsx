import React, { useState } from 'react'
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native'
import Style from './style'
import { Actionsheet } from 'native-base'
import { Icons } from '../..'
import RadioButton from '../Radio Button/radioButton'

const CountryCode = ({
  isActionSheetOpen,
  setActionSheetOpen,
  setSelectedCountry,
  selectedCountry,
}: any) => {
  const [searchText, setSearchText] = useState('')
  const [bottomInset, setBottomInset] = useState(0)

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <Actionsheet
          isOpen={isActionSheetOpen}
          onClose={() => setActionSheetOpen(false)}
        >
          <Actionsheet.Content bottom={bottomInset}>
            <View style={Style.parentView}>
              <View>
                <Text style={Style.parentSignin}>Choose country</Text>
              </View>
              <View style={Style.view1}>
                <View style={Style.childView2}>
                  <TextInput
                    style={Style.field}
                    onChangeText={(text: any) => setSearchText(text)}
                    placeholder='Search'
                    onFocus={() => setBottomInset(300)}
                    onBlur={() => setBottomInset(0)}
                  />
                  <View style={Style.imageView}>
                    <View style={Style.image2}>
                      <Icons.SearchIcon />
                    </View>
                  </View>
                </View>
              </View>
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={Style.scrollView}
              >
                <RadioButton
                  setSelectedCountry={setSelectedCountry}
                  selectedCountry={selectedCountry}
                  searchText={searchText}
                  // setBottomInset={setBottomInset}
                  setActionSheetOpen={setActionSheetOpen}
                />
              </ScrollView>
            </View>
          </Actionsheet.Content>
        </Actionsheet>
      </KeyboardAvoidingView>
    </>
  )
}

export default CountryCode
