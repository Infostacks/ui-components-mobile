import React from 'react'
import {View, Text} from 'react-native'

export interface CustomButtonProps {
    text: string
}

const CustomButton = ({text}:CustomButtonProps): React.JSX.Element =>  {
    return (
        <View>
            <Text>
                {text}
            </Text>
        </View>
    )
}

export default CustomButton