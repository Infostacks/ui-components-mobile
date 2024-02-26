import React from 'react';
import {TextInput, View} from 'react-native';
import Style from './style';
import {Controller} from 'react-hook-form';
import {AuthenticationValidators} from '@infostacks/validators';

const NumberField = ({
  control,
  errors,
  fieldName,
  placeholder,
  textContentType,
}: any) => {
  return (
    <View>
      <Controller
        control={control}
        rules={{
          required: {
            value: true,
            message: AuthenticationValidators.INCOMPLETE_FIELDS,
          },
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            className={
              errors[fieldName] ? Style.inputViewError : Style.inputView
            }
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
  );
};

export default NumberField;
