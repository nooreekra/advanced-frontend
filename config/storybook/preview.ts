import type { Preview } from '@storybook/react'
import { Theme } from '../../src/app/providers/ThemeProvider'
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator'
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { reactRouterParameters, withRouter } from 'storybook-addon-react-router-v6'
import { RoutePath } from 'shared/config/routerConfig/routerConfig'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    reactRouter: reactRouterParameters({ routing: RoutePath.main }),
    decorators: [withRouter, ThemeDecorator(Theme.LIGHT), StyleDecorator]
  }
}

export default preview
