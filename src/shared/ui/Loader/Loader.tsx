import React from 'react'
import './Loader.scss'
import { classNames } from 'shared/lib/classNames/classNames'

interface LoaderProps {
    className?: string
}

export const Loader = ({className}: LoaderProps) => {
  return (
    <div className={classNames('lds-ellipsis', {}, [])}><div/><div/><div/><div/></div>
  )
}
