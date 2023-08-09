import type { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { reactRouterParameters, withRouter } from 'storybook-addon-react-router-v6'
import AboutPage from './AboutPage'
import { RoutePath } from 'shared/config/routerConfig/routerConfig'

const meta = {
  title: 'pages/AboutPage',
  component: AboutPage,
  parameters: {
    layout: 'centered',
    reactRouter: reactRouterParameters({ routing: RoutePath.about })
  },
  decorators: [withRouter],
  tags: ['autodocs']
} satisfies Meta<typeof AboutPage>

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
