import React from 'react'
import { TextInput, View } from 'react-native'
import Style from './style'
import { Controller } from 'react-hook-form'

const NumberField = ({
  control,
  errors,
  fieldName,
  placeholder,
  textContentType,
  message
}: any) => {
  return (
    <View>
      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message: message,
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={errors[fieldName] ? Style.inputViewError : Style.inputView}
            placeholder={placeholder}
            value={value}
            textContentType={textContentType}
            onBlur={onBlur}
            onChangeText={onChange}
          />
        )}
        name={fieldName}
      />
    </View>
  )
}

export default NumberField
