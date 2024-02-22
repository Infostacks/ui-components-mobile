import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { View } from 'react-native'
import CustomButton from '../package/Button/index'

const meta = {
  title: 'Button/CustomButton',
  component: CustomButton,
  argTypes: {
    title: { control: 'text' },
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 0 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof CustomButton>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    title: 'SignIn',
  },
}
