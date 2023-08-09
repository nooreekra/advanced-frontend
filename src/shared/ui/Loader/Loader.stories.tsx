import type { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { reactRouterParameters, withRouter } from 'storybook-addon-react-router-v6'
import { Loader } from './Loader'

const meta = {
  title: 'shared/Loader',
  component: Loader,
  parameters: {
    layout: 'centered',
    reactRouter: reactRouterParameters({})
  },
  decorators: [withRouter],
  tags: ['autodocs']
} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {
  args: {
  }
}

Normal.decorators = [ThemeDecorator(Theme.LIGHT)]

export const Dark: Story = {
  args: {
  }
}

Dark.decorators = [ThemeDecorator(Theme.DARK)]
