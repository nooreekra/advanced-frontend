import type { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Sidebar } from './Sidebar'
import { reactRouterParameters, withRouter } from 'storybook-addon-react-router-v6'
import { RoutePath } from 'shared/config/routerConfig/routerConfig'

const meta = {
  title: 'widget/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'centered',
    reactRouter: reactRouterParameters({ routing: RoutePath.main })
  },
  decorators: [withRouter],
  tags: ['autodocs']
} satisfies Meta<typeof Sidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {}
}

Light.decorators = [ThemeDecorator(Theme.LIGHT)]

export const Dark: Story = {
  args: {}
}

Dark.decorators = [ThemeDecorator(Theme.DARK)]
