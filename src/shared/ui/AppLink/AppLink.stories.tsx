import type { Meta, StoryObj } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { AppLink, AppLinkTheme } from './AppLink'
import { reactRouterParameters, withRouter } from 'storybook-addon-react-router-v6'

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  parameters: {
    layout: 'centered',
    reactRouter: reactRouterParameters({})
  },
  decorators: [withRouter],
  tags: ['autodocs']
} satisfies Meta<typeof AppLink>

export default meta
type Story = StoryObj<typeof meta>

export const PrimaryLight: Story = {
  args: {
    to: '/',
    children: 'Text',
    theme: AppLinkTheme.PRIMARY
  }
}

PrimaryLight.decorators = [ThemeDecorator(Theme.LIGHT)]

export const SecondaryLight: Story = {
  args: {
    to: '/',
    children: 'Text',
    theme: AppLinkTheme.SECONDARY
  }
}

SecondaryLight.decorators = [ThemeDecorator(Theme.LIGHT)]

export const PrimaryDark: Story = {
  args: {
    to: '/',
    children: 'Text',
    theme: AppLinkTheme.PRIMARY
  }
}

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SecondaryDark: Story = {
  args: {
    to: '/',
    children: 'Text',
    theme: AppLinkTheme.SECONDARY
  }
}

SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]
