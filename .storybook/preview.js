import GlobalStyles from '../src/GlobalStyles'
import { configure, addDecorator } from '@storybook/react'
import StoryRouter from 'storybook-react-router'

addDecorator(StoryRouter())

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'fullscreen',
}

export const decorators = [
  Story => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
]
