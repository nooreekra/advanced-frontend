import { type ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface ProtalProps {
  children?: ReactNode
  element?: HTMLElement
}

export const Portal = (props: ProtalProps) => {
  const {
    children,
    element = document.body
  } = props
  return createPortal(children, element)
}
