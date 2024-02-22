import type { Meta, StoryObj } from '@storybook/react'
import { View } from 'react-native'
import { AppButton, Icons } from '../index'

const meta = {
  title: 'Button/AppButton',
  component: AppButton,
  argTypes: {
    // passedImage: {control: ''}
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof AppButton>

export default meta

type Story = StoryObj<typeof meta>

export const Google: Story = {
  args: {
    passedImage: <Icons.GoogleIcon />,
  },
}

export const LinkedIn: Story = {
  args: {
    passedImage: <Icons.LinkDinIcon />,
  },
}

export const Github: Story = {
  args: {
    passedImage: <Icons.GithubIcon />,
  },
}
