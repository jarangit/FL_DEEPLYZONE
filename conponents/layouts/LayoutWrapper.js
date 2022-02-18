import React from 'react'
import DefaultLayout from './default/DefaultLayout'
import AdminLayout from './admin/AdminLayout'


const layouts = {
  default: DefaultLayout,
  admin: AdminLayout
}
const LayoutWrapper = (props) => {
  // to get the text value of the assigned layout of each component
  const Layout = layouts[props.children.type.layout];
  // if we have a registered layout render children with said layout
  if (Layout != null) {
    return <Layout {...props}>{props.children}</Layout>;
  }
  // if not render children with fragment
  return <DefaultLayout {...props}>{props.children}</DefaultLayout>;
}

export default LayoutWrapper