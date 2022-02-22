import React, { ReactNode, Children, ReactElement, cloneElement } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'


const CustormLink = ({href, children, ...props}) => {

  const {asPath} = useRouter()
  const child = Children.only(children)
  const childClassName = child.props.className || ''
  const className = href === asPath ? `${childClassName} active` : childClassName
  return (
    <Link href={href} {...props}>
      {cloneElement(child, {
        className: className || null
      })}
    </Link>
  )
}

export default CustormLink