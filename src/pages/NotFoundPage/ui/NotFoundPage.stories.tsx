import type { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { reactRouterParameters, withRouter } from 'storybook-addon-react-router-v6'
import { RoutePath } from 'shared/config/routerConfig/routerConfig'
import { NotFoundPage } from './NotFoundPage'

const meta = {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
  parameters: {
    layout: 'centered',
    reactRouter: reactRouterParameters({ routing: RoutePath.not_found })
  },
  decorators: [withRouter],
  tags: ['autodocs']
} satisfies Meta<typeof NotFoundPage>

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
