import type { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonSize, ButtonTheme } from './Button'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Text'
  }
}

Primary.decorators = [ThemeDecorator(Theme.LIGHT)]

export const Clear: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.CLEAR
  }
}

Clear.decorators = [ThemeDecorator(Theme.LIGHT)]

export const ClearInverted: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.CLEAR_INVERTED
  }
}

ClearInverted.decorators = [ThemeDecorator(Theme.LIGHT)]

export const Outline: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.M
  }
}

Outline.decorators = [ThemeDecorator(Theme.LIGHT)]

export const OutlineSizeL: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L
  }
}

OutlineSizeL.decorators = [ThemeDecorator(Theme.LIGHT)]

export const OutlineSizeXL: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL
  }
}

OutlineSizeXL.decorators = [ThemeDecorator(Theme.LIGHT)]

export const OutlineDark: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.OUTLINE
  }
}

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]

export const BackgroundTheme: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND
  }
}

export const BackgroundInverted: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED
  }
}

export const SquareSizeM: Story = {
  args: {
    children: '<',
    square: true,
    theme: ButtonTheme.BACKGROUND,
    size: ButtonSize.M
  }
}

export const SquareSizeL: Story = {
  args: {
    children: '<',
    square: true,
    theme: ButtonTheme.BACKGROUND,
    size: ButtonSize.L
  }
}

export const SquareSizeXL: Story = {
  args: {
    children: '<',
    square: true,
    theme: ButtonTheme.BACKGROUND,
    size: ButtonSize.XL
  }
}
