import type { StorybookConfig } from '@storybook/react-webpack5'

const config: StorybookConfig = {
  stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    'storybook-addon-react-router-v6'
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  }
}
export default config
