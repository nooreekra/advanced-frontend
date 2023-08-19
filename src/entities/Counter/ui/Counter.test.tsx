import { screen } from '@testing-library/react'
import { componentRender } from 'shared/lib/tests/componentRender/componentRender'
import { Counter } from './Counter'
import { userEvent } from '@storybook/testing-library'
import { error } from 'console'

describe('Counter', () => {
  test('test render', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } }
    })
    expect(screen.getByTestId('value-title')).toHaveTextContent('10')
  })

  test('increment', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } }
    })
    userEvent.click(screen.getByTestId('increment-btn')).then(() => {
      expect(screen.getByTestId('value-title')).toHaveTextContent('11')
    }).catch(error)
  })

  test('decrement', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } }
    })
    userEvent.click(screen.getByTestId('decrement-btn')).then(() => {
      expect(screen.getByTestId('value-title')).toHaveTextContent('9')
    }).catch(error)
  })
})
